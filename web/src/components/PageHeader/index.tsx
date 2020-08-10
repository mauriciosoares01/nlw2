import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const logoImg = require("../../assets/images/logo.svg");
const backIcon = require("../../assets/images/icons/back.svg");

interface PageheaderProps {
	title: string;
	description?: string;
}

const PageHeader: React.FC<PageheaderProps> = (props) => {
	return (
		<header className="page-header">
			<div className="top-bar-container">
				<Link to="./">
					<img src={backIcon} alt="Voltar" />
				</Link>
				<img src={logoImg} alt="Proffy" />
			</div>
			<div className="header-content">
				<strong>{props.title}</strong>
				{props.description && <p>{props.description}</p>}
				{props.children}
			</div>
		</header>
	);
};

export default PageHeader;
