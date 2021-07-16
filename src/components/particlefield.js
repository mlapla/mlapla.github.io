// Michael Laplante 2021
// particlefield.js

class Point {
	constructor ( 	ctx , x = 0, y = 0,
					radius = 10,
					rotationRadius = 5,
					fillColor = 'black',
					strokeColor = '',
					strokeWidth  = 2	)
	{
		this.ctx = ctx
		this.x = Number(x)
		this.y = Number(y)
		this.dx = 0
		this.dy = 0
		this.vx = 0
		this.vy = 0
		this.radius = Number(radius)
		this.rotationRadius = Number(rotationRadius)
		this.fillColor = fillColor
		this.strokeColor = strokeColor
		this.strokeWidth = strokeWidth
	}

	moveTo (x,y) {
		this.x = x
		this.y = y
		this.dx = 0
		this.dy = 0
	}

	translate(dx,dy) {
		this.dx = dx
		this.dy = dy
	}

	draw () {
		this.ctx.save()

		this.ctx.fillStyle = this.fillColor
		this.ctx.lineWidth = this.strokeWidth

		this.ctx.beginPath()
		this.ctx.strokeStyle = this.strokeColor
		this.ctx.arc(this.x + this.dx,this.y + this.dy,this.radius,0,2*Math.PI,false)
		this.ctx.fill()
		this.ctx.stroke()
		this.ctx.closePath()

		this.ctx.restore()
	}
}

function init(canvas) {
	const freq = 10
	const dt = 1/freq
	const step = 25
	let Nx = 0	// for wave control
	let Ny = 0

	// Resolution
	let dpi = window.devicePixelRatio || 1;
	let rect = canvas.getBoundingClientRect();

	canvas.width = rect.width * dpi
	canvas.height = rect.height * dpi
	let ctx = canvas.getContext('2d')
	ctx.scale(dpi, dpi)

	// Scene
	function createGrid () {
		ctx.save()
		ctx.strokeStyle = 'gray' // line colors
		ctx.fillStyle = 'black' // text color
		ctx.lineWidth = 0.5

		ctx.beginPath()
		// draw vertical from X to Height
		for (let x = 0; x < canvas.width; x += step) {
			ctx.moveTo(x,0)
			ctx.lineTo(x,canvas.height)
		}

		for (let y = 0; y < canvas.height; y += step) {
			ctx.moveTo(0,y)
			ctx.lineTo(canvas.width,y)
		}
		ctx.closePath()
		ctx.stroke()

		ctx.restore()
	}

	function generatePts() {
		let pts = []
		for (let i = step; i < canvas.width - 1; i += step) {
			Nx++ //count the number of points in a row
			for (let j = step; j < canvas.height - 1 ; j += step) {
				pts.push(new Point( ctx, i , j , 0.5 ))
			}
		}
		for (let j = step; j < canvas.height - 1 ; j += step){Ny++} // count the number of points in a column

		return pts
	}

	createGrid()

	let pts = generatePts()
	pts.forEach(pt => pt.draw())

	// Interaction
	function mouseInteraction (e) {
		const rect = e.target.getBoundingClientRect();

		// Mouse position
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		pts.forEach(pt => {
			const relPosX = pt.x - x
			const relPosY = pt.y - y
			let dist = Math.sqrt((relPosX * relPosX) + (relPosY * relPosY))
			let angle = Math.atan(relPosY/relPosX)
			if (relPosX < 0)
				angle = Math.PI + angle
			if (dist < 10)
				dist = 10
			pt.vx += 1000 * Math.cos(angle) / dist
			pt.vy += 1000 * Math.sin(angle) / dist
		})
	}
	document.addEventListener('click',mouseInteraction)

	// Animations
	setInterval(animate,freq)
	let waveMotionTimer
	pushWave()

	function pushWave() {
		wave.col = 0
		waveMotionTimer = setInterval(wave,freq * 5) // start wave
	}

	function wave() {
		if (wave.col >= Nx){
			clearInterval(waveMotionTimer) 		// stop wave
			setTimeout(pushWave,2000) 	// prepare next wave
		}
		let offset = wave.col * Ny
		for (var j = 0; j < Ny; j++) {
			pts[offset + j].vy += Math.random() * 100 - 50
		}
		wave.col++
	}

	function animate() {
		ctx.save()
		ctx.clearRect(0,0,canvas.width,canvas.height)
		ctx.fillStyle = 'white'
		ctx.fillRect(0,0,canvas.width,canvas.height)
		ctx.restore()
		createGrid()
		pts.forEach(pt => {
			pt.dx += pt.vx * dt
			pt.dy += pt.vy * dt
		})
		pts.forEach(pt => {
			pt.dx *= 0.9
			pt.dy *= 0.9
			pt.vx *= 0.9
			pt.vy *= 0.9
		})
		pts.forEach(pt => pt.draw())
	}
}

export default init