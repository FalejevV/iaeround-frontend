import { ChangeEvent, useState } from "react";
import { InputFieldContainer, InputFieldInput, InputFieldTitle, TextAreaInput } from "../Styles.styled";



function TextAreaField(props:{
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
            <InputFieldTitle>{props.title}</InputFieldTitle>
            <TextAreaInput value={inputValue} onChange={(e) => inputChange(e)} name={props.name} placeholder={props.placeholder || ""}/>
        </InputFieldContainer>
    )
}


export default TextAreaField;