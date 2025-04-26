import { useEffect, useState } from 'react';

import axios from 'axios';

import { BACKEND_URL } from '../const';

interface ShortUrl {
	id: number;
	original_url: string;
	short_code: string;
	created_at: string;
	visit_count: number;
}

export default function UrlList() {
	const [urls, setUrls] = useState<ShortUrl[]>([]);

	useEffect(() => {
		const fetchUrls = async () => {
			const response = await axios.get(`${BACKEND_URL}/api/short`);
			console.log(response.data, 'urls');
			setUrls(response.data);
		};
		fetchUrls();
	}, []);

	return (
		<ul className="url-grid">
			{urls.map((url) => (
				<li key={url.short_code} className="url-card">
					<div className="url-pair">
						<a
							href={`${BACKEND_URL}/api/short/${url.short_code}`}
							target="_blank"
							rel="noreferrer"
							className="short-url"
						>
							{`${BACKEND_URL}/api/short/${url.short_code}`}
						</a>
						<span className="original-url"> → {url.original_url}</span>
					</div>
					<div className="meta-info">
						<p>{url.created_at}</p>
						<p>{url.visit_count} visitas</p>
					</div>
				</li>
			))}
			<div className="copied-message">¡Copiado!</div>
		</ul>
	);
}
