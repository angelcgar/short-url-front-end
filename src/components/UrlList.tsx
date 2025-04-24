import { useEffect, useState } from "react";
import axios from "axios";

export default function UrlList() {
	const [urls, setUrls] = useState([]);

	useEffect(() => {
		const fetchUrls = async () => {
			const response = await axios.get("http://localhost:3000/api/shor");
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
