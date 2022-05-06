import { useLoaderData } from '@remix-run/react';
import { getPokemon } from '../../models/Pokemon';

export async function loader({ params }) {
	const id = params.id;
	const data = await getPokemon(id);
	return data;
}

export default function Pokemon() {
	const data = useLoaderData();
	return (
		<div style={{ padding: '2rem' }}>
			<h1>{data.name}</h1>
			<img src={data.image} alt={data.name} />
			<p>
				Type: {data.type} | Height: {data.height} | Weight : {data.weight}
			</p>
		</div>
	);
}
