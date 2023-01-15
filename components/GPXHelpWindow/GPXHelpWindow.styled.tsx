import styled from "styled-components";

export const GPXHWindowWrapper = styled.div`
    width:100%;
    max-width:100vw;
    height:100%;
    background-color:#000000cc;
    position: absolute;
    left:0px;
    top:0px;
    z-index: 99;
    backdrop-filter: blur(8px);
    cursor: pointer;
    padding:15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GPXHContainer = styled.div`
    max-width:720px;
    width:100%;
    max-height:650px;
    height:100%;
    scrollbar-width: none;
    background-color: white;
    border-radius:5px;
    border: 2px solid ${({ theme }) => theme.accentColor || "black"};
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20px 50px;
    padding-bottom: 40px;
    position: relative;
    gap:30px;
    overflow-y: scroll;
    @media(max-width:550px){
        padding:15px;
    }
`

export const GPXHTitle = styled.p`
    font-size: 30px;
    color:${({ theme }) => theme.accentColor || "black"};
    font-weight: bold;
    padding-bottom: 50px;
`

export const GPXCloseButton = styled.svg`
    position: absolute;
    top:5px;
    right:5px;
    cursor: pointer;
    width:40px;
    height: 40px;
    padding:5px;

    transition: all 0.3s;
    &:hover{
        transform: scale(1.4);
    }
`

export const GPXDownloadStepContainer = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    justify-content: space-between;
    gap:20px;


    @media(max-width:610px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

export const GPXStepText = styled.p`
    font-size:24px;
    color:${({ theme }) => theme.accentColor || "black"};
    font-weight: bold;
    width:100%;

    @media(max-width:700px){
        font-size:18px;
    }

    @media(max-width:610px){
        text-align: center;
    }
`

export const GPXHImagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    align-items: flex-end;
    gap:10px;
    @media(max-width:550px){
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap:30px;
    }
`

export const GPXHImage = styled.img`
    max-width: 300px;
    width:100%;
    object-fit: cover;
`

export const GPXHImageTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #21612D;
    width:100%;
    text-align: center;
    padding-bottom:5px;
`