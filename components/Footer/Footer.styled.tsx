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
    box-shadow: 0px 0px 10px 0px #0000004d;

    opacity: 0.4;
    transition: all 0.3s;
    user-select: none;
    &:hover{
        opacity: 1;
    }
`

export const FooterContainer = styled(Container)`
    margin:0 auto;
    height:100%;
    display: flex;
    justify-content: center;
`

export const FooterText = styled.p`
    font-size: 16px;
    color:${({ theme }) => theme.accentColor || "black"};
`