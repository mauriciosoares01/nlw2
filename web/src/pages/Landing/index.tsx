import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import api from "../../services/spi";

const logoImg = require("../../assets/images/logo.svg");
const landingImg = require("../../assets/images/landing.svg");
const studyIcon = require("../../assets/images/icons/study.svg");
const giveClassesIcon = require("../../assets/images/icons/give-classes.svg");
const purpleHeartIcon = require("../../assets/images/icons/purple-heart.svg");

function Landing() {
	const [totalConnections, setTotalConnetions] = useState(0);

	useEffect(() => {
		api.get("connections").then((response) => {
			const { total } = response.data;
			setTotalConnetions(total);
		});
	}, []);

	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoImg} alt="Proffy" />
					<h2>Sua plataforma de estudos online</h2>
				</div>

				<img
					src={landingImg}
					alt="Plataforma de estudos"
					className="hero-image"
				/>

				<div className="buttons-container">
					<Link to="/study" className="study">
						<img src={studyIcon} alt="Estudar" />
						Estudar
					</Link>
					<Link to="/give-classes" className="give-classes">
						<img src={giveClassesIcon} alt="Dar aulas" />
						Dar aulas
					</Link>
				</div>
				<span className="total-connections">
					Total de {totalConnections} conexões realizadas
					<img src={purpleHeartIcon} alt="Coração roxo" />
				</span>
			</div>
		</div>
	);
}

export default Landing;
