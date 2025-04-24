import { useEffect, useState } from 'react';
import axios from 'axios';

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
			const response = await axios.get('http://localhost:3000/api/short');
			setUrls(response.data);
		};
		fetchUrls();
	}, []);

	return (
		<ul>
			{/* {urls.map((url) => (
				<li key={url.shortCode}>
					<a href={`http://localhost:3000/${url.shortCode}`}>{url.shortCode}</a>{" "}
					→ {url.originalUrl}
				</li>
			))} */}
		</ul>
	);
}
