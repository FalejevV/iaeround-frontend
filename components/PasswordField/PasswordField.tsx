import { ChangeEvent, useState } from "react";
import { InputFieldContainer, InputFieldInput, InputFieldTitle } from "../Styles.styled";



function PasswordField(props:{
    title:string,
    name:string,
    placeholder?:string,
    preValue?:string
}){

    const [inputValue,setInputValue] = useState(props.preValue || "");

    function inputChange(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        setInputValue(target.value);
    }


    return(
        <InputFieldContainer>
            <InputFieldTitle>{props.title}</InputFieldTitle>
            <InputFieldInput value={inputValue} onChange={(e) => inputChange(e)} name={props.name} placeholder={props.placeholder || ""} type="password" />
        </InputFieldContainer>
    )
}


export default PasswordField;