import { useEffect, useRef, useState } from "react";
import { ArrowLeftSVG, ArrowRightSVG, GalleryContainer, ImageFlexbox, ImageFlexboxContainer, ImageListContainer, ImageSliderContainer, MainImage, ZoomArrow, ZoomArrowContainer, ZoomBackground, ZoomCloseSVG, ZoomImage, ZoomImageContainer, ZoomImageSlider, ZoomMainContainer } from "./GallerySlider.styled";
import { cloudImageLink } from "../../Fetching";
import { current } from "@reduxjs/toolkit";


function GallerySlider(props:{
    images:string[],
    id:string,
}){
    
    const [currentImage,setCurrentImage] = useState<number>(0);
    const [zoomToggle,setZoomToggle] = useState<boolean>(false);
    let zoomSliderRef = useRef(null);


    function switchImage(increment:number){
        if(currentImage + increment >= 0 && currentImage + increment < props.images.length){
            setCurrentImage(prevImage => prevImage + increment);
        }else{
            if(currentImage + increment < 0){
                setCurrentImage(0);
            }else{
                if(currentImage + increment > props.images.length){
                    setCurrentImage(props.images.length);
                }
            }
        }
    }

    function getSortedImages(){
        // for future?
        return props.images;
    }

    function zoomMainImage(){
        setZoomToggle(prev => {
            if(prev){
                document.body.style.overflow = "auto";
                if(zoomSliderRef.current){
                    let slider = zoomSliderRef.current as HTMLDivElement;
                    slider.scroll(0, 0);
                }
            }else{
                document.body.style.overflow = "hidden";
            }
            return !prev;
        });
    }

    function swipeZoomImage(increment:number){
        if(zoomSliderRef.current){
            let slider = zoomSliderRef.current as HTMLDivElement;
            slider.scrollBy(10*increment, 0);
        }
    }


    useEffect(() => {
        setCurrentImage(0);
    }, [props.images]);


    return(
        <GalleryContainer>
            <ZoomMainContainer toggle={zoomToggle}>

                <ZoomImageContainer ref={zoomSliderRef} toggle={zoomToggle}>
                    <ZoomImageSlider>
                        {props.images.map((image:string, index:number) => <ZoomImage alt="slider-image" key={index} src={cloudImageLink + `/${props.id}/` + image} />)}
                    </ZoomImageSlider>
                </ZoomImageContainer>
                <ZoomArrowContainer>
                    <ZoomArrow onClick={() => swipeZoomImage(-1)} viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
                    </ZoomArrow>

                    <ZoomCloseSVG viewBox="0 0 24 24" width="24" height="24" onClick={zoomMainImage}>
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                    </ZoomCloseSVG>

                    <ZoomArrow onClick={() => swipeZoomImage(1)} viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                    </ZoomArrow>
                </ZoomArrowContainer>
            </ZoomMainContainer>
            <ZoomBackground toggle={zoomToggle} onClick={zoomMainImage}></ZoomBackground>

            <MainImage alt="main" onClick={zoomMainImage}  src={cloudImageLink + `/${props.id}/` + props.images[currentImage]}/>
            <ImageSliderContainer>
                <ArrowLeftSVG onClick={() => switchImage(-1)} viewBox="0 0 24 24" width="24" height="24" toggle={false}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
                </ArrowLeftSVG>
                <ImageListContainer>
                    <ImageFlexboxContainer count={currentImage}>
                        {getSortedImages().map((image:string, index:number) => <ImageFlexbox loading="lazy" onClick={() => {setCurrentImage(index)}} toggle={currentImage === index} src={cloudImageLink + `/${props.id}/` + image} key={index} />)}
                    </ImageFlexboxContainer>
                </ImageListContainer>
                <ArrowRightSVG onClick={() => switchImage(1)} viewBox="0 0 24 24" width="24" height="24" toggle={true}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                </ArrowRightSVG>
            </ImageSliderContainer>
        </GalleryContainer>
    )
}

export default GallerySlider;