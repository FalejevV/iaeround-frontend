import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled.article`
    max-width: calc(1440px / 3 - 20px);
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 2px solid ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    height:420px;
    cursor: pointer;
    position: relative;
    @media(max-width:1180px){
        max-width: calc(1440px / 2 - 20px);
    }

    @media(max-width:880px){
        max-width: 550px;
    }
`


export const CardImage = styled.img`
    width:100%;
    height:270px;
    object-fit: cover;
    cursor: col-resize;
`

export const RouteInfoContainer = styled(Link)`
    position: relative;
    display: flex;
    width:100%;
    flex: 1 auto;
    flex-direction: column;
    justify-content: space-between;
    padding:15px;
    gap:10px;
`


export const RouteTitle = styled.p`
    color:#3f3f3f;
    font-size: 18px;
    width:100%;
    font-weight: 500;
`

export const RouteTitleContainer = styled.div`
    width:100%;
    max-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DistanceTimeContainer = styled.div` /// Container for both distance and time infos
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:10px;
`

export const DTContainer = styled.div`   /// Individual flexbox to arrange distance and dime info container SVG and text
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
`

export const DTSVG = styled.svg`
    
`

export const DTTitle = styled.p`
    font-size: 16px;
    white-space: nowrap;
`

export const TagsLikesContainer = styled.div`
    width:100%;
    height:fit-content;
    display: grid;
    grid-template-columns: 1fr 100px;
`

export const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex:auto;
    height:fit-content;
    gap:10px;
`

export const LikesContainer = styled.div`
    display: flex;
    width:100%;
    height:100%;
    justify-content: flex-end;
    align-items: flex-end;
    gap:10px;
`

export const GPXIndicator = styled.p`
    font-size: 15px;
    color:#464646;
    white-space: nowrap;
    padding-bottom:1px;
`

export const DateInfo = styled.p`
    font-size: 14px;
    color:#464646;
    white-space: nowrap;
    text-align: right;
    padding-bottom:17px;
    position: absolute;
    top:65px;
    right:15px;
`