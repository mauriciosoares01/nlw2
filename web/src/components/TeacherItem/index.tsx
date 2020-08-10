import React from "react";

import "./styles.css";
import api from "../../services/spi";

const whatsappIcon = require("../../assets/images/icons/whatsapp.svg");

export interface Teacher {
	avatar: string;
	bio: string;
	cost: number;
	id: number;
	name: string;
	subject: string;
	user_id: number;
	whatsapp: number;
}

interface TeacherItemProps {
	teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
	function createNewConnection() {
		api.post("connections", {
			user_id: teacher.id,
		});
	}
	return (
		<article className="teacher-item">
			<header>
				<img src={teacher.avatar} alt={teacher.name} />
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>
			<p>{teacher.bio}</p>

			<footer>
				<p>
					Preço/hora
					<strong>{teacher.cost}</strong>
				</p>
				<a
					target="_blank"
					onClick={createNewConnection}
					href={`https://wa.me/${teacher.whatsapp}`}
				>
					<img src={whatsappIcon} alt="whatsapp" />
					Entrar em contato
				</a>
			</footer>
		</article>
	);
};

export default TeacherItem;
