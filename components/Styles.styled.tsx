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


export const SignInButton = styled(Link)`
    padding:10px 30px;
    background: linear-gradient(202.18deg, #3E6144 -7.99%, #6FAD7A 104.42%);
    border-radius: 5px;     
    font-size: 16px;
    color:white;
    margin-left:auto;
    white-space: nowrap;
    
    transition: all 0.3s;
    &:hover{
        filter:brightness(1.2);
    }
`



export const InputFieldTitle = styled.p`
    font-size: 20px;
`

export const InputFieldInput = styled.input`
    background-color: transparent;
    border-radius: 5px;
    padding:10px;
    border:1px solid #4f4f4f;
    color:#7a7a7a;

    &:focus{
        outline: none;
    }
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