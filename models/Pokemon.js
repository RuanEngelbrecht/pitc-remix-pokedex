const IMAGE_URL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export async function getAllPokemon() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
	const data = await response.json();
	const pokemon = data.results.map((x, i) => ({
		id: i + 1,
		name: x.name,
		image: `${IMAGE_URL}/${i + 1}.png`,
		url: x.url,
	}));
	return pokemon;
}

export async function getPokemon(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await response.json();

	const pokemon = {
		name: data.name,
		type: data.types[0]?.type.name,
		height: data.height,
		weight: data.weight,
		image: `${IMAGE_URL}/${id}.png`,
	};

	return pokemon;
}
