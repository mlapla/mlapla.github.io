## Simple Schrödinger Solver

I recalled the other day a nice algorithm I once read in Zettili's [Quantum Mechanics: Concepts and Applications](https://www.worldcat.org/title/quantum-mechanics-concepts-and-applications-2nd-edition/oclc/940677295&referer=brief_results) when I was an undergrad. It' a C++ algorithm to solve the 1D time-independent Schrödinger equation numerically by iterating and refining the energy bounds of the system. With this estimate of the energy, you can then simply use an approximation of the derivative to find out the wave function $\psi$. I dodged this textbook problem at the time because of the little time I had, but now it feels like a nice refresher of common skills. Rather then sticking with C++, I chose to port the algorithm to python using the *numpy* library to preserve the solving speed.

### The algorithm
Nothing difficult. Simply start with the one-dimensional time-independent Schrödinger Eq. :

$$ - \frac{\hbar^2}{2m} \frac{d^2 \psi}{dx^2} + V(x)\psi = E \psi  \quad . $$

You can gather up some terms, and have the nice wave equation:

$$ 0
    = \frac{d^2 \psi}{dx^2} + \frac{2m}{\hbar^2} \left( E-V(x) \right) \psi
    = \frac{d^2 \psi}{dx^2} + k(x)^2 \psi  \quad .
$$

The energy and potential difference can almost be interpreted as the (wave) momentum $k$ the particle carries: it is the leftover energy which our massive particle didn't use to beat the potential's resistance. The result is also, almost, a simple wave equation. As usual, the solutions to it can be classified by the numbers of nodes (zeroes) the solution has, and each solution represents an energy level $E = E_n$. There are two caveats however: *$k^2$ isn't constant*, it is a function of $x$ since it depends on the potential $V(x)$ and the energy *$E$ is not known*. If we knew the energy, then we would be left with a numerically solvable differential equation for a given potential.

In situations where the potential is known, one would usually solve the equation directly while keeping $E$ as an arbitrary real value. A set of integer-labeled solutions would then appear and these would identify the corresponding set of energy levels, $E_n$. However, to consistently solve our wave equation numerically without assuming a shape for the potential, we need some piece of information to find out the energy levels our solutions will have. With it, our algorithm could then be shaped like this:

1. Choose a potential, $V(x)$;
1. Choose an energy level, $E_n$;
1. Estimate the energy level $E_n$ the wave function $\psi_n$ would have in this potential;
1. Solve numerically the wave equation for $\psi_n$ with $E$ replaced by it's estimate.

### Estimating the energy level $E_n$

Here's the extra piece of info we needed: *the n-th energy level of a time-independent 1D system has N zeroes*. If we solve the system with an overestimate of the energy, then our solution will have an extra zero. If the energy estimate was too low, then the solution will lack a zero. This means that a shooting algorithm which starts at $x = -L$, outside the range of the important physics of a localized solution, will overshoot the boundary condition $\psi(L) \approx 0$ for overestimates of the energy. Vice-versa for underestimates of the energy level; these will undershoot the boundary condition. Thus, an iterated refining of the energy level can be made.

  ___

### Numerically solving the wave function

Standard numerical solutions to our problem, such as Zetili's, use Numerov's method to approximate the second derivative $\frac{d^2\psi}{dx^2}$ and solve the equation linearly.

Translates the problem into a discrete form of spatial resolution $h$, with boundaries $x_0 = -L$ and $x_N = L$ (where $2L = N h$):
$$
  x,\ x+h,... \rightarrow\ x_i,\ x_{i+1}, ... \\
  y(x),\ y(x+h),... \rightarrow\ y_i,\ y_{i+1}, ... \\
  k(x),\ k(x+h),... \rightarrow\ k_i,\ k_{i+1}, ...
$$
From there, we can write the Taylor expansion (to the 4-th order) of $y(x-h)$, $y(x)$ and $y(x+h)$ to get the three-point difference approximation:
$$
  \frac{\psi_{i+1} - 2\psi_i + \psi_{i-1}}{h^2} = \frac{d^2\psi}{dx^2} + \frac{h^2}{12} \frac{d^4\psi}{dx^4} + \mathcal{O}(h^6)  \quad .
$$
The 4-th derivative on the rhs is an unknown which we don't wish to solve. We can instead replace it using our schrodinger equation:
$$
  \frac{d^4\psi}{dx^4} = - \frac{d^2}{dx^2}\left(k(x)^2\psi(x)\right)
$$
Which may yet again be resolved using a three point difference via a Taylor expansion. When placed in our expression however, the leftover 4th-order derivative $\frac{d^4}{dx^4}\left(k(x)^2\psi(x)\right)$ will be of order $\mathcal{h^4}$ and can be safely ignored. This leaves us with a solvable expression for $\frac{d^2\psi}{dx^2}$ with $\mathcal{O}(h^6)$ precision:

$$
  \frac{\psi_{i+1} - 2\psi_i + \psi_{i-1}}{h^2} = \frac{d^2\psi}{dx^2} - \frac{h^2}{12} \left( \frac{k^2_{i+1}\psi_{i+1} - 2 k^2_i\psi_i + k^2_{i-1}\psi_{i-1}}{h^2} \right) + \mathcal{O}(h^4)
$$

Which yields the approximation:

$$
  \frac{d^2\psi}{dx^2} \approx \frac{\psi_{i+1} - 2\psi_i + \psi_{i-1}}{h^2} + \frac{h^2}{12} \left(\frac{k^2_{i+1}\psi_{i+1} - 2 k^2_i\psi_i + k^2_{i-1}\psi_{i-1}}{h^2} \right)
$$

Therefore, the Schrödinger wave equation is approximately solved by the solution:
$$
  \psi_{i+1} = 2 \left(\frac{1 - \frac{5}{12}h^2 k^2_i}{1+ \frac{1}{12} h^2 k^2_{i+1}}\right)\psi_i - \left(\frac{1 + \frac{1}{12}h^2 k^2_{i-1}}{1 + \frac{1}{12} h^2 k^2_{i+1}}\right) \psi_{i-1}
$$
with $\psi_0 = 0$ and $\psi_1 = \delta$, a small parameter guessed for each solution.

### Implementation

To actually get this solution to converge properly by using only estimates of the energy, we will need to iteratively verify the border condition $\psi(L)$ until it falls under some precision goal $\epsilon$. I've ported it to python and refactored it to make it clearer:

```put code here```
