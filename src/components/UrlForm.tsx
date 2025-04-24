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
		<div className="url-form-container">
			<form onSubmit={handleSubmit} className="url-form">
				<input
					type="url"
					id="originalUrl"
					name="originalUrl"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="Pega tu URL larga"
					required
					title="Introduce una URL válida"
				/>
				<button type="submit">Acortar</button>
			</form>
			{shortUrl && (
				<div className="result-container">
					<p className="result-title">URL corta</p>
					<p className="result-url">
						<a href={shortUrl} target="_blank" rel="noreferrer">
							{shortUrl}
						</a>
					</p>
				</div>
			)}
		</div>
	);
}
