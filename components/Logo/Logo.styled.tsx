import Link from "next/link";
import styled, { css } from "styled-components";
import { IToggle } from "../../interface";

export const LogoLink = styled(Link)`
    max-width: 190px;
    img{
        @media (max-width:550px){
            max-width: 70px;
        }
    }

    @media(max-width:333px){
        display:none;
    }
`

export const LogoPicture = styled.picture`
    width:100%;
`