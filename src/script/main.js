const main = () => {
	const androidList = document.getElementById("android-list");
	let androver = [];
	console.log(searchBar);

	searchBar.addEventListener('keyup', (e) => {
		const searchString = e.target.value.toLowerCase();

		const filterandroid = androver.filter((android) => {
			return (
				android.codeName.toLowerCase().includes(searchString) || android.version.includes(searchString)
			);
		});
		displayandroid(filterandroid);
	});

	const loadandroid = async() => {
		try {
			const response = await fetch('https://my-json-server.typicode.com/fadjriaf/androvers/androvers');
			androver = await response.json();
			displayandroid(androver);
			console.log(androver);
		} catch (error) {
			console.error(error);
		}
	};

	const displayandroid = (android) => {
		const htmlString = android
			.map((android) => {
				return `
					<div class="col-xl-3 col-md-6 mb-4">
						<div class="card shadow" >
						  	<img src="../src/${android.image}" class="card-img-top" width="100%" height="175" alt="${android.codeName}">
						  	<div class="card-body h-100">
						    	<h5 class="card-title"><a href="${android.link}" class="card-link">${android.codeName}</a></h5>
						    	<h6 class="card-subtitle mb-2">Version : ${android.version}</h6>
						    	<h6 class="card-subtitle mb-2">Release : ${android.releaseDate}</h6><br>
						    	<h6 class="card-subtitle mb-2">Detail : <br> ${android.description}</h6>
						  	</div>
						</div>
					</div> 
				`;
			}).join('');
		androidList.innerHTML = htmlString;
	};
	loadandroid();
};

export default main;