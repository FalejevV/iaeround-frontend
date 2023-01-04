import Link from "next/link";
import styled from "styled-components";



export const EditRouteText = styled.p`
    font-size:16px;
    color:#4e4e4e;
    white-space: nowrap;
    transition: max-width 0.7s;
    text-align: right;
    max-width: 0px;
    overflow:hidden;


    @media(max-width:600px){
        display: none;
    }
`

export const EditRouteSVG = styled.svg`
    fill:#4e4e4e;
    width:30px;
    height:30px;
    transition: all 0.3s;
`

export const EditRouteContainer = styled(Link)`
    position: absolute;
    right:0px;
    top:10px;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    gap:10px;
    display:flex;
    &:hover{
        ${EditRouteText}{
            color:black;
            max-width:200px;
        }
        ${EditRouteSVG}{
            fill:black;
        }
    }
`

