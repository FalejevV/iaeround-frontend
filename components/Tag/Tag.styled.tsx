import styled, { css } from "styled-components";
import { IToggle } from "../../interface";


export const TagCloseIcon = styled.svg`
    width:15px;
    height:15px;
    padding-top:1px;
    transition: transform 0.3s;
`

export const TagContainer = styled.button<IToggle>`
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    border: 1px solid #0000004d;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding:0px 10px;
    border-radius: 0px 10px 0px 10px;
    user-select: none;
    gap:5px;
    transition: background-color 0.3s;
   
    ${({ toggle }) => toggle && css`
        cursor: pointer;
        &:hover{
            background-color: rgba(0,0,0,0.05);

            ${TagCloseIcon}{
                transform: scale(1.2);
            }
        }
    `}
`

export const TagTitle = styled.p`
    font-size: 14px;
`
