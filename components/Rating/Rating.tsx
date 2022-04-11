import React, { FC, useEffect, useState } from "react";
import styles from "./Rating.module.css";
import cn from "classnames";
import RatingProps from "./Rating.props";
import Star from "./star.svg";
const Rating: FC<RatingProps> = ({
	isEditable = "false",
	rating,
	setRating,
	...props
}) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	//construct rating by navigation through our array of stars, and return filled stars if
	//passed rating in arguments is higher then current index in map
	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable,
					})}
					key={i}
					//show stars on hover with new amount
					onMouseEnter={() => changeDisplay(i + 1)}
					//on mouse leave return passed rating amount
					onMouseLeave={() => changeDisplay(rating)}
					//on click change filled stars based on clicked elem index
					onClick={() => handleClick(i + 1)}
				>
					<Star
						tabindex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent) =>
							isEditable && handleSpace(i + 1, e)
						}
					></Star>
				</span>
			);
		});

		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent) => {
		//if we dont pressed space on keyboard or we dont have setRating abort func
		if (e.code != "Space" || !setRating) {
			return;
		}
		//else setRating to clicked Star number
		setRating(i);
	};

	const handleClick = (i: number) => {
		//if we component is not editable or we dont have setRating abort func
		if (!isEditable || !setRating) {
			return;
		}
		//else setRating to clicked Star number
		setRating(i);
	};

	useEffect(() => {
		constructRating(rating);
	}, [rating]);
	return (
		<div {...props}>
			{ratingArray.map((item, i) => {
				return <span key={i}>{item}</span>;
			})}
		</div>
	);
};

export default Rating;
