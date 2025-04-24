import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";

export default function Home() {
	return (
		<div>
			<h1>Acortador de URLs</h1>
			<UrlForm />
			<UrlList />
		</div>
	);
}
