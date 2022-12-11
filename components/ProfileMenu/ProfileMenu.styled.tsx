import Link from "next/link";
import styled, { css } from "styled-components";
import { IToggle } from "../../interface";

export const ProfileMenuContainer = styled.div`
    height:100%;
    width:auto;
    margin-left:auto;
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
`

export const DropdownArrowSVG = styled.svg`
    width:25px;
    height:25px;
    position: absolute;
    bottom: -5px;
`

export const ProfileMenuAvatar = styled.img`
    width: 70px;
    height:70px;
    object-fit: cover;
    background-color: rgba(0,0,0,0.5);
    border-radius: 50%;
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

    ${({ toggle }) => toggle && css`
        display: flex;
    `}
`

export const ProfileMenuLink = styled(Link)`
    cursor: pointer;
    width:100%;
    padding:10px;
    user-select: none;
`