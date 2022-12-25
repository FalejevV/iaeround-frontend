import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { SearchContainer } from "../SearchInput/SearchInput.styled";
import { HeaderContainer, Wrapper } from "./Header.styled";
import Head from 'next/head'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useEffect, useState } from "react";
import { SignInButton } from "../Styles.styled";

import { IProfile } from "../../interface";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Cookies from "js-cookie";
import Auth from "../../Auth";

function Header(){
    const [profile, setProfile] =  useState<IProfile>();
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        let userData = Auth.getAuth();
        if(userData && userData.id){
            setProfile(userData);
        }
        setLoaded(true);
    }, []);
    return(
        <Wrapper>
            <HeaderContainer>
                <Logo />
                <SearchInput />
                {loaded && <>
                    { profile ? <ProfileMenu profile={profile} /> : <SignInButton href="/auth">Sign In</SignInButton>}
                </>}
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header;