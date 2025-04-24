import UrlForm from '../components/UrlForm';
import UrlList from '../components/UrlList';

export default function Home() {
	return (
		<div className="container">
			<h1 className="url-form-title">Acortador de URLs</h1>
			<UrlForm />
			<UrlList />
		</div>
	);
}
