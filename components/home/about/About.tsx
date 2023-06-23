import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
// import { FillContext } from '../../../context/FillContext';
// import { useTranslations } from "next-intl";

import { TranslationText } from "../../TranslationText";

export const About = () => {
	// const t = useTranslations("translation");

	// const { fillVariable } = useContext(FillContext)

	return (
		<div id="about" className='about_container'>
			<Fade>
				<h1 className='center'>
					{/* {t("about.a&e")} */}
					<TranslationText message="about.a&e" />
				</h1>
				<br></br>
				<p className='about_container_text'>
					{/* {t("about.a&et")} */}
					<TranslationText message="about.a&et" />
				</p>

				<br></br>
				<h2 className='center'>
					{/* {t("about.profExp")} */}
					<TranslationText message="about.profExp" />

				</h2>

				<div className={"infoContain"
					// (fillVariable)
					// 	? 	'infoContain'
					// 	:	'infoContain project_info_container_dark'
				}>
					<div className='infoRow'>
						<h4>
							{/* {t("about.fronh4")} */}
							<TranslationText message="about.fronh4" />

						</h4>
						<p>
							{/* {t("about.2020")} */}
							<TranslationText message="about.2020" />

						</p>
					</div>
					<br />
					<div className='info'>
						<p>
							{/* {t("about.fronp1")} */}
							<TranslationText message="about.fronp1" />
						</p>
					</div>
				</div>

				<br></br>

				<h2 className='center'>
					{/* {t("about.education")} */}
					<TranslationText message="about.education" />

				</h2>

				<div className={"infoContain"
					// (fillVariable)
					// 	? 	'infoContain'
					// 	:	'infoContain project_info_container_dark'
				}>
					<div className='infoRow'>
						<h4>
							{/* {t("about.h4")} */}
							<TranslationText message="about.h4" />
						</h4>
						<p>
							{/* {t("about.2020")} */}
							<TranslationText message="about.2020" />
						</p>
					</div>

					<br />
					<div className='info'>
						<p>
							{/* {t("about.uci")} */}
							<TranslationText message="about.uci" />
						</p>
						<br />
						<p>
							<strong>
								{/* {t("about.graduation1")} */}
								<TranslationText message="about.graduation1" />
							</strong> 
							{/* {t("about.graduation2")} */}
							<TranslationText message="about.graduation2" />

						</p>
						<p>
							<strong>
								{/* {t("about.average")} */}
								<TranslationText message="about.average" />
							</strong> 4.5
						</p>
					</div>
				</div>
			</Fade>
		</div>


	)
}
