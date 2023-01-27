import { FormEvent, useEffect, useState } from "react";
import TextField from "../TextField/TextField";
import { CPForm, CPMessage, CPSubmit, CPTitle } from "./ChangePassword.styled";



function ChangePassword(){

    const [toggleForm,setToggleForm] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [message,setMessage] = useState("");

    useEffect(() => {
        if(toggleForm){
            setTimeout(() => {
                window.scrollTo(0, window.scrollY + 320);
            }, 400);
        }
    }, [toggleForm]);

    function formSubmit(e:FormEvent){
        e.preventDefault();
        if(buttonDisabled){
            return;
        }
        setButtonDisabled(true);
        
        let target = e.target as HTMLFormElement;
        let oldPassword = target.oldpassword;
        let newPassword= target.newpassword;
        let repeatPassword = target.repeatpassword;
        if(oldPassword.value.trim() !== "" && newPassword.value.trim() !== "" && repeatPassword.value.trim() !== ""){
            if(newPassword.value.trim() === repeatPassword.value.trim()){
                setMessage("OK");
                setButtonDisabled(false);
                return;
            }else{
                setMessage("New password fields do not match");
                setButtonDisabled(false);
                return;
            }
        }else{
            setMessage("Some fields look empty");
            setButtonDisabled(false);
            return;
        }
    } 

    return(
        <CPForm onSubmit={(e) => formSubmit(e)} toggle={toggleForm}>
            <CPTitle onClick={() => setToggleForm(prev => !prev)}>Change password</CPTitle>
            <TextField title="Old password" name="oldpassword" />
            <TextField title="New password" name="newpassword" />
            <TextField title="Repeat password" name="repeatpassword" />
            <CPSubmit disabled={buttonDisabled}>Change password</CPSubmit>
            {message.trim() !== "" && <CPMessage>{message}</CPMessage>}
        </CPForm>
    )
}

export default ChangePassword;