import styled, { StyledComponent, css } from "styled-components";
import { Container } from "../components/Styles.styled";
import { IToggle } from "../interface";
import leftArrow from "../public/img/left.svg";
import rightArrow from "../public/img/right.svg";
import Image from 'next/image';

export const AuthContainer = styled(Container)`
    width:100%;
    max-width: 481px;
    margin-top:8vh;
    display:flex;
    flex-direction:column;
    gap:50px;
`


export const AuthForm = styled.form<IToggle>`
    width:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:20px;
    max-height: 175px;
    overflow: hidden;

    transition: all 0.6s;
    ${({ toggle }) => toggle && css`
        max-height: 500px;
    `}
`



export const ButtonsContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
`

export const LeftArrowSVG = styled.svg<IToggle>`
    width:20px;
    height:20px;
    position:absolute;
    left:30px;
    top:50%;
    transform: translateY(-50%);
    fill:${({ theme }) => theme.accentColor || "black"};
    transition: all 0.3s;
    opacity:0;


    ${({ toggle }) => toggle && css`
        opacity:1;
    `}


    @media(max-width:400px){
        left:10px;
    }
`

export const RightArrowSVG = styled.svg<IToggle>`
    left:unset;
    right:30px;
    width:20px;
    height:20px;
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    fill:${({ theme }) => theme.accentColor || "black"};
    transition: all 0.3s;
    opacity:0;


    ${({ toggle }) => toggle && css`
        opacity:1;
    `}

    @media(max-width:400px){
        right:10px;
    }
`

export const AuthButton = styled.button<IToggle>`
    font-size: 18px;
    padding:5px 20px;
    max-width: 180px;
    width:100%;
    cursor: pointer;
    border-radius: 5px;
    border:2px solid ${({ theme }) => theme.accentColor};
    background-color: transparent;
    color: ${({ theme }) => theme.accentColor};
    transition: all 0.3s;
    position:relative;
    white-space: nowrap;
    ${({ toggle }) => toggle && css`
        background-color: ${({ theme }) => theme.accentColor};
        color:white;

        &:hover{
            filter:brightness(1.3);
        }
    `}

    &:hover{
        ${LeftArrowSVG}{
            left:20px;

            @media(max-width:400px){
                left:10px;
            }
        }

        ${RightArrowSVG}{
            right:20px;

            @media(max-width:400px){
                right:10px;
            }
        }
    }

    &:disabled{
        opacity:0.4;
    }
`

