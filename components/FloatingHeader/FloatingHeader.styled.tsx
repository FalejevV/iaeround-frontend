import styled, { css } from "styled-components";
import { IToggle } from "../../interface";

export const FloatingHeaderContainer = styled.div<IToggle>`
    z-index: 1000;
    position: fixed;
    width:100%;
    top:0px;
    background-color:white;

    transition: all 0s;
    top:-300px;
    display: hidden;

    ${({ toggle }) => toggle && css`
        transition: all 0.3s;
        display: block;
        top:-90px;
    `}

    ${({ selected }) => selected && css`
        transition: all 0.3s;
        top:0px;
    `}
`