// import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
// import { useTranslation } from 'react-i18next'
// import { FillContext } from '../../../context/FillContext';
import { ShowTechIcons } from '../../showTechIcons/ShowTechIcons';
import { TranslationText } from "../../TranslationText";
// import { useTranslations } from "next-intl";

export const Skills = () => {
	// const [t] = useTranslation("global")
	// const { fillVariable } = useContext(FillContext)
	// const t = useTranslations("translation");


	return (
		<div className='content'>
			<Fade>
				{/* Soft Skills */}
				<h1 className='skills_h1'>
					{/* {t("skills.soft-skills")} */}
					<TranslationText message="skills.soft-skills" />
					</h1>
				<div className={"columns"
					// (!fillVariable)
					// 	? 'columns liDark'
					// 	: 'columns'
				}>
					<ul>
						<li>
							<span>
								<TranslationText message="skills.EB2" />
								{/* {t("skills.EB2")} */}
							</span>
						</li>
						<li>
							<span>
								<TranslationText message="skills.TE" />
								{/* {t("skills.TE")} */}
							</span>
						</li>
						<li>
							<span>
								<TranslationText message="skills.Friendly" />
								{/* {t("skills.Friendly")} */}
							</span>
						</li>
						<li>
							<span>
								<TranslationText message="skills.FL" />
								{/* {t("skills.FL")} */}
							</span>
						</li>
						<li>
							<span>
								<TranslationText message="skills.PA" />
								{/* {t("skills.PA")} */}
							</span>
						</li>
						<li>
							<span>
								<TranslationText message="skills.CO" />
								{/* {t("skills.CO")} */}
							</span>
						</li>
					</ul>
				</div>


				{/* Support Technologies */}
				<h1 className='skills_h1'>
					{/* {t("skills.support-technologies")} */}
					<TranslationText message="skills.support-technologies" />
				</h1>
				<br />
				<div className={"columns"
					// (!fillVariable)
					// 	? 'columns liDark'
					// 	: 'columns'
				}>
					<ShowTechIcons
						technologies={["git", "github", "vite", "Axios", "bootstrap", "React Bootstrap", "antdesign", "postman", "swr", "SASS", "Redux", "Redux ToolKit"]}
						position='center'
					/>
				</div>


				{/* Hard Technologies */}
				<h1 className='skills_h1'>
					{/* {t("skills.hard-technologies")} */}
					<TranslationText message="skills.hard-technologies" />
				</h1>
				<br />
				<div className={"columns"
					// (!fillVariable)
					// 	? 'columns liDark'
					// 	: 'columns'
				}>
					{/* Hard Skills */}
					<ul>
						<ShowTechIcons
							technologies={["HTML", "CSS", "React", "TypeScript", "javascript", "REST API", "Next.js"]}
							position='center'
						/>
					</ul>
				</div>
			</Fade>
		</div>
	)
}
