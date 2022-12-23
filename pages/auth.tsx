import { useState } from "react";
import PasswordField from "../components/PasswordField/PasswordField";
import TextField from "../components/TextField/TextField";
import { AuthButton, AuthContainer, AuthForm, ButtonsContainer, LeftArrowSVG, RightArrowSVG } from "../styles/auth.styled";
import EmailField from "../components/EmailField/EmailField";



function Auth(){

    const [openForm, setOpenForm] = useState(false);

    function clickHandler(type:string){
        if(!openForm && type === "Sign In"){
            console.log("LOGIN");
            return;
        }

        if(!openForm && type === "Sign Up"){
            setOpenForm(true);
            return;
        }

        if(openForm && type === "Sign In"){
            setOpenForm(false);
            return;
        }

        if(openForm && type === "Sign Up"){
            console.log("REGISTER");
        }
    }


    return(
        <AuthContainer>
            <AuthForm toggle={openForm} onSubmit={(e) => {e.preventDefault();}}>
                <TextField title="Username" name="username" placeholder="Username goes here"/>
                <PasswordField title="Password" name="password" placeholder="Password here" />
                <PasswordField title="Repeat password" name="repassword" placeholder="Repeat password here" />
                <EmailField title="Email" name="email" placeholder="Email pls" />
            </AuthForm>

            <ButtonsContainer>
                <AuthButton onClick={() => clickHandler("Sign In")} toggle={!openForm}>
                    <LeftArrowSVG toggle={openForm} viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
                    </LeftArrowSVG>
                    Sign In
                    </AuthButton>

                <AuthButton onClick={() => clickHandler("Sign Up")} toggle={openForm}>
                    Sign Up
                    <RightArrowSVG toggle={!openForm} viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                    </RightArrowSVG>
                    </AuthButton>
            </ButtonsContainer>
        </AuthContainer>
    )
}


export default Auth;