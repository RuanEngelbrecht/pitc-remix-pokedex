import { Link } from '@remix-run/react';

export default function Sidebar({ data }) {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				gap: '2rem',
				borderRight: '1px solid lightgray',
				padding: '2rem',
			}}
		>
			{data.map((x) => (
				<Link to={`/${x.id}`} prefetch="intent">
					<div
						key={x.id}
						style={{
							display: 'grid',
							placeItems: 'center',
							border: '1px solid lightgray',
							borderRadius: '6px',
							padding: '2rem',
						}}
					>
						<img src={x.image} alt={x.name} />
						<h2 style={{ margin: 0 }}>{x.name}</h2>
						<p style={{ margin: 0 }}>#{x.id}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
