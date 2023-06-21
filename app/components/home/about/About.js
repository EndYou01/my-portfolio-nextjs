import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
// import { FillContext } from '../../../context/FillContext';
import { useTranslations } from "next-intl";

export const About = () => {
	const t = useTranslations("translation");

	// const { fillVariable } = useContext(FillContext)

	return (
		<div id="about" className='about_container'>
			<Fade>
				<h1 className='center'>{t("about.a&e")}</h1>
				<br></br>
				<p className='about_container_text'>
					{t("about.a&et")}
				</p>

				<br></br>
				<h2 className='center'>{t("about.profExp")}</h2>

				<div className={"infoContain"
					// (fillVariable)
					// 	? 	'infoContain'
					// 	:	'infoContain project_info_container_dark'
				}>
					<div className='infoRow'>
						<h4>{t("about.fronh4")}</h4>
						<p>{t("about.2020")}</p>
					</div>
					<br />
					<div className='info'>
						<p>{t("about.fronp1")}</p>
					</div>
				</div>

				<br></br>

				<h2 className='center'>{t("about.education")}</h2>

				<div className={"infoContain"
					// (fillVariable)
					// 	? 	'infoContain'
					// 	:	'infoContain project_info_container_dark'
				}>
					<div className='infoRow'>
						<h4>{t("about.h4")}</h4>
						<p>{t("about.2020")}</p>
					</div>

					<br />
					<div className='info'>
						<p>{t("about.uci")}</p>
						<br />
						<p>
							<strong>{t("about.graduation1")}</strong> {t("about.graduation2")}
						</p>
						<p>
							<strong>{t("about.average")}</strong> 4.5
						</p>
					</div>
				</div>
			</Fade>
		</div>


	)
}
