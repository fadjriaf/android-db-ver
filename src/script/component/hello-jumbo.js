class HelloJumbo extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		this.innerHTML = `
		<br>
		<div class="jumbotron text-center animate__animated animate__fadeInDown animate__delay-1s">
			<h1 class="display-4">AndroidDB</h1>
			<p class="lead">The Places you can find your Android Version</p>
		</div>
		`;
	}
}

customElements.define("hello-jumbo", HelloJumbo);