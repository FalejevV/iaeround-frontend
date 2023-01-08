import { ChangeEvent, useState } from "react";
import { AlertText, FFContainer, FFImage, FFInput, FFLabel, FilePreviewContainer, PreviewImage, PreviewImages, SmallText } from "./FileField.styled";
import { maxHeaderSize } from "http";



function FileField(props:{
    title:string,
    name:string,
    img?:string,
    multiple?:boolean
    type?:string,
    extention?:string,
    maxTotalWeightMB:number,
    preview?:boolean,
    smallText?: string,
}){

    const [file,setFile] = useState<FileList>();
    const [alert, setAlert] = useState("");

    function checkFile(e:ChangeEvent){
        let input = e.target as HTMLInputElement;
        let files = input.files as FileList;
        let totalSize = 0;

        if(files.length === 0){
            return;
        }
        
        if(props.multiple){
            Array.from(files).forEach((file:File) => {
                totalSize += file.size;
            });
        }else{
            totalSize = files[0].size;
        }

        if(totalSize / 1000000 > props.maxTotalWeightMB){
            setAlert(`Too heavy! (Max ${props.maxTotalWeightMB}MB)`);
            return;
        }else{
            setFile(files);
            setAlert(`OK`);
        }

        if(props.extention !== undefined){
            let extention = props.extention;
            Array.from(files).forEach((file:File) => {
                if(file.name.slice(file.name.length-(extention.length),file.name.length) !== extention){
                    setAlert(`File should be .${extention}`);
                    return;
                }else{
                    setAlert(`OK`);
                }
            });
        }

        if(props.type !== undefined){
            let type = props.type;
            let typeText="";
            if(type.includes("image")){
                typeText = "an image";
            }
            Array.from(files).forEach((file:File) => {
                if(!file.type.includes(type)){
                    setAlert(`File should be ${typeText}`);
                    return;
                }else{
                    setAlert(`OK`);
                }
            });
        }

        
    }

    function getPreviews(){
        if(file && file.length > 0){
            return Array.from(file).map((file:File, index:number) => <PreviewImage key={`${index}preview`} alt="preview image" src={URL.createObjectURL(file)} />)
        }
    }

    return(
        <FFContainer>
            <FFLabel htmlFor={props.name}>{props.title} {props.smallText !== "" && <SmallText>{props.smallText}</SmallText>}</FFLabel>
            {alert.trim() !== "" && alert.trim() !== "OK" && <AlertText>{alert}</AlertText>}
            <FFLabel htmlFor={props.name}>
                <FFImage src={props.img || "/img/UploadIcon.svg"} toggle={alert.trim() !== ""} success={alert.trim() === "OK"}/>
            </FFLabel>
            <FFInput onChange={(e) => checkFile(e)} multiple={props.multiple} id={props.name} name={props.name} type="file" />
            {file && file.length > 0 && props.preview && 
            <FilePreviewContainer toggle={props.multiple}>
                <PreviewImages>
                    {getPreviews()}
                </PreviewImages>
            </FilePreviewContainer>
            }
        </FFContainer>
    )
}

export default FileField;