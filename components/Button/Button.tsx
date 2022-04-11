import React, { FC } from "react";
import ButtonProps from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
const Button: FC<ButtonProps> = ({ children, appearance }) => {
	return (
		<button
			className={cn(styles.btn, {
				[styles.primary]: appearance === "primary",
				[styles.ghost]: appearance === "ghost",
			})}
		>
			{children}
		</button>
	);
};

export default Button;
