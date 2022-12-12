import Link from "next/link";
import styled from "styled-components";

export const LogoLink = styled(Link)`
    max-width: 190px;
    img{
        @media (max-width:550px){
            max-width: 70px;
        }
    }
`

export const LogoPicture = styled.picture`
    width:100%;
`