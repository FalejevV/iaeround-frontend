import styled, { css } from "styled-components";
import { ICounter, IToggle } from "../../interface";



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