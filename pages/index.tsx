import { useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import PTag from "../components/PTag/PTag";
import Rating from "../components/Rating/Rating";

export default function Home() {
	const [rating, setRating] = useState(4);
	return (
		<div>
			<Htag tag="h1">Text</Htag>
			<Button appearance="primary"> Узнать подробности</Button>
			<Button arrow="right" appearance="ghost">
				Читать отзывы
			</Button>
			<PTag size="sm">lorem ipsum</PTag>
			<PTag size="md">lorem ipsum</PTag>
			<PTag size="lg">lorem ipsum</PTag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Rating rating={3} isEditable={false} />
		</div>
	);
}
