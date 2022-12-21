import styled from "styled-components";
import { Container } from "../components/Styles.styled";

export const RouteContainer = styled(Container)`

`

export const TopSectionContainer = styled.section`
    width:100%;
    display:grid;
    grid-template-columns: minmax(300px,800px) minmax(300px,600px);
    height:300px;
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
`