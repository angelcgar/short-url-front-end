import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BACKEND_URL } from '../const';

export default function Redirect() {
	const { shortCode } = useParams();
	const navigate = useNavigate();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const fetchOriginalUrl = async () => {
			try {
				const response = await axios.get(`${BACKEND_URL}/api/${shortCode}`);
				window.location.href = response.data.originalUrl;
			} catch {
				navigate('/'); // Redirige a Home si no existe
			}
		};
		fetchOriginalUrl();
	}, [shortCode]);

	return <p>Redirigiendo...</p>;
}
