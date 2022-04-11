import { ReactNode } from "react";

export default interface PProps {
	children: ReactNode;
	size: "sm" | "md" | "lg";
}
