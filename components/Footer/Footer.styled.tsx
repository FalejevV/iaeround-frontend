import styled, { css } from "styled-components";
import { Container } from "../Styles.styled";
import { ICounter, IToggle } from "../../interface";
import Image from "next/image";

export const FooterWrapper = styled.footer`
    display: block;
    position: relative;
    width:100%;
    max-width: 100vw;
    min-height:60px;
    height:fit-content;
    background-color: #ffffff;
    border-top:2px solid ${({ theme }) => theme.accentColor || "black"};
    position: relative;
    margin-top: auto;
`

export const FooterContainer = styled(Container)`
    margin:0 auto;
    height:100%;
    display: flex;
    justify-content: center;
`

export const FooterText = styled.p<IToggle & ICounter>`
    cursor: pointer;
    font-weight: 500;
    color:${({ theme }) => theme.accentColor || "black"};
    transition: all 0.3s;
    user-select: none;
    font-size: 16px;
    ${({ toggle }) => toggle && css`
        transform:rotateY(180deg);
    `}

    ${({ count }) => count && `
        font-size: calc(16px + ${count}px);
    `}
`

export const MG = styled(Image)<IToggle>`
    width:140px;
    height:0px;
    position: absolute;
    top:0px;
    right:-50px;
    opacity:0;
    transition: all 0.3s;
    ${({ toggle }) => toggle && css`
        height:140px;
        display: flex;
        right:0px;
        opacity:1
    `}
`