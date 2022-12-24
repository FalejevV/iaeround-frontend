import { useRef, useState } from "react";
import PasswordField from "../components/PasswordField/PasswordField";
import TextField from "../components/TextField/TextField";
import { AuthButton, AuthContainer, AuthForm, ButtonsContainer, LeftArrowSVG, RightArrowSVG } from "../styles/auth.styled";
import EmailField from "../components/EmailField/EmailField";
import Fetching from "../Fetching";
import { IAuthForm } from "../interface";
import { StatusMessage } from "../components/Styles.styled";



function Auth(){
    let formRef = useRef(null);
    const [openForm, setOpenForm] = useState(false);
    const [status, setStatus] = useState<{error:boolean, text:string}>();

    function getFormData(type:string){
        if(formRef.current){
            const form:IAuthForm = formRef.current;
            let username = form.username.value;
            let password = form.password.value;
            let rpassword = form.repassword.value;
            let email = form.email.value;

            if(type === "Sign In"){
                if(username.trim() !== "" && password.trim() !== ""){
                    return([username,password]);
                }else{
                    return ("Some fields look empty");
                }
            }else if (type === "Sign Up"){
                if(username.trim() !== "" && password.trim() !== "" && rpassword.trim() !== "" && email.trim() !== ""){
                    return [username,password,rpassword,email];
                }else{
                    return ("Some fields look empty");
                }
            }
        }
    }

    function clickHandler(type:string){

        if(!openForm && type === "Sign In"){
            let formData = getFormData("Sign In");
            if(formData && typeof formData === "string"){
                setStatus({
                    error:true,
                    text: formData
                })
                return;
            }else{
                setStatus(undefined);
                Fetching.login(formData as string[]).then(res => {
                    if(res === "OK"){
                        setStatus({
                            error:false,
                            text: "You have logged in!"
                        });
                    }else{
                        setStatus({
                            error:true,
                            text: res
                        });
                    }
                });
            }
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
            let formData = getFormData("Sign Up");
            if(formData && typeof formData === "string"){
                setStatus({
                    error:true,
                    text: formData
                })
                return;
            }else{
                setStatus(undefined);
                Fetching.register(formData as string[]).then(res => {
                    if(res === "OK"){
                        setStatus({
                            error:false,
                            text: "You have been registered! Please sign in."
                        });
                    }else{
                        setStatus({
                            error:true,
                            text: res
                        });
                    }
                });
            }
            return;
        }
    }


    return(
        <AuthContainer>
            <AuthForm ref={formRef} toggle={openForm} onSubmit={(e) => {e.preventDefault();}}>
                <TextField title="Username" name="username" placeholder="Username"/>
                <PasswordField title="Password" name="password" placeholder="Password" />
                <PasswordField title="Repeat password" name="repassword" placeholder="Repeat password" />
                <EmailField title="Email" name="email" placeholder="Email" />
            </AuthForm>

            {status && status.text.trim() !== "" && 
            <StatusMessage toggle={status.error}>
                 {status.text}
             </StatusMessage>
            }

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