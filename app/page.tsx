import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHabr } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
	education,
	experience,
	hardSkills,
	languages,
	me,
	projects,
	softSkills,
} from "@/const/rusInformation";
import React from "react";
import { formatNumber } from "@/utils/formatNumber";

const social = [
	{ name: "telegram", url: "t.me/mashhroma", icon: <FaTelegramPlane /> },
	{ name: "github", url: "github.com/mashhroma", icon: <FaGithub /> },
	{ name: "habr", url: "career.habr.com/mashhroma", icon: <SiHabr /> },
	{ name: "vk", url: "vk.com/mashhroma", icon: <SlSocialVkontakte /> },
	{
		name: "linkedin",
		url: "www.linkedin.com/in/maria-savkina-473135270/",
		icon: <FaLinkedin />,
	},
];

const hobbies = [
	<svg
		height="50px"
		viewBox="2 17 45 14"
		xmlns="http://www.w3.org/2000/svg"
		fill="#fc7d96"
		stroke="#fc7d96"
		strokeWidth="0.3"
		key="0"
	>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke="#CCCCCC"
			strokeWidth="0.192"
		></g>
		<g id="SVGRepo_iconCarrier">
			<polygon
				className="a"
				points="44.5 18.306 38.578 18.306 27.189 29.694 33.111 29.694 44.5 18.306"
			></polygon>
			<path
				className="a"
				d="M38.5778,18.3056H17.7884a7,7,0,0,0-4.95,2.05L3.5,29.6944H9.4222L15.99,23.127a3.5,3.5,0,0,1,2.4749-1.0251H34.7815"
			></path>
			<path
				className="a"
				d="M9.4222,29.6944h5.9222l3.357-3.3569a1.5,1.5,0,0,1,1.0607-.4394H30.9852"
			></path>
		</g>
	</svg>,
	<svg
		height="50px"
		viewBox="0 1 24 23"
		id="Layer_1"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		fill="#fc7d96"
		stroke="#fc7d96"
		key="1"
	>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			<line className="cls-1" x1="14.39" y1="20.59" x2="7.7" y2="20.59"></line>
			<path
				className="cls-1"
				d="M3.89,20.59H1.5V13.91l.69-4.13a1.92,1.92,0,0,1,1.88-1.6H15.39A1.91,1.91,0,0,1,17.2,9.49l1.48,4.42,3.82,1.91v4.77H18.2"
			></path>
			<circle className="cls-1" cx="16.3" cy="20.59" r="1.91"></circle>
			<circle className="cls-1" cx="5.8" cy="20.59" r="1.91"></circle>
			<line className="cls-1" x1="18.68" y1="13.91" x2="4.36" y2="13.91"></line>
			<line
				className="cls-1"
				x1="12.95"
				y1="10.09"
				x2="12.95"
				y2="13.91"
			></line>
			<line className="cls-1" x1="7.23" y1="10.09" x2="7.23" y2="13.91"></line>
			<path
				className="cls-1"
				d="M5.32,1.5h8.59a2.86,2.86,0,0,1,2.86,2.86v1a0,0,0,0,1,0,0H2.45a0,0,0,0,1,0,0v-1A2.86,2.86,0,0,1,5.32,1.5Z"
			></path>
			<line className="cls-1" x1="5.32" y1="5.32" x2="5.32" y2="8.18"></line>
			<line className="cls-1" x1="13.91" y1="5.32" x2="13.91" y2="8.18"></line>
		</g>
	</svg>,
	<svg
		height={50}
		viewBox="0 2 24 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="#fc7d96"
		key="2"
	>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path
				d="M7 21L17 21"
				stroke="#fc7d96"
				strokeWidth="0.384"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>{" "}
			<path
				d="M13.5 7L13.5 11M13.5 13L13.5 11M13.5 11L14.8706 9.43363M17 7L14.8706 9.43363M14.8706 9.43363L17 13"
				stroke="#fc7d96"
				strokeWidth="0.384"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>{" "}
			<path
				d="M9.5 7L6.5 11.5L10 11.5L10 13"
				stroke="#fc7d96"
				strokeWidth="0.384"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>{" "}
			<path
				d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z"
				stroke="#fc7d96"
				strokeWidth="0.384"
			></path>{" "}
		</g>
	</svg>,
	<svg
		height={50}
		viewBox="0 2 48 42"
		xmlns="http://www.w3.org/2000/svg"
		fill="#fc7d96"
		stroke="#fc7d96"
		strokeWidth="0.576"
		key="3"
	>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			<path
				className="a"
				d="M30.37,23.32a13.6,13.6,0,0,0,3-8.37A9.16,9.16,0,0,0,30,8.24S29.73,5,28.7,4.56s-4.1,2-4.1,2-5,.21-6.93,1.49c0,0-4.44-1.06-5-.29s.26,4.14.26,4.14a9.1,9.1,0,0,0-1.45,5.17c0,3.25,4.91,7.83,4.91,7.83a21.21,21.21,0,0,0-3.12,10.43c0,4.27,2.08,5.3,2.08,5.3"
			></path>
			<path
				className="a"
				d="M17.25,29.61,20.15,41s-1.24,2.52,2.57,2.52,3-3.16,1.92-3.59l-1.88-7.22"
			></path>
			<path
				className="a"
				d="M29.13,38.07c-2,.81-2.74,3.93.81,3.93s4.92-4,4.92-6.75a29.07,29.07,0,0,0-1.24-6.75,4.25,4.25,0,0,0,1.24-1.84c.17-.9,1.11-10,1.19-10.39a4.27,4.27,0,0,0,.47-1.49,2.65,2.65,0,0,0-3.49-2"
			></path>
			<path className="a" d="M25.23,40.44a19,19,0,0,1,2.25-.27"></path>
			<path
				className="a"
				d="M20,41.57a6.68,6.68,0,0,1-2.82.43c-1.07,0-3.5-1.77-.15-3.91"
			></path>
			<circle className="a" cx="22.93" cy="27.96" r="2.51"></circle>
			<path className="a" d="M23.89,25.62a37.14,37.14,0,0,0,5.88-.71"></path>
			<path className="a" d="M16.39,24.91a29.71,29.71,0,0,0,5.61.72"></path>
			<path className="a" d="M24.76,12.63a2.91,2.91,0,0,1,3.76-.72"></path>
			<path className="a" d="M15.37,14.36a2.91,2.91,0,0,1,3.76-.71"></path>
			<path
				className="a"
				d="M25.92,16.07C24.47,18.32,23,17,22.42,16c-.09,1.34-.94,3.11-2.91,1.34"
			></path>
			<path className="a" d="M28.77,14a3.79,3.79,0,0,0,2.31-.57"></path>
			<path className="a" d="M29,15.27A4.66,4.66,0,0,0,31.51,15"></path>
			<path className="a" d="M28.77,16.44a2.86,2.86,0,0,0,2.45,0"></path>
			<path className="a" d="M16.17,16.74a3.82,3.82,0,0,1-2.37.17"></path>
			<path className="a" d="M16.33,18.06a4.6,4.6,0,0,1-2.46.47"></path>
			<path className="a" d="M16.93,19.1a2.87,2.87,0,0,1-2.33.76"></path>
			<circle className="b" cx="22.21" cy="15.16" r="0.75"></circle>
			<path className="a" d="M12.93,11.91C13.8,10.5,15,9.39,17.67,8.06"></path>
			<path className="a" d="M24.6,6.57A8.35,8.35,0,0,1,30,8.24"></path>
		</g>
	</svg>,
];

export default function Home() {
	return (
		<div className="layout">
			<div className="container">
				<header className="header">
					<div className="myPhoto">
						<Image src="/me.jpg" alt="My photo" width={160} height={160} />
					</div>
					<div className="headingInfo">
						<h1 className="titleName">{me.name}</h1>
						<h2 className="titleJob">{me.profession}</h2>
						<ul className="contacts">
							<li>
								<FaMapMarkerAlt />
								<span>{me.city}</span>
							</li>
							<li>
								<MdEmail />
								<a href={`mailto:${me.email}`} target="_blank">
									{me.email}
								</a>
							</li>
							<li>
								<BiSolidPhone />
								<FaWhatsapp />
								<a href={`tel:${me.number}`}>{formatNumber(me.number)}</a>
							</li>
							{social.map((contact) => (
								<li key={contact.name}>
									{contact.icon}
									<a href={`https://${contact.url}`} target="_blank">
										{contact.url}
									</a>
								</li>
							))}
						</ul>
					</div>
				</header>
				<main className="content">
					<div className="left">
						<div className="languages">
							<h3 className="subtitle">Владение языками</h3>
							<ul>
								{languages.map((language) => (
									<li key={language.name}>
										{language.name} - <b>{language.level}</b>
									</li>
								))}
							</ul>
						</div>
						<div className="hardSkills">
							<h3 className="subtitle">Технические навыки</h3>
							<ul>
								{hardSkills.map((skill, i) => (
									<li key={i}>{skill}</li>
								))}
							</ul>
						</div>
						<div className="projects">
							<h3 className="subtitle">Мои проекты</h3>
							<ul>
								{projects.map((project) => (
									<li key={project.name}>
										<a href={project.url} target="_blank">
											{project.name}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="softSkills">
							<h3 className="subtitle">Гибкие навыки</h3>
							{softSkills.map((skill, i) => (
								<li key={i}>{skill}</li>
							))}
						</div>
						<div className="otherInfo">
							<h3 className="subtitle">Прочая информация</h3>
							<li>Дата рождения: {me.birthday} г.</li>
							<li>Семейное положение: {me.maritalStatus}</li>
						</div>
					</div>
					<div className="right">
						<div className="aboutMe">
							<h3 className="subtitle">Обо мне</h3>
							<div>{me.about}</div>
						</div>

						<div className="myWay">
							<div className="experience">
								<h3 className="subtitle">Опыт работы</h3>
								<ul className="experienceItem">
									{experience.map((place) => (
										<li key={place.company}>
											<div className="timeline">{place.timeline}</div>
											<b>{place.position}</b>
											<div className="italic">{place.company}</div>
											Должностные обязанности:
											<ul className="duties">
												{place.duties.map((duty, i) => (
													<li key={place.company + i}>{duty}</li>
												))}
											</ul>
										</li>
									))}
								</ul>
							</div>
							<div className="education">
								<h3 className="subtitle">Образование</h3>
								<ul className="educationItem">
									{education.map((institution) => (
										<li key={institution.faculty}>
											<div className="faculty">{institution.faculty}</div>
											<b>{institution.type}</b>
											<div className="italic">{institution.place}</div>
											годы обучения: {institution.years} г.
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="hobbies">
							<h3 className="subtitle">Увлечения</h3>
							<div className="hobbiesIcons">
								{hobbies.map((hobby, i) => (
									<React.Fragment key={i}>{hobby}</React.Fragment>
								))}
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
