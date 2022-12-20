import { useState } from "react";
import { ArrowLeftSVG, ArrowRightSVG, GalleryContainer, ImageFlexbox, ImageFlexboxContainer, ImageListContainer, ImageSliderContainer, MainImage } from "./GallerySlider.styled";


function GallerySlider(props:{
    images:string[],
}){
    
    const [currentImage,setCurrentImage] = useState<number>(0);
    
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
    return(
        <GalleryContainer>
            <MainImage src={props.images[currentImage]} />
            <ImageSliderContainer>
                <ArrowLeftSVG onClick={() => switchImage(-1)} viewBox="0 0 24 24" width="24" height="24" toggle={false}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
                </ArrowLeftSVG>
                <ImageListContainer>
                    <ImageFlexboxContainer count={currentImage}>
                        {props.images.map((image:string, index:number) => <ImageFlexbox onClick={() => {setCurrentImage(index)}} toggle={currentImage === index} src={image} key={index} />)}
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