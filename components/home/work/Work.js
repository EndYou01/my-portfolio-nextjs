import React from 'react'
// import { useTranslation } from 'react-i18next'
import { Fade } from "react-awesome-reveal";
import { LearnMoreButton } from '@/components/learnMoreButton/LearnMoreButton.js';
// import { useContext } from 'react';
// import { FillContext } from '../../../context/FillContext';
import { ImageLoaded } from '../../imageLoaded/ImageLoaded.js';
import { useTranslations } from "next-intl";

export const Work = () => {
	const t = useTranslations("translation");

	// const { fillVariable } = useContext(FillContext)

	return (
		<div id="work" className='work_container'>

			<Fade>
				<h1 className='header'>{t("work.h1")}</h1>
			</Fade>

			<div>
				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>

							<ImageLoaded effect={""} classname={"bg_image"} alt={"TMF Image"} src={"tmf/tmf1.png"} />

							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"TMF Logo"} src={"logos/tmf_logo.png"} />

							</div>

							<div className='project_info_container'>
								<h2>{t("tmf.h2")}</h2>
								<p>
									{t("tmf.p1")}
								</p>
								<LearnMoreButton pathname='/mandalorian' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>

							<ImageLoaded effect={""} classname={"bg_image"} alt={"SNB 2022 Image"} src={"snb2022/snb_1.jpg"} />


							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"Basketball Center Logo"} src={"logos/snb_logo1x5.png"} />

							</div>

							<div className='project_info_container'>
								<h2>SNB 2022</h2>
								<p>{t("snb.p1")}
								</p>
								<LearnMoreButton pathname='/snb' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<Fade>
					<h1 className='header'>{t("work.freelance")}</h1>
				</Fade>

				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>

							<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"CitasApp Image"} src={"freelance/citasApp/citas1.png"} />

							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"CitasApp Logo"} src={"logos/citas_logo.png"} />

							</div>
							<div className='project_info_container'>
								<h2>CitasApp</h2>
								<p>{t("citas.p1")}
								</p>
								<LearnMoreButton pathname='/citasApp' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>
							<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"Confort Image"} src={"freelance/confort/Pantalla_Principal.jpg"} />



							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"Confort Logo"} src={"logos/confort_logo.png"} />

							</div>
							<div className='project_info_container'>
								<h2>Confort</h2>
								<p>{t("confort.p")}
								</p>
								<LearnMoreButton pathname='/confort' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>
							<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"Coremant Image"} src={"freelance/coremant/coremant.png"} />


							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"Coremant Logo"} src={"logos/coremant_logo.png"} />

							</div>
							<div className='project_info_container'>
								<h2>Coremant</h2>
								<p>{t("coremant.p")}
								</p>
								<LearnMoreButton pathname='/coremant' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>
							<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"CrossBorderTrade Image"} src={"freelance/crossBorderTrade/crossBorder.jpg"} />

							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"CrossBorderTrade Logo"} src={"logos/crossBorder_logo.png"} />

							</div>
							<div className='project_info_container'>
								<h2>Cross Border Trade</h2>
								<p>{t("crossBorder.p1")}
								</p>
								<LearnMoreButton pathname='/crossBorder' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>
							<ImageLoaded effect={"blur"} classname={"bg_image"} alt={"CrossBorderTrade Image"} src={"freelance/kidsrUs/KidsrUs_image.png"} />

							<div className='project_image_container'>

								<ImageLoaded effect={"blur"} classname={"project_image"} alt={"KidsrUs Logo"} src={"logos/kidsrUs_logo.png"} />

							</div>
							<div className='project_info_container'>
								<h2>Kids`R`Us</h2>
								<p>{t("kidsrUs.p1")}
								</p>
								<LearnMoreButton pathname='/kidsrUs' />
							</div>
						</div>
					</Fade>
				</section>
			</div>

		</div>
	)
}
