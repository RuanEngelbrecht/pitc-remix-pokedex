import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import Sidebar from './Sidebar';
import { getAllPokemon } from '../models/Pokemon';

export const meta = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
});

export async function loader() {
	const data = await getAllPokemon();
	return data;
}

function Layout({ children }) {
	const data = useLoaderData();
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
			<div>
				<Sidebar data={data} />
			</div>
			<div>{children}</div>
		</div>
	);
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Layout>
					<Outlet />
				</Layout>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
