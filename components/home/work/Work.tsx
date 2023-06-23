// import { useTranslation } from 'react-i18next'
import { Fade } from "react-awesome-reveal";
import { LearnMoreButton } from '../../learnMoreButton/LearnMoreButton';
// import { useContext } from 'react';
// import { FillContext } from '../../../context/FillContext';
import { ImageLoaded } from '../../imageLoaded/ImageLoaded';
import { TranslationText } from "../../TranslationText";
// import { useTranslations } from "next-intl";

//Images
// import tmfImage from '@/public/projects_assets/tmf/tmf1.png'
// import Image from 'next/image.js';

export const Work = () => {
	// const t = useTranslations("translation");

	// const { fillVariable } = useContext(FillContext)

	return (
		<div id="work" className='work_container'>

			<Fade>
				<h1 className='header'>
					{/* {t("work.h1")} */}
					<TranslationText message="work.h1" />
				</h1>
			</Fade>

			<div>
				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>

							<ImageLoaded classname={"bg_image"} alt={"TMF Image"} src={'/projects_assets/tmf/tmf1.png'} width={500} height={500} />

							{/* <Image
								// classname={"bg_image"}
								alt={"TMF Image"}
								src={'/projects_assets/tmf/tmf1.png'} 
								width={100}
								height={100}
								/> */}


							<div className='project_image_container'>

								{/* <ImageLoaded effect={"blur"} classname={"project_image"} alt={"TMF Logo"} src={"logos/tmf_logo.png"} /> */}
								<ImageLoaded classname={"project_image"} alt={"TMF Logo"} src={'/logos/tmf_logo.png'} width={100} height={100} />

							</div>

							<div className='project_info_container'>
								<h2>
									<TranslationText message="tmf.h2" />
									{/* {t("tmf.h2")} */}
								</h2>
								<p>
									<TranslationText message="tmf.p1" />
									{/* {t("tmf.p1")} */}
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

							{/* <ImageLoaded effect={""} classname={"bg_image"} alt={"SNB 2022 Image"} src={"snb2022/snb_1.jpg"} /> */}
							<ImageLoaded classname={"bg_image"} alt={"SNB 2022 Image"} src={'/projects_assets/snb2022/snb_1.jpg'} width={500} height={300} />


							<div className='project_image_container'>

								{/* <ImageLoaded effect={"blur"} classname={"project_image"} alt={"SNB Logo"} src={"logos/snb_logo1x5.png"} /> */}
								<ImageLoaded classname={"project_image"} alt={"SNB Logo"} src={'/logos/snb_logo1x5.png'} width={100} height={100} />

							</div>

							<div className='project_info_container'>
								<h2>SNB 2022</h2>
								<p>
									{/* {t("snb.p1")} */}
									<TranslationText message="snb.p1" />
								</p>
								<LearnMoreButton pathname='/snb' />
							</div>
						</div>
					</Fade>
				</section>

				<br />

				<Fade>
					<h1 className='header'>
						<TranslationText message="work.freelance" />
						{/* {t("work.freelance")} */}
					</h1>
				</Fade>

				<section className={"projects_section"
					// (fillVariable)
					// 	? 'projects_section'
					// 	: 'projects_section projects_section_dark'
				}>
					<Fade>
						<div className='project_container'>

							{/* <ImageLoaded effect={"blur"} classname={"bg_image"} alt={"CitasApp Image"} src={"freelance/citasApp/citas1.png"} /> */}
							<ImageLoaded classname={"bg_image"} alt={"CitasApp Image"} src={'/projects_assets/citasApp/citas1.png'} width={500} height={300} />

							<div className='project_image_container'>

								{/* <ImageLoaded effect={"blur"} classname={"project_image"} alt={"CitasApp Logo"} src={"logos/citas_logo.png"} /> */}
								<ImageLoaded classname={"project_image"} alt={"CitasApp Logo"} src={'/logos/citas_logo.png'} width={100} height={100} />

							</div>
							<div className='project_info_container'>
								<h2>CitasApp</h2>
								<p>
									{/* {t("citas.p1")} */}
									<TranslationText message="citas.p1" />
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
							{/* <ImageLoaded effect={"blur"} classname={"bg_image"} alt={"Confort Image"} src={"freelance/confort/Pantalla_Principal.jpg"} /> */}
							<ImageLoaded classname={"bg_image"} alt={"Confort Image"} src={'/projects_assets/confort/Pantalla_Principal.jpg'} width={500} height={300} />



							<div className='project_image_container'>

								{/* <ImageLoaded effect={"blur"} classname={"project_image"} alt={"Confort Logo"} src={"logos/confort_logo.png"} /> */}
								<ImageLoaded classname={"project_image"} alt={"Confort Logo"} src={'/logos/confort_logo.png'} width={100} height={100} />

							</div>
							<div className='project_info_container'>
								<h2>Confort</h2>
								<p>
									<TranslationText message="confort.p" />
									{/* {t("confort.p")} */}
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
							{/* <ImageLoaded effect={"blur"} classname={"bg_image"} alt={"Coremant Image"} src={"freelance/coremant/coremant.png"} /> */}
							<ImageLoaded classname={"bg_image"} alt={"Coremant Image"} src={'/projects_assets/coremant/coremant.png'} width={500} height={300} />


							<div className='project_image_container'>

								{/* <ImageLoaded effect={"blur"} classname={"project_image"} alt={"Coremant Logo"} src={"logos/coremant_logo.png"} /> */}
								<ImageLoaded classname={"project_image"} alt={"Coremant Logo"} src={'/logos/coremant_logo.png'} width={100} height={100} />

							</div>
							<div className='project_info_container'>
								<h2>Coremant</h2>
								<p>
									<TranslationText message="coremant.p" />
									{/* {t("coremant.p")} */}
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
							{/* <ImageLoaded effect={"blur"} classname={"bg_image"} alt={"CrossBorderTrade Image"} src={"freelance/crossBorderTrade/crossBorder.jpg"} /> */}
							<ImageLoaded classname={"bg_image"} alt={"CrossBorderTrade Image"} src={'/projects_assets/crossBorderTrade/crossBorder.jpg'} width={500} height={300} />


							<div className='project_image_container'>

								{/* <ImageLoaded effect={"blur"} classname={"project_image"} alt={"CrossBorderTrade Logo"} src={"logos/crossBorder_logo.png"} /> */}
								<ImageLoaded classname={"project_image"} alt={"CrossBorderTrade Logo"} src={'/logos/crossBorder_logo.png'} width={100} height={100} />

							</div>
							<div className='project_info_container'>
								<h2>Cross Border Trade</h2>
								<p>
									<TranslationText message="crossBorder.p1" />
									{/* {t("crossBorder.p1")} */}
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
							{/* <ImageLoaded effect={"blur"} classname={"bg_image"} alt={"kidsrUs Image"} src={"freelance/kidsrUs/KidsrUs_image.png"} /> */}
							<ImageLoaded classname={"bg_image"} alt={"kidsrUs Image"} src={'/projects_assets/kidsrUs/KidsrUs_image.png'} width={500} height={300} />


							<div className='project_image_container'>

								{/* <ImageLoaded effect={"blur"} classname={"project_image"} alt={"KidsrUs Logo"} src={"logos/kidsrUs_logo.png"} /> */}
								<ImageLoaded classname={"project_image"} alt={"KidsrUs Logo"} src={'/logos/kidsrUs_logo.png'} width={100} height={100} />

							</div>
							<div className='project_info_container'>
								<h2>Kids`R`Us</h2>
								<p>
									<TranslationText message="kidsrUs.p1" />
									{/* {t("kidsrUs.p1")} */}
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
