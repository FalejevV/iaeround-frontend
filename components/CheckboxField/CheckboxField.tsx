import { ChangeEvent, useState } from "react";
import { CheckboxFieldContainer, CheckboxFieldInput, InputFieldInput, InputFieldTitle } from "../Styles.styled";



function CheckboxField(props:{
    title:string,
    name:string,
    placeholder?:string,
    preValue?:string,
    required?: boolean,
}){

    const [inputValue,setInputValue] = useState(false);

    function inputChange(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        setInputValue(target.checked);
    }

    return(
        <CheckboxFieldContainer>
            <CheckboxFieldInput required={props.required} checked={inputValue} onChange={(e) => inputChange(e)} id={props.name} name={props.name} placeholder={props.placeholder || ""} type="checkbox" />
            <InputFieldTitle htmlFor={props.name}>{props.title}</InputFieldTitle>
        </CheckboxFieldContainer>
    )
}

export default CheckboxField;