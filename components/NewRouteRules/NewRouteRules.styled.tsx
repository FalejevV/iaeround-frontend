import styled, { css } from "styled-components";
import { Container } from "../Styles.styled";
import Link from "next/link";
import Image from "next/image";
import { ICounter } from "../../interface";

export const NRRulesBackgroundFill = styled.div`
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    position: fixed;
    background-color:#000000cc;
    z-index: 1001;
    backdrop-filter: blur(8px);
    padding:20px 20px;
`

export const NRRulesContainer = styled(Container)`
    max-width: 800px;
    width:100%;
    border:2px solid ${({ theme }) => theme.accentColor || "black"};
    border-radius: 5px;
    position: absolute;
    z-index: 1005;
    background-color: white;
    left:50%;
    transform: translateX(-50%);
    top:100px;
    display: flex;
    flex-direction: column;
    gap:50px;
    @media(max-width:800px){
        top:40px;
    }

    @media(max-height:730px){
        top:0px;
    }
`

export const NRRulesTitle = styled.p`
    width:100%;
    text-align: center;
    font-size: 25px;
    color: ${({ theme }) => theme.accentColor || "black"};
    font-weight: 600;
`

export const NRRulesButton = styled.button<ICounter>`
    position: relative;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    border:2px solid ${({ theme }) => theme.accentColor || "black"};
    cursor: pointer;
    background-color: transparent;
    transition: all 0.3s;
    align-self: center;
    &:hover{
        transform: scale(1.2);
    }

    &:after{
        transition: all 0.35s;
        position: absolute;
        content:"";
        left:0px;
        top:0px;
        height:100%;
        width:0px;
        background-color:#37fa447f;
        z-index: 2;
        backdrop-filter: backdrop-filter: sepia(90%);;
    }

    ${({ count }) => count && css`
        &:after{
            width: calc(25%*${count});
        }
    `}
`

export const NRRulesButtonText = styled.p`
    position: relative;
    z-index: 1;
    color:${({ theme }) => theme.accentColor || "black"};
`

export const NRRulesList = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    gap:20px;
`

export const NRRulesText = styled.p`
    font-size: 18px;

    a{
        text-decoration:underline;
        color:${({theme }) => theme.accentColor || "blue"};
    }
`

export const NRRImageContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px;
`

export const NRRImageTitle = styled.p`
    
`

export const NRRImage = styled(Image)`
    border: 2px solid ${({ theme }) => theme.accentColor || "black"};
    border-radius:5px;
    width:100%;
    max-width:500px;
    height:100%;
    max-height: 400px;
`