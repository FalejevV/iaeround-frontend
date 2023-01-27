import styled, { css } from "styled-components";
import { IToggle } from "../../interface";
import { AuthButton } from "../../styles/auth.styled";

export const FPContainer = styled.div<IToggle>`
    width:100%;
    height:30px;
    transition: all 0.3s;
    overflow: hidden;
    ${({ toggle }) => toggle && css`
        height:260px;
    `}
    display:flex;
    flex-direction: column;
    gap:30px;
`

export const FPButton = styled.div`
    font-size:16px;
    color:${({ theme }) => theme.accentColor || "black"};
    cursor:pointer;
`

export const FPForm = styled.form`
    display: flex;
    flex-direction: column;
    gap:20px;
`

export const FPSubmit = styled(AuthButton)`
    max-width: unset;


    &:disabled{
        opacity:0.5;
    }
`

export const FPMessage = styled.p`
    font-size: 16px;
`