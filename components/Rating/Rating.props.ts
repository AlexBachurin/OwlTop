import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	ReactNode,
	SetStateAction,
} from "react";

export default interface RatingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable: boolean;
	rating: number;
	setRating?: Dispatch<SetStateAction<number>>;
}
