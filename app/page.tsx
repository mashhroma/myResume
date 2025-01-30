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

export default function Home() {
	return (
		<div className="layout">
			<div className="container">
				<header className="header">
					<div className="myPhoto">
						<Image src="/me.jpg" alt="My photo" width={160} height={160} />
					</div>
					<div className="headingInfo">
						<h1 className="titleName">Савкина Мария</h1>
						<h2 className="titleJob">Frontend-разработчик</h2>
						<ul className="contacts">
							<li>
								<FaMapMarkerAlt />
								<span>г. Санкт-Петербург</span>
							</li>
							<li>
								<MdEmail />
								<a href="mailto:mashh@mail.ru" target="_blank">
									mashh@mail.ru
								</a>
							</li>
							<li>
								<BiSolidPhone />
								<FaWhatsapp />
								<a href="tel:+79055187737 ">+7 (905) 518-77-37</a>
							</li>
							<li>
								<FaTelegramPlane />
								<a href="https://t.me/mashhroma" target="_blank">
									t.me/mashhroma
								</a>
							</li>
							<li>
								<FaGithub />
								<a href="https://github.com/mashhroma" target="_blank">
									github.com/mashhroma
								</a>
							</li>
							<li>
								<SiHabr />
								<a href="https://career.habr.com/mashhroma" target="_blank">
									career.habr.com/mashhroma
								</a>
							</li>
							<li>
								<SlSocialVkontakte />
								<a href="https://vk.com/mashhroma" target="_blank">
									vk.com/mashhroma
								</a>
							</li>
							<li>
								<FaLinkedin />
								<a
									href="https://www.linkedin.com/in/maria-savkina-473135270/"
									target="_blank"
								>
									linkedin.com/in/maria-savkina
								</a>
							</li>
						</ul>
					</div>
				</header>
				<main className="content">
					<div className="left">
						<div className="languages">
							<h3 className="subtitle">Владение языками</h3>
							<ul>
								<li>
									Русский - <b>родной</b>
								</li>
								<li>
									Английский - <b>уровень B1</b>
								</li>
								<li>
									Испанский - <b>уровень A1</b>
								</li>
							</ul>
						</div>
						<div className="hardSkills">
							<h3 className="subtitle">Технические навыки</h3>
							<ul>
								<li>JavaScript</li>
								<li>TypeScript</li>
								<li>React</li>
								<li>Next JS</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>SASS</li>
								<li>Git</li>
								<li>Node.js</li>
								<li>REST</li>
								<li>Figma</li>
							</ul>
						</div>
						<div className="projects">
							<h3 className="subtitle">Мои проекты</h3>
							<ul>
								<li>
									<a
										href="https://github.com/mashhroma/fitSteps"
										target="_blank"
									>
										Онлайн-занятия фитнесом
									</a>
								</li>
								<li>
									<a
										href="https://github.com/mashhroma/exampleShop"
										target="_blank"
									>
										Проект интернет-магазина
									</a>
								</li>
								<li>
									<a
										href="https://github.com/mashhroma?tab=repositories"
										target="_blank"
									>
										Различные учебные проекты
									</a>
								</li>
							</ul>
						</div>
						<div className="softSkills">
							<h3 className="subtitle">Гибкие навыки</h3>
							<li>Умею слушать</li>
							<li>Хорошо работаю в команде</li>
							<li>Нацелена на результат</li>
							<li>Умею управлять эмоциями</li>
							<li>Занимаюсь своим развитием</li>
							<li>Имею логическое мышление</li>
							<li>Умею искать информацию</li>
							<li>Умею брать на себя ответственность</li>
						</div>
						<div className="otherInfo">
							<h3 className="subtitle">Прочая информация</h3>
							<li>Дата рождения: 11.05.1985 г.</li>
							<li>Семейное положение: замужем</li>
						</div>
					</div>
					<div className="right">
						<div className="aboutMe">
							<h3 className="subtitle">Обо мне</h3>
							<div>
								Привет! Я - начинающий frontend разработчик. Ранее я работала в
								сфере оптовых продаж, где с удовольствием общалась с
								покупателями и решала задачи бизнеса, связанные со сбытом. Еще в
								школе я очень любила делать сайты. Верстка долгое время
								оставалась моим хобби, но я в итоге поняла, что мне хочется
								развиваться в web-программировании, поэтому я приняла решение
								сменить сферу деятельности. Я начала учиться на факультете
								Разработчик в GeekBrains, где получила практический опыт не
								только по специальности React-программист, но также опыт работы
								с SQL, Java, Python, Git, Docker а также изучила теоретические
								основы ООП, алгоритмов, архитектуры ПО и баз данных. Сейчас
								участвую в стартапе по разработке навигационного приложения в
								качестве программиста на Next JS.
							</div>
						</div>

						<div className="myWay">
							<div className="experience">
								<h3 className="subtitle">Опыт работы</h3>
								<ul className="experienceItem">
									<li>
										<div className="timeline">
											Ноябрь 2023 — по настоящее время
										</div>
										<b>Web-программист</b>
										<div className="italic">Проектная деятельность</div>
										Должностные обязанности:
										<ul className="duties">
											<li>Разработала проект web-приложения на React.</li>
											<li>Решала прочие учебные задачи.</li>
										</ul>
									</li>
									<li>
										<div className="timeline">
											Октябрь 2022 — по настоящее время
										</div>
										<b>Специалист отдела качества поиска</b>
										<div className="italic">
											&#34;Яндекс Крауд&#34;, Москва, поисковая система
										</div>
										Должностные обязанности:
										<ul className="duties">
											<li>Выполняю задачи для повышения качества поиска.</li>
											<li>
												Выполняю задачи, связанные с разметкой поисковой выдачи.
											</li>
										</ul>
									</li>
									<li>
										<div className="timeline">Сентябрь 2019 — ноябрь 2022</div>
										<b>Руководитель направления оптовых продаж</b>
										<div className="italic">
											&#34;Итума&#34;, Москва, оптовая торговля текстильных
											изделий
										</div>
										Должностные обязанности:
										<ul className="duties">
											<li>Подключила компанию к системе учета Честный знак.</li>
											<li>Налаживала контакт с покупателями.</li>
											<li>Анализировала показатели продаж.</li>
											<li>
												Контролировала сроки и качество выполнения отгрузок и
												заказов.
											</li>
										</ul>
									</li>
								</ul>
							</div>
							<div className="education">
								<h3 className="subtitle">Образование</h3>
								<ul className="educationItem">
									<li>
										<div className="faculty">Frontend-программист (React)</div>
										<b>Профессиональная переподготовка </b>
										<div className="italic">GeekBrains</div>
										годы обучения: 2022-2024 г.
									</li>
									<li>
										<div className="faculty">Менеджмент организации</div>
										<b>Неоконченное высшее</b>
										<div className="italic">
											Московский государственный университет приборостроения и
											информатики
										</div>
										годы обучения: 2006-2009 г.
									</li>
									<li>
										<div className="faculty">
											Государственное и муниципальное управление
										</div>
										<b>Среднее специальное</b>
										<div className="italic">
											Московский государственный колледж информационных
											технологий
										</div>
										годы обучения: 2004-2006 г.
									</li>
								</ul>
							</div>
						</div>

						<div className="hobbies">
							<h3 className="subtitle">Увлечения</h3>
							<div className="hobbiesIcons">
								<svg
									height="50px"
									viewBox="2 17 45 14"
									xmlns="http://www.w3.org/2000/svg"
									fill="#fc7d96"
									stroke="#fc7d96"
									strokeWidth="0.3"
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
								</svg>

								<svg
									height="50px"
									viewBox="0 1 24 23"
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									fill="#fc7d96"
									stroke="#fc7d96"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<line
											className="cls-1"
											x1="14.39"
											y1="20.59"
											x2="7.7"
											y2="20.59"
										></line>
										<path
											className="cls-1"
											d="M3.89,20.59H1.5V13.91l.69-4.13a1.92,1.92,0,0,1,1.88-1.6H15.39A1.91,1.91,0,0,1,17.2,9.49l1.48,4.42,3.82,1.91v4.77H18.2"
										></path>
										<circle
											className="cls-1"
											cx="16.3"
											cy="20.59"
											r="1.91"
										></circle>
										<circle
											className="cls-1"
											cx="5.8"
											cy="20.59"
											r="1.91"
										></circle>
										<line
											className="cls-1"
											x1="18.68"
											y1="13.91"
											x2="4.36"
											y2="13.91"
										></line>
										<line
											className="cls-1"
											x1="12.95"
											y1="10.09"
											x2="12.95"
											y2="13.91"
										></line>
										<line
											className="cls-1"
											x1="7.23"
											y1="10.09"
											x2="7.23"
											y2="13.91"
										></line>
										<path
											className="cls-1"
											d="M5.32,1.5h8.59a2.86,2.86,0,0,1,2.86,2.86v1a0,0,0,0,1,0,0H2.45a0,0,0,0,1,0,0v-1A2.86,2.86,0,0,1,5.32,1.5Z"
										></path>
										<line
											className="cls-1"
											x1="5.32"
											y1="5.32"
											x2="5.32"
											y2="8.18"
										></line>
										<line
											className="cls-1"
											x1="13.91"
											y1="5.32"
											x2="13.91"
											y2="8.18"
										></line>
									</g>
								</svg>

								<svg
									height={50}
									viewBox="0 2 24 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke="#fc7d96"
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
								</svg>

								<svg
									height={50}
									viewBox="0 2 48 42"
									xmlns="http://www.w3.org/2000/svg"
									fill="#fc7d96"
									stroke="#fc7d96"
									strokeWidth="0.576"
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
										<path
											className="a"
											d="M25.23,40.44a19,19,0,0,1,2.25-.27"
										></path>
										<path
											className="a"
											d="M20,41.57a6.68,6.68,0,0,1-2.82.43c-1.07,0-3.5-1.77-.15-3.91"
										></path>
										<circle
											className="a"
											cx="22.93"
											cy="27.96"
											r="2.51"
										></circle>
										<path
											className="a"
											d="M23.89,25.62a37.14,37.14,0,0,0,5.88-.71"
										></path>
										<path
											className="a"
											d="M16.39,24.91a29.71,29.71,0,0,0,5.61.72"
										></path>
										<path
											className="a"
											d="M24.76,12.63a2.91,2.91,0,0,1,3.76-.72"
										></path>
										<path
											className="a"
											d="M15.37,14.36a2.91,2.91,0,0,1,3.76-.71"
										></path>
										<path
											className="a"
											d="M25.92,16.07C24.47,18.32,23,17,22.42,16c-.09,1.34-.94,3.11-2.91,1.34"
										></path>
										<path
											className="a"
											d="M28.77,14a3.79,3.79,0,0,0,2.31-.57"
										></path>
										<path
											className="a"
											d="M29,15.27A4.66,4.66,0,0,0,31.51,15"
										></path>
										<path
											className="a"
											d="M28.77,16.44a2.86,2.86,0,0,0,2.45,0"
										></path>
										<path
											className="a"
											d="M16.17,16.74a3.82,3.82,0,0,1-2.37.17"
										></path>
										<path
											className="a"
											d="M16.33,18.06a4.6,4.6,0,0,1-2.46.47"
										></path>
										<path
											className="a"
											d="M16.93,19.1a2.87,2.87,0,0,1-2.33.76"
										></path>
										<circle
											className="b"
											cx="22.21"
											cy="15.16"
											r="0.75"
										></circle>
										<path
											className="a"
											d="M12.93,11.91C13.8,10.5,15,9.39,17.67,8.06"
										></path>
										<path
											className="a"
											d="M24.6,6.57A8.35,8.35,0,0,1,30,8.24"
										></path>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</main>
			</div>

			<div>
				<Image
					src={
						"https://images.unsplash.com/photo-1737885763392-0141b416ec1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					alt="Test"
					width={600}
					height={600}
				/>

				<Image
					src={
						"https://avatars.mds.yandex.net/i?id=d0e802271d0b09ddf8502fe5ba1cc956_l-4756639-images-thumbs&n=13"
					}
					alt="Test"
					width={600}
					height={600}
				/>
			</div>
		</div>
	);
}
