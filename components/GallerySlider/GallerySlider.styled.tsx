import styled, { css } from "styled-components";
import { ICounter, IToggle } from "../../interface";
import { LeftArrowSVG } from "../../styles/auth.styled";



export const GalleryContainer = styled.div<IToggle>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    width: 100%;
    max-width: 800px;
    user-select: none;
    position:relative;
`


export const MainImage = styled.img<IToggle>`
    width:100%;
    height:420px;
    object-fit: cover;
    border-radius: 5px;
    position: relative;
    transition: all 0.5s;
    box-shadow: 0px 0px 5px 1px #000000d4;
    aspect-ratio: 16 / 9;
    cursor: pointer;
    @media(max-width:800px){
        height:300px;
    }

    @media(max-width:500px){
        height:200px;
    }
   
`

export const ImageSliderContainer = styled.div`
    position: relative;
    width:100%;
    height:110px;
    display: flex;
    justify-content: center;
    gap:20px;
    align-items: center;
`

export const ImageListContainer = styled.div`
    display: flex;
    width:100%;
    max-width: 600px;
    height:100%;
    overflow-x: hidden;
`

export const ImageFlexboxContainer = styled.div<ICounter>`
    display: flex;
    align-items: center;
    gap:20px;
    transition: all 0.3s;
    position: relative;
    left:${({ count }) => `calc((${count} * 200px * -1 + 200px))`};

    @media(max-width:800px){
        left:${({ count }) => `calc((${count} * 120px * -1 + 100px))`};
    }

    @media(max-width:500px){
        left:${({ count }) => `calc((${count} * 120px * -1 + 60px))`};
    }

    @media(max-width:390px){
        left:${({ count }) => `calc((${count} * 120px * -1 + 20px))`};
    }

`

export const ImageFlexbox = styled.img<IToggle>`
    width:180px;
    height:100%;
    object-fit: cover;
    transition: all 0.3s;
    border:4px solid transparent;
    border-radius:8px;
    cursor: pointer;
    ${({ toggle }) => toggle && css`
        border:4px solid ${({ theme }) => theme.accentColor};
    `}

    @media(max-width:800px){
        width:100px;
        height:70px;
    }
`

export const ArrowLeftSVG = styled.svg<IToggle>`
    width:50px;
    height:50px;
    padding:5px;
    transition: all 0.3s;
    cursor:pointer;

    &:hover{
        transform: scale(1.5);
    }
`


export const ArrowRightSVG = styled(ArrowLeftSVG)`

`



export const ZoomMainContainer = styled.div<IToggle>`
    display:none;
    flex-direction: column;
    width:100vw;
    height:100vh;
    max-width: 100vw;
    max-height: 100vh;
    position: relative;

    ${({ toggle }) => toggle && css`
        display:flex;
    `}
`



export const ZoomImageContainer = styled.div<IToggle>`
    position: fixed;
    top:50px;
    left:50%;
    transform: translateX(-50%);
    overflow: scroll;
    scrollbar-width: none;
    overflow-y: hidden;
    scrollbar-width: 0%;
    display: none;
    flex-direction: column;
    gap:100px;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    height:100%;
    max-width: 60vw;
    max-height: 85vh;
    z-index: 1000;
    padding:0px 30px;
    scroll-snap-stop: always;
    scroll-snap-type: x mandatory;
    ${({ toggle }) => toggle && css`
        display:flex;
    `}
`


export const ZoomImageSlider = styled.div`
    max-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:50px;
`

export const ZoomImage = styled.img`
    flex:1 auto;
    width:60vw;
    height:60vh;
    object-fit: contain;
    cursor:grab;
    scroll-snap-align: none center;
`

export const ZoomBackground = styled.div<IToggle>`
    position: fixed;
    top:0px;
    left:0px;
    width:100vw;
    height:100vh;
    z-index: 999;
    background-color:#000000ee;
    backdrop-filter: blur(8px);

    display: none;
    ${({ toggle }) => toggle && css`
        display:block;
    `}
`

export const ZoomArrowContainer = styled.div`
    width:100%;
    max-width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:50px;
    position: fixed;
    bottom: 10vh;
    z-index: 1001;
    left:0px;
`
export const ZoomArrow = styled.svg`
    fill:white;
    width:100px;
    height:100px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        transform: scale(1.2);
    }
`


export const ZoomCloseSVG = styled(ZoomArrow)`

`
