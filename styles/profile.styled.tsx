import styled from "styled-components"
import { Container } from "../components/Styles.styled"


export const ProfileContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top:45px;
`

export const PInfoBar = styled(Container)`
    padding-top: 45px;
    display: flex;
    max-width: 880px;
    width:100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    @media(max-width:750px){
        flex-direction: column;
        gap:30px;
    }
`

export const InfoBarLeftSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width:350px;
    width:100%;
`

export const InfoBarAvatar = styled.img`
    width:160px;
    height:160px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 5px #00000014;
    border:2px solid ${({ theme }) => theme.accentColor};
    object-fit: cover;
`

export const InfoBarUserStats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height:160px;
    width:150px;
`

export const IBStatText = styled.p`
    font-size: 16px;
    color:#2c2c2c;
    &:first-child{
        font-weight: 500;
        font-size: 20px;
        padding-bottom: 10px;
    }
`

export const IBAboutText = styled.p`
    text-align:  justify;
    font-size: 16px;
    color:#2c2c2c;
    min-height: 50%;
    max-width: 400px;
    width:100%;
`

export const ProfileDivider = styled.hr`
    width:100%;
    height:1px;
    margin-top:45px;
    background-color: #0000002b;
`

export const ProfileRoutesTitle = styled.p`
    font-size: 20px;
    color:#313131;
    white-space: nowrap;
    margin:0 auto;
`