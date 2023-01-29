import styled, { css } from "styled-components";
import { SettingsForm } from "../../styles/settings.styled";
import { IToggle } from "../../interface";
import { AuthButton, AuthContainer } from "../../styles/auth.styled";
import { SignInButton } from "../Styles.styled";

export const CPContainer = styled.div`
    width:100%;
    max-width:510px;
    margin:0 auto;
    padding:0px 15px;
    display: flex;
    flex-direction: column;
    gap:15px;
`

export const CPForm = styled.form<IToggle>`
    display: flex;
    flex-direction: column;
    gap:15px;
    height:0px;
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
`

export const CPSubmit = styled(SignInButton)`
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