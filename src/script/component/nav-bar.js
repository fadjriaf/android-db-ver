class NavBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
			    <a class="navbar-brand" href="/">
			    <img src="../src/images/andro.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"> AndroidDB</a>
			    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			        <span class="navbar-toggler-icon"></span>
			    </button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul class="navbar-nav ml-auto">
					    <li class="nav-item active">
					        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link" href="https://github.com/fadjriaf/">Github</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link" href="https://instagram.com/fadjriaf/">Instagram</a>
					    </li>
				    </ul>
				</div>
		    </div>
		</nav>
		`;
	}
}

customElements.define("nav-bar", NavBar);