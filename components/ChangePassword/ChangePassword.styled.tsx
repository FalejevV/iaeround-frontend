import styled, { css } from "styled-components";
import { SettingsForm } from "../../styles/settings.styled";
import { IToggle } from "../../interface";
import { AuthButton } from "../../styles/auth.styled";

export const CPForm = styled(SettingsForm)<IToggle>`
    display: flex;
    flex-direction: column;
    gap:15px;
    height:30px;
    padding-top:0px;
    padding-bottom: 0px;
    margin-bottom:50px;
    overflow: hidden;
    transition: all 0.3s;
    margin-bottom:20px;
    ${({ toggle }) => toggle && css`
        height:450px;
    `}
`

export const CPTitle = styled.p`
    color:${({ theme }) => theme.accentColor || "black"};
    font-size: 18px;
    cursor: pointer;
    padding-bottom: 30px;
`

export const CPSubmit = styled(AuthButton)`
    margin-top: 20px;
    max-width: unset;

    transition: all 0.3s;
    &:disabled{
        opacity: 0.5;
    }
`

export const CPMessage = styled.p`
    font-size: 16px;
`