import { useState } from "react";
import { FooterContainer, FooterText, FooterWrapper, MG } from "./Footer.styled";


function Footer(){
    const [footerToggle, setFooterToggle] = useState(false);
    const [clickCounter, setClickCounter] = useState(0);

    function clickFooter(){
        setFooterToggle(prev => !prev);
        setClickCounter(prev => prev + 3);
    }

    return(
        <FooterWrapper>
            <FooterContainer>
                <FooterText toggle={footerToggle ? true : false} count={clickCounter} onClick={clickFooter}>An empty footer ¯\_(ツ)_/¯</FooterText>
                <MG alt="footer" src="/img/footer.png" width="200" height="200" toggle={clickCounter >= 55}/>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer;