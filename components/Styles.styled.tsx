import Link from "next/link";
import styled, { css } from "styled-components";
import { IToggle } from "../interface";

export const Container = styled.div`
    max-width: 1440px;
    width:100%;
    padding: 20px;
    margin: 0 auto;

    @media(max-width:380px){
        padding:20px 10px;
    }
`

export const SignInLink = styled(Link)<IToggle>`
    display: flex;
    align-items: center;
    margin-left:auto;
    cursor: pointer;
    @media(max-width:550px){
        display: none;
    }

    ${({ toggle }) => toggle && css`
        @media(min-width:551px){
            display: none;
        }
        @media(max-width:550px){
            display: flex;
        }
    `}
`

export const SignInButton = styled.button`
    padding:10px 30px;
    background: linear-gradient(202.18deg, #3E6144 -7.99%, #6FAD7A 104.42%);
    border-radius: 5px;     
    font-size: 16px;
    color:white;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        filter:brightness(1.2);
    }
`

export const SignInSVGSmall = styled.svg`
    width:40px;
    height:40px;
    fill:${({ theme }) => theme.accentColor};
    padding:9px;
    border:2px solid ${({ theme }) => theme.accentColor};
    border-radius: 5px;
`



export const InputFieldTitle = styled.p`
    font-size: 18px;
    opacity: 0.7;
    white-space: nowrap;
`

export const InputFieldInput = styled.input`
    background-color: transparent;
    border-radius: 5px;
    padding:10px 15px;
    border:1px solid #4f4f4f;
    color:#000000;
    font-size:15px;
    width:100%;
    &:focus{
        outline: none;
    }
`

export const TextAreaInput = styled.textarea`
    width:100%;
    background-color: transparent;
    border-radius: 5px;
    padding:10px 15px;
    border:1px solid #4f4f4f;
    color:#000000;
    font-size:15px;
    &:focus{
        outline: none;
    }
    resize: none;
    height:200px;
    line-height: 25px;
`

export const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    gap:10px;
`


export const StatusMessage = styled.p<IToggle>`
    font-size: 18px;
    padding:10px 20px;
    color: #204f0b;
    border: 2px solid #204f0b;
    border-radius: 5px;
    background-color: white;


    ${({ toggle }) => toggle && css`
        border: 2px solid #841919;
        color: #841919;
    `}
`


export const LoadingImage = styled.img`
    width:100px;
    height:100px;
    margin-top: 100px;
`