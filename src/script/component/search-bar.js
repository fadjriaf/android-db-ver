class SearchBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<form class="form-inline justify-content-center animate__animated animate__fadeInDown animate__delay-1s">
		    <input class="form-control w-50" type="search" name="searchBar" id="searchBar" placeholder="Type Your Android Version" aria-label="Search">&nbsp;&nbsp;
		</form>
		<br>
		`;
	}
}

customElements.define("search-bar", SearchBar);