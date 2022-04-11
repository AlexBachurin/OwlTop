import React, { FC } from "react";
import Htag_props from "./Htag_props";
import styles from "./Htag.module.css";
const Htag: FC<Htag_props> = ({ tag, children }): JSX.Element => {
	switch (tag) {
		case "h1":
			return <h1 className={styles.h1}>{children}</h1>;
		case "h2":
			return <h2 className={styles.h2}>{children}</h2>;
		case "h3":
			return <h3 className={styles.h3}>{children}</h3>;
		default:
			return <></>;
	}
};

export default Htag;
