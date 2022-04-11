import React, { FC } from "react";
import PTagprops from "./PTag.props";
import styles from "./PTag.module.css";
import cn from "classnames";
const PTag: FC<PTagprops> = ({ children, size }) => {
	return (
		<p
			className={cn(styles.p, {
				[styles.sm]: size === "sm",
				[styles.md]: size === "md",
				[styles.lg]: size === "lg",
			})}
		>
			{children}
		</p>
	);
};

export default PTag;
