import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { SearchContainer } from "../SearchInput/SearchInput.styled";
import { HeaderContainer, Wrapper } from "./Header.styled";
import Head from 'next/head'
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useEffect, useState } from "react";
import { SignInButton } from "../Styles.styled";
import Auth from "../../Auth";
import { IProfile } from "../../interface";

function Header(){
    const [profile, setProfile] =  useState<IProfile>();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        let auth = Auth.getAuth();
        console.log(auth);
        if(auth && auth.id){
            setProfile(auth);
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