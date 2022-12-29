import styled, { css } from "styled-components";
import { ISize, IToggle } from "../../interface";

export const LikeContainer = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
`

export const LikeSVG = styled.svg<ISize>`
    fill: ${({theme }) => theme.accentColor};

    ${({ size }) => size !== "" && css`
        width: ${size};
        height: ${size};
    `}
`

export const LikesText = styled.p<ISize>`
    font-size: 15px;
    color:#464646;
    white-space: nowrap;
    padding-top:1px;

    ${({ size }) => size !== "" && css`
        font-size: ${size};
    `}
`


export const LikeFillPath = styled.path<IToggle>`
    transition: all 0.3s;
    opacity: 0;

    ${({ toggle }) => toggle && css`
        opacity: 1;
    `}
`
