
// "use client"

// import React, { useContext, useState } from 'react'
// import { useState } from 'react'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import { Spinner } from './Spinner'
// import { Spinner } from 'react-bootstrap'
import Image from 'next/image'
// import { FillContext } from '../../context/FillContext'

interface Props {
    width: number,
    height: number,
    classname: string,
    alt: string;
    src: string;
}

export const ImageLoaded = ({ width, height, classname, alt, src }: Props) => {

    // let [isLoading, setIsLoading] = useState(true)

    // let { firstLoad, setFirstLoad } = useContext(FillContext)

    // console.log({ isLoading })

    return (
        <div
            className={(classname === "bg_image") ? "ImageLoadedBackGround" : ""}
        >
            <Image
                className={(classname === "bg_image") ? "bg_imageImageLoaded" : classname}
                alt={alt}
                src={src}
                width={width}
                height={height}
                quality={100}
            // onLoadingComplete={() => {
            //     setIsLoading(false)
            //     console.log('from onLoadingComplete ', { isLoading })
            //     // setFirstLoad(true);
            // }}
            />

            {/* {imageLoaded
                ? <Spinner />
                : <Image
                    className={(classname === "bg_image") ? "bg_imageImageLoaded" : classname}
                    alt={alt}
                    src={'/projects_assets/tmf/tmf1.png'}
                    width={width}
                    height={height}
                    onLoad={() => {
                        setIsLoading(true)
                        // setFirstLoad(true);
                    }}
                />
            } */}


            {/* {!firstLoad && (<LazyLoadImage
                effect={effect}
                className={(classname === "bg_image") ? "bg_imageImageLoaded" : classname}
                alt={alt}
                src={src}
                onLoad={() => {
                    setIsLoading(true)
                    setFirstLoad(true);
                }}
            />)}


            {firstLoad && <LazyLoadImage
                effect={effect}
                className={(classname === "bg_image") ? "bg_imageImageLoaded" : classname}
                alt={alt}
                src={src}
                onLoad={() => {
                    setIsLoading(true)
                }}
            />} */}


        </div>
    )
}


