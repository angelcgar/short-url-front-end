import { useState } from 'react';
import axios from 'axios';

export default function UrlForm() {
	const [url, setUrl] = useState('');
	const [shortUrl, setShortUrl] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:3000/api/short', {
				original_url: url,
			});
			console.log(response.data);
			setShortUrl(
				`http://localhost:3000/api/short/${response.data.short_code}`,
			);
		} catch (error) {
			console.error('Error acortando URL:', error);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="url"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="Pega tu URL larga"
					required
				/>
				<button type="submit">Acortar</button>
			</form>
			{shortUrl && (
				<div>
					<p>
						URL corta: <a href={shortUrl}>{shortUrl}</a>
					</p>
				</div>
			)}
		</div>
	);
}
