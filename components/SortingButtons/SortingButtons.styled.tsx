import styled, { css } from "styled-components";
import { IToggle } from "../../interface";

export const SortingButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    min-height: 50px;
    height:100%;
    align-items: center;
    gap:30px;


    
    @media(max-width:880px){
        width:100%;
        max-width:546px;
        justify-content: space-between;
    }

    @media(max-width:430px){
        gap:15px;
    }

    @media(max-width:340px){
        gap:10px;
    }
`

export const SortingButton = styled.button<IToggle>`
    user-select: none;
    background-color: transparent;
    border:0px;
    cursor: pointer;
    font-size:16px;
    transition: all 0.3s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    
    ${({ toggle }) => toggle && css`
        transform:scale(1.15) translateX(4px);
        color:${({ theme }) => theme.accentColor};
        fill:${({ theme }) => theme.accentColor};
    `}
    

    @media(max-width:430px){
        font-size:14px;
    }

    @media(max-width:340px){
        font-size:12px;
    }
`

export const SortingIndicator = styled.svg<IToggle>`
    width:25px;
    height:25px;
    padding-top:3px;

    ${({ toggle }) => toggle && css`
        transform: translateY(3px) rotate(180deg);
    `}
`

export const SortingDateIndicator = styled.p`
    font-size: 14px;
    width:25px;
    padding-left:5px;

    @media(max-width:430px){
        font-size: 12px;
        width:30px;
        padding-left:0px;

    }
`