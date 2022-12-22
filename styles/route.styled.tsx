import styled, { css } from "styled-components";
import { Container } from "../components/Styles.styled";
import { IToggle } from "../interface";

export const RouteContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`

export const TopSectionContainer = styled.section`
    width:100%;
    display:grid;
    grid-template-columns: minmax(300px,800px) minmax(300px,600px);
    padding-bottom: 80px;
    @media(max-width:1300px){
        padding:0px 30px;
        grid-template-columns: 100%;
        justify-content: center;
        justify-items:center;
    }

    @media(max-width:500px){
        padding:0px 10px;
    }
`

export const RouteInfo = styled.div`
    padding:20px;
    padding-top:30px;
    padding-left:30px;
    max-width: 600px;
    width:100%;
    display: flex;
    flex-direction: column;
    gap:15px;

    @media(max-width:1300px){
        padding:0px 0px;
        max-width: unset;
    }
`

export const RouteTitle = styled.h1`
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
    padding-bottom: 15px;
`

export const RouteDate = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #000000;
`

export const RouteStats = styled.div`
    display: flex;
    width:100%;
    align-items: center;
    gap:20px;
`

export const Stat = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
`


export const StatSVG = styled.svg`
    width:30px;
    height:30px;
`

export const StatText = styled.p`
    font-weight: 500;
    font-size: 17px;
    color: #000000;
`

export const RouteAbout = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #000000;
`

export const RouteTags = styled.div`
    padding-top:10px;
    width:100%;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    flex-wrap: wrap;
    gap:15px;
    padding-bottom: 10px;
`

export const DownloadAndLikesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:30px;
`

export const DownloadContainer = styled.div`
    display: flex;
    align-items: center;
`

export const DownloadButton = styled.button`
    width:180px;
    height:50px;
    background: linear-gradient(173.74deg, #3E6144 4.97%, #6FAD7A 121.95%);
    border-radius: 5px;
    color:white;
    border:0px;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;

    transition: all 0.3s;
    &:hover{
        filter:brightness(1.1);
    }

`

export const DownloadSVG = styled.svg`
    fill:white;
`

export const GPXTip = styled.button`
    padding:8px 13px;
    padding-right:14px;
    padding-top:9px;
    font-weight: bold;
    background: linear-gradient(173.74deg, #5E5F44 4.97%, #DFC37A 121.95%);
    border-radius: 0px 5px 5px 0px;
    border:0px;
    color:white;
    font-size:16px;
    cursor:pointer;
    text-align: center;
    font-family: Courier New;

    transition: all 0.3s;
    &:hover{
        filter:brightness(1.1);
    }
`

export const RouteInfoLikesContainer = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
    cursor:pointer;
`

export const RouteInfoLikesSVG = styled.svg`
    width:28px;
    height:28px;
`

export const LikeFillPath = styled.path<IToggle>`
    transition: all 0.3s;
    opacity: 0;

    ${({ toggle }) => toggle && css`
        opacity: 1;
    `}
`

export const RouteInfoLikesText = styled.p`
    font-size: 17px;
`


export const SimmilarRoutesTitle = styled.h2`
    font-size: 20px;
`