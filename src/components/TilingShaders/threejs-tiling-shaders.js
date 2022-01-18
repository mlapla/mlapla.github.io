"use strict";
import * as THREE from 'three';
import Stats from './jsm/libs/stats.module.js';

THREE.Cache.enabled = true;

let renderer, scene, camera, stats;

// Import all algos
// Make a canvas for each algo
// Render each algo

let shaders = [
  ['default.vs.glsl','webpack-glsl!./glsl/scrollingColor.fs.glsl'],
  ['./glsl/default.vs.glsl','./glsl/vonoroi.fs.glsl'],
  ['./glsl/default.vs.glsl','./glsl/fracBrownMotion.fs.glsl'],
  ['./glsl/default.vs.glsl','./glsl/octograms.fs.glsl'],
  ['./glsl/default.vs.glsl','./glsl/foggyVonoroi.fs.glsl'],
];

const vertexShader = require('./default.vs.glsl');
let shaderURLs = require.context('./glsl',false,/\.glsl$/);
shaderURLs = shaderURLs.keys().map(shaderURLs);

const nShaders = 6;
const nRows = 2;
const nColumns = 3;
let tileWidth = window.innerWidth / nColumns;
let tileHeight = window.innerHeight / nRows; 
let materials;

function gridOffset(n){
	// [x,y] with respect to the lower-left of the lower-left corner of the plane.
	const i = n % nColumns;
	const j = Math.floor(n / nColumns);
	return [ i * tileWidth, (nRows - 1 - j) * tileHeight]; 
}

function tileCenter(n){
	// [x,y] with respect to center of image of dim 2 window.width x 2 window.height
	const i = n % nColumns;
	const j = Math.floor(n / nColumns);
	const x = - window.innerWidth  / 2 + tileWidth  / 2 + i  * tileWidth;
	const y =   window.innerHeight / 2 - tileHeight / 2 - j * tileHeight;
	return [x,y];
}

export function getStats(){
	stats = new Stats();
	return stats.dom;
}

export function init() {

	// Renderer
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Scene
	scene = new THREE.Scene();
	camera = new THREE.OrthographicCamera(
		-window.innerWidth / 2,
		window.innerWidth / 2,
		window.innerHeight / 2,
		-window.innerHeight / 2,
		-10, 10 );
	scene.add(camera)

	// Grid of shaders
	materials = createMaterials();
	let meshes = [];
	meshes = createMeshes( materials, nRows, nColumns );
	meshes.forEach( (m) =>{
		scene.add(m);
	});
	loadShadersToMaterials( materials);

	// End init
	window.addEventListener( 'resize', onWindowResize );
	window.addEventListener( 'mousemove', onMouseMove );

	function onMouseMove(){
		materials.forEach( (m) => {
			const mouse = [event.clientX ,	window.innerHeight - event.clientY]
			m.uniforms.iMouse.value.set( mouse[0], mouse[1] );
		});
	}

	function onWindowResize(){
		// Adjust Rendering resolution
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

    	// Adjust grid of shaders resolution
		materials.forEach( (m,i) => {
			let offset = gridOffset(i)
			m.uniforms.iOffset.value.set( offset[0], offset[1] );
			m.uniforms.iResolution.value.set( window.innerWidth, window.innerHeight );
		})
	}

	return renderer;
}

export function main() {
	function animate(time){
		time *= 0.001

		materials.forEach((m) => {
			m.uniforms.iTime.value = time;
		});
		renderer.render(scene, camera);

		requestAnimationFrame(animate);
		if (stats != undefined)
			stats.update();
	}

	requestAnimationFrame(animate)
}

function createMaterials(){

	let materials = [];

	for (let i = 0; i < nShaders; i++)
	{
		const offset = gridOffset(i);

		const uniforms = {
			iTime: { value: 0 },
			iOffset: { value: new THREE.Vector2( offset[0], offset[1] ) } ,
			iTileResolution: { value : new THREE.Vector2( tileWidth, tileHeight ) },
			iResolution: { value: new THREE.Vector2( window.innerWidth, window.innerHeight ) },
			iMouse: { value: new THREE.Vector2( 0, 0 ) },
		}

		materials.push( new THREE.ShaderMaterial( { uniforms } ) );
	}

	return materials;
}

function loadShadersToMaterials(materials) {

	shaderURLs.forEach((fs,i)=>{
		materials[i].vertexShader = vertexShader.default;
		materials[i].fragmentShader = fs.default;
	});
}

function createMeshes(materials, nRows, nColumns){

	let meshes = [];
 
	const geometry = new THREE.PlaneGeometry( 1, 1 );

	// Generate meshes
	for (let i = 0; i < nShaders; i++)
	{
		const center = tileCenter(i);

		const mesh = new THREE.Mesh( geometry , materials[i] )

		mesh.scale.set( tileWidth, tileHeight, 1 );
		mesh.position.set( center[0], center[1] );

		meshes.push( mesh )
	}

	return meshes;
}