import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { SearchContainer } from "../SearchInput/SearchInput.styled";
import { HeaderContainer, Wrapper } from "./Header.styled";
import Head from 'next/head'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useEffect, useState } from "react";
import { SignInButton } from "../Styles.styled";


function Header(){
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <Wrapper>
            <HeaderContainer>
                <Logo />
                <SearchInput />
                { loggedIn ? <ProfileMenu /> : <SignInButton href="/auth">Sign In</SignInButton>}
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header;