import Link from "next/link";
import styled, { css } from "styled-components";
import { IToggle } from "../../interface";
import Image from "next/image";

export const LogoLink = styled(Link)`
    max-width: 190px;
    position: relative;
    @media(max-width:333px){
        display:none;
    }
`

export const LogoPicture = styled.picture`
    width:100%;
`

export const LogoImage = styled(Image)`
    width:100%;
    min-width: 50px;
    min-height:70px;
    height:100%;
    @media(max-width:550px){
        max-width: 70px;
    }

`
