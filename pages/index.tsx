import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";

export default function Home() {
	return (
		<div>
			<Htag tag="h1">Text</Htag>
			<Button appearance="primary"> Узнать подробности</Button>
			<Button appearance="ghost">Читать отзывы</Button>
		</div>
	);
}
