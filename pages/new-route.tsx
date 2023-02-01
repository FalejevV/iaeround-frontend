import { FormEvent, useEffect, useRef, useState } from "react";
import Fetching from "../Fetching";
import FileField from "../components/FileField/FileField";
import { InputFieldTitle, SignInButton, TagsContainer } from "../components/Styles.styled";
import Tag from "../components/Tag/Tag";
import TextField from "../components/TextField/TextField";
import { ICreateRouteData, ITag } from "../interface";
import { NRAlert, NRContainer, NRForm, TagsWrapper, TopInputContainer, TextFieldsContainer, FileFieldsContainer, RulesCheckboxContainer, RulesButton, RulesContainer } from "../styles/new-route.styled";
import TextAreaField from "../components/TextAreaField/TextAreaField";
import NewRouteRules from "../components/NewRouteRules/NewRouteRules";
import CheckboxField from "../components/CheckboxField/CheckboxField";
import Compression from "../Compression";


function NewRoute(props:{
    tags:ITag[],
}){

    const imagesTotalFileSize = 20;
    const gpxTotalFileSize = 5;
    const thumbnailFileSize = 5;
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [alertText, setAlertText] = useState<string>("");
    const [rulesCounter, toggleRulesCounter] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    function toggleTag(tag:string){
        setSelectedTags(prevTags => {
            if(prevTags.includes(tag)){
                return prevTags.filter(prevTag => prevTag !== tag);
            }else{
                let newTagsArray = [...prevTags];
                newTagsArray.push(tag);
                return newTagsArray;
            }
        })
    }
    
    // Freeze fix when going back page
    useEffect(() => {
        document.body.style.overflow = "auto";
    },[]);


    function getTags(){
        if(props.tags && props.tags.length === 0){
            return "Tags not found";
        }else{
            let tags = props.tags.map((tag:ITag, index:number) => <Tag key={index} selected={selectedTags.includes(tag.title)} title={tag.title} selectable={true} onClick={() => toggleTag(tag.title)} />);
            return tags;
        }
    }

    async function createRoute(e:FormEvent){
        e.preventDefault();
        if(buttonDisabled){
            return;
        }
        setButtonDisabled(true);
        let target = e.target as HTMLFormElement;
        let title = target.routetitle as HTMLInputElement;
        let distance = target.distance as HTMLInputElement;
        let time = target.time as HTMLInputElement;
        let gpx = target.gpx as HTMLInputElement;
        let images = target.images as HTMLInputElement;
        let about = target.about as HTMLInputElement;
        let thumbnail = target.thumbnail as HTMLInputElement;

        if(title.value.trim() !== "" && distance.value.trim() !== "" && time.value.trim() !== "" && images.files && images.files.length > 0 && about.value.trim() !== "" && thumbnail.files && thumbnail.files.length > 0){
            let imagesArray = Array.from(images.files);
            let gpxFile = gpx && gpx.files && gpx.files[0] || "";
            let thumbnailFile = thumbnail && thumbnail.files && thumbnail.files[0] || undefined;
            let totalImagesSize = 0;
            imagesArray.forEach((file:File) => {
                totalImagesSize += file.size;
            });

            if(thumbnailFile === undefined){
                setAlertText(`Please select a thumbnail`);
                setButtonDisabled(false);
                return;
            }

            if(thumbnail.files[0].size > thumbnailFileSize * 1000000){
                setAlertText(`Thumbnail size should be smaller than ${thumbnailFileSize}mb`);
                setButtonDisabled(false);
                return;
            }


            if(totalImagesSize > imagesTotalFileSize * 1000000){
                setAlertText(`Total images size should be smaller than ${imagesTotalFileSize}mb`);
                setButtonDisabled(false);
                return;
            }else{
                setAlertText(``);
            }

            if(selectedTags.length > 4 || selectedTags.length < 2){
                setAlertText(`Please select 2-4 tags`);
                setButtonDisabled(false);
                return;
            }

            setAlertText("Compressing images... please wait");
            let compressedThumbnail = await Compression.image(thumbnailFile) || new Blob();

            let compressedImages = imagesArray.map(async (image) => await Compression.image(image));
            let imageCompressResult = await Promise.all(compressedImages).then(values => {
                let fileList: File[] = [];
                values.forEach((blob,index) => {
                    var file = new File([blob || ""], `${index}image.jpeg`)
                    fileList.push(file);
                });
                return fileList;
            }) as File[];


            const routeData:ICreateRouteData = {
                title:title.value,
                distance:parseInt(distance.value),
                time:parseInt(time.value),
                gpx: gpxFile,
                images:imageCompressResult,
                about:about.value,
                tags:selectedTags,
                thumbnail:compressedThumbnail

            }
            Fetching.createNewRoute(routeData).then(res => res.json()).then(data => {
                if(data.status !== "OK"){
                    setAlertText(data.status);
                }else{
                    setAlertText("Saving route... please wait");
                    setTimeout(() => {
                        window.location.href = `/route?id=${data.id}`;
                    },3000);
                }
            });
            return;

            
        }else{
            setAlertText("Some fields look empty. All fields except GPX are required");
            setButtonDisabled(false);
            return;
        }
    }

    function displayRules(e:FormEvent){
        e.preventDefault();
        toggleRulesCounter(prev => !prev);
    }
    
    return(
        <>
            <NewRouteRules counter={rulesCounter}/>
            <NRContainer>
                <NRForm onSubmit={(e) => createRoute(e)}>
                    <TopInputContainer>
                        <TextFieldsContainer>
                            <TextField name="routetitle" title="Route title" />
                            <TextField type="number" name="distance" title="Distance" placeholder="KM"/>
                            <TextField type="number" name="time" title="Time" placeholder="Minutes" />
                        </TextFieldsContainer>

                        <FileFieldsContainer>
                            <FileField title="Thumbnail" name="thumbnail" maxTotalWeightMB={thumbnailFileSize} type="image" preview={true}/>
                            <FileField smallText="(Not required)" title="GPX" name="gpx" maxTotalWeightMB={gpxTotalFileSize} extention="gpx" />
                            <FileField smallText="(2-5 required)" title="Images" name="images" maxTotalWeightMB={imagesTotalFileSize} multiple={true} type="image" preview={true}/>
                        </FileFieldsContainer>
                    </TopInputContainer>
                    <TagsWrapper>
                        <InputFieldTitle>Tags (2-4 required)</InputFieldTitle>
                        <TagsContainer>
                            {getTags()}
                        </TagsContainer>
                    </TagsWrapper>
                    <TextAreaField title="About" name="about" placeholder="Please write sometging about your route" />
                    <RulesCheckboxContainer>
                        <CheckboxField title="I have read the" name="rules" required/>
                        <RulesButton onClick={(e) => displayRules(e)}>Rules</RulesButton>
                    </RulesCheckboxContainer>
                    {alertText.trim() !== "" && <NRAlert>{alertText}</NRAlert>}
                    <SignInButton disabled={buttonDisabled}>Create Route</SignInButton>
                </NRForm>
            </NRContainer>
        </>
    )
}


export default NewRoute;

export async function getServerSideProps() {
    let tagsFetch = await Fetching.getTags().then(res => res.json());

    return {
        props: {
          tags: tagsFetch.data,
        },
      }
  }
  