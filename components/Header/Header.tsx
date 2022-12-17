import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { SearchContainer } from "../SearchInput/SearchInput.styled";
import { HeaderContainer, Wrapper } from "./Header.styled";
import Head from 'next/head'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useEffect, useState } from "react";


function Header(){
    const [sortTagsBarFound, setSortTagsBarFound] = useState(false);
    useEffect(() => {
        const nav = document.querySelectorAll('nav');
        if(nav.length > 0){
            nav.forEach((item:HTMLElement) => {
                if(item.className.includes("ST")){
                    if(!sortTagsBarFound){
                        setSortTagsBarFound(true);
                    }
                }
            });
        }
    }, [])

    return(
        <Wrapper toggle={sortTagsBarFound}>
            <HeaderContainer>
                <Logo />
                <SearchInput />
                <ProfileMenu />
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header;