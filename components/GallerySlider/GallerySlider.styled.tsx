import styled, { css } from "styled-components";
import { ICounter, IToggle } from "../../interface";



export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    width: 100%;
    max-width: 800px;
    user-select: none;
`


export const MainImage = styled.img`
    width:100%;
    height:420px;
    object-fit: cover;
    border-radius: 5px;
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
`

export const ImageFlexbox = styled.img<IToggle>`
    width:180px;
    height:100%;
    object-fit: cover;
    transition: all 0.3s;
    border:4px solid transparent;
    border-radius:5px;
    ${({ toggle }) => toggle && css`
        border:4px solid ${({ theme }) => theme.accentColor};
    `}
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