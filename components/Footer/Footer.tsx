import { useState } from "react";
import { FooterContainer, FooterText, FooterWrapper } from "./Footer.styled";


function Footer(){
    return(
        <FooterWrapper>
            <FooterContainer>
                <FooterText>This website was created for practice purposes... and for fun ;)</FooterText>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer;