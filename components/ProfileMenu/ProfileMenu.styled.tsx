import Link from "next/link";
import styled, { css } from "styled-components";
import { IToggle } from "../../interface";

export const ProfileMenuContainer = styled.div`
    height:100%;
    display:flex;
    justify-content:flex-end;
    align-items: center;
    gap:20px;
    cursor: pointer;
    position: relative;
`

export const ProfileMenuUsername = styled.p`
    font-size: 14px;
    text-align: right;
    position: relative;
    padding-right:20px;
    user-select: none;

    @media (max-width:800px){
        display: none;
    }

`

export const DropdownArrowSVG = styled.svg`
    width:25px;
    height:25px;
    position: absolute;
    bottom: -5px;

    @media (max-width:800px){
        display: none;
    }
`

export const ProfileMenuAvatar = styled.img`
    width: 70px;
    height:70px;
    object-fit: cover;
    border-radius: 50%;
    padding:5px;
    border:2px solid ${({ theme }) => theme.accentColor};
    @media (max-width:550px){
        width:50px;
        height:50px;
    }


`

export const ProfileMenuDropdown = styled.div<IToggle>`
    padding: 10px;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    position: absolute;
    left:-40px;
    top:50px;
    width:140px;
    display: none;
    flex-direction: column;
    cursor: default;
    align-items: flex-start;
    box-shadow:0px 0px 5px 5px rgba(0,0,0,0.1);
    z-index: 10000;
    ${({ toggle }) => toggle && css`
        display: flex;
    `}

    @media (max-width:800px){
        position:fixed;
        display: flex;
        width:100%;
        height:230px;
        left:0px;
        top:unset;
        bottom:-100%;
        justify-content:flex-end;
        padding-bottom:20px;

        transition: bottom 0.3s;
        ${({ toggle }) => toggle && css`
            bottom:0px;
        `}
    }
`

export const ProfileMenuLink = styled(Link)`
    cursor: pointer;
    width:100%;
    padding:10px;
    user-select: none;
    transition: all 0.3s;
    &:hover{
        transform: scale(1.05);
    }


    @media (max-width:800px){
        font-size:20px;

        &:hover{
            transform:unset;
        }
    }
`

export const ProfileDropdownUsername = styled(ProfileMenuLink)`
    text-align: right;
    color:#919191;
    flex: auto;
    display:none;

    @media (max-width:800px){
        display:block;
    }
`

export const BackgroundDarkener = styled.div<IToggle>`
    position:fixed;
    left:0px;
    top:0px;
    width:100vw;
    max-width: 100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.5);
    cursor:default;
    opacity: 0;
    z-index:999;
    transition: opacity 0.3s;
    pointer-events: none;
    ${({ toggle }) => toggle && css`
        @media(max-width:800px){
            opacity: 1;
            pointer-events: unset;
        }
    `}
`