import React from 'react'
import Wave from 'react-wavify'
import { Fade } from "react-awesome-reveal";
import { useTranslations } from 'next-intl'
// import { useContext } from 'react';
// import { FillContext } from '../../../context/FillContext';

export const WaveBlock = () => {
	// const [text] = useTranslation("global")

	// let { fillVariable } = useContext(FillContext)
    const t = useTranslations("translation");

	return (
		<div className='wavecontainer'>
			<div className='wavecontent'>
				<Fade cascade>

					<h3 className='animate__animated animate__fadeInDown animate__faster'>{t("waveB.h3")}</h3>
					<br />
					<h1 className='animate__animated animate__backInUp animate__faster'>{t("waveB.h1")}</h1>

					<button className='button animate__animated animate__fadeInDown animate__faster'>
						<a
							href="/portfolio/portafolio_jorge_senjudo.pdf"
							download="portafolio-jorge-senjudo.pdf"
						>
							{t("footer.downloadCV")}
						</a>
					</button>
				</Fade>

				<br />

				<Wave
					className='wave'
					fill={'rgb(20,20,20)'
						// (fillVariable)
						// 	? 'rgb(20,20,20)'
						// 	: 'rgb(255,255,255)'
					}
					paused={false}
					options={{
						height: 60,
						amplitude: 30,
						speed: 0.15,
						points: 3,
					}}
				/>

			</div>
		</div>
	)
}
