import React, { FC } from "react";
import ButtonProps from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";
const Button: FC<ButtonProps> = ({
	children,
	arrow = "none",
	appearance,
	...props
}) => {
	return (
		<button
			className={cn(styles.btn, {
				[styles.primary]: appearance === "primary",
				[styles.ghost]: appearance === "ghost",
			})}
			{...props}
		>
			{children}
			{arrow !== "none" ? (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === "down",
					})}
				>
					<img src="arrow.svg" alt="arrow" />
				</span>
			) : null}
		</button>
	);
};

export default Button;
