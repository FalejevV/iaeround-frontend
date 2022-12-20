import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { SearchContainer } from "../SearchInput/SearchInput.styled";
import { HeaderContainer, Wrapper } from "./Header.styled";
import Head from 'next/head'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useEffect, useState } from "react";


function Header(){
    return(
        <Wrapper>
            <HeaderContainer>
                <Logo />
                <SearchInput />
                <ProfileMenu />
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header;