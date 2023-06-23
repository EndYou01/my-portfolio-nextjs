// import React, { useContext } from 'react'

// import { Fade } from "react-awesome-reveal";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
// import { useTranslation } from 'react-i18next'
// import { FillContext } from '../../context/FillContext';
// import { useTranslations } from "next-intl";

import { TranslationText } from "../../components/TranslationText";


export const Footer = () => {
	// const [text] = useTranslation("global")

	// const { fillVariable } = useContext(FillContext)
	// const t = useTranslations("translation");
	return (
		<footer id="contact" className={"footer_section"
			// (fillVariable)
			// 	? 'footer_section'
			// 	: 'footer_section footerDark'
		}>
			{/* <Fade> */}
			<div className='contact_content'>
				{/* <h2>{t("footer.contactMe")}</h2> */}
				<h2><TranslationText message="footer.contactMe" /></h2>

				<br />

				<div className='footer_flex'>
					<ul className='contact_information_list'>
						<li>
							<HiOutlineMail className='icon' />
							<a
								href="mailto:jorgesenjudo@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								jorgesenjudo@gmail.com
							</a>
						</li>

						<li>
							<FaGithub className='icon' />
							<a
								href="https://github.com/EndYou01"
								target="_blank"
								rel="noreferrer"
							>
								EndYou01
							</a>
						</li>

						<li>
							<AiFillLinkedin className='icon' />
							<a
								href="https://www.linkedin.com/in/jorge-senjudo-25122525b/"
								target="_blank"
								rel="noreferrer"
							>
								{/* {t("footer.linkedin")} */}
								<TranslationText message="footer.linkedin" />
							</a>
						</li>
					</ul>

					<ul className='contact_information_list'>
						<li>
							<AiOutlineWhatsApp className='icon' />
							<a
								href="https://api.whatsapp.com/send?phone=55384022&text=Escriba, si tiene alguna duda, pregunta o está interesado en mi CV"
								target="_blank"
								rel="noreferrer"
							>
								+53 55384022
							</a>
						</li>
						<li>
							<BsTelegram className='icon' />
							<a
								href="https://t.me/EndYou2701"
								target="_blank"
								rel="noreferrer"
							>
								t.me/EndYou2701
							</a>
						</li>
						<li>
							<AiOutlineInstagram className='icon' />
							<a
								href="https://www.instagram.com/senjudo_01/"
								target="_blank"
								rel="noreferrer"
							>
								senjudo_01
							</a>
						</li>
					</ul>


				</div>



				<br></br>
				<div className='this_page_source_container' >
					<BsCodeSlash className='icon' />
					<a
						target="_blank"
						href="https://github.com/EndYou01/my-portfolio"
						rel="noreferrer"
					>
						{/* {t("footer.source")} */}
						<TranslationText message="footer.source" />

					</a>

				</div>
				<p className='version'>
					{/* {t("version")} */}
					<TranslationText message="version" />
				</p>
			</div>
			{/* </Fade> */}
		</footer>
	)
}
