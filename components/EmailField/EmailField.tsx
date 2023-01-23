import { ChangeEvent, useState } from "react";
import { InputFieldContainer, InputFieldInput, InputFieldTitle } from "../Styles.styled";



function EmailField(props:{
    title:string,
    name:string,
    placeholder?:string,
    preValue?:string,
}){

    const [inputValue,setInputValue] = useState(props.preValue || "");

    function inputChange(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        setInputValue(target.value);
    }

    return(
        <InputFieldContainer>
            <InputFieldTitle htmlFor={props.name}>{props.title}</InputFieldTitle>
            <InputFieldInput id={props.name} value={inputValue} onChange={(e) => inputChange(e)} name={props.name} placeholder={props.placeholder || ""} type="email" />
        </InputFieldContainer>
    )
}

export default EmailField;