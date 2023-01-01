import Link from "next/link";
import styled from "styled-components";


export const AddRouteLink = styled(Link)`
    display: flex;
    align-items: center;
    gap:10px;
    justify-content: center;
    padding:8px 13px;
    background: linear-gradient(202.18deg, #3E6144 -7.99%, #6FAD7A 104.42%);
    border-radius: 5px;
    transition: all 0.3s;
    margin-left:auto;

    &:hover{
        filter:brightness(1.2);
    }

    @media(max-width:650px){
        padding:8px 8px;
    }

`

export const AddRouteText = styled.p`
    color:white;
    font-size: 16px;
    white-space: nowrap;
    @media(max-width:650px){
        display:none;
    }
`

export const AddRouteSVG = styled.svg`
    fill:white;
    width:22px;
    height:22px;
`