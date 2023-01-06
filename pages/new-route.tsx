import { FormEvent, useState } from "react";
import Fetching from "../Fetching";
import FileField from "../components/FileField/FileField";
import { InputFieldTitle, SignInButton, TagsContainer } from "../components/Styles.styled";
import Tag from "../components/Tag/Tag";
import TextField from "../components/TextField/TextField";
import { ICreateRouteData, ITag } from "../interface";
import { NRAlert, NRContainer, NRForm, TagsWrapper, TopInputContainer, TopLeftContainer, TopRightContainer } from "../styles/new-route.styled";
import { TitleTagsWrapper } from "../styles/route-settings.styled";
import TextAreaField from "../components/TextAreaField/TextAreaField";


function NewRoute(props:{
    tags:ITag[],
}){

    const imagesTotalFileSize = 5;
    const gpxTotalFileSize = 2;

    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [alertText, setAlertText] = useState<string>("");

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

    function getTags(){
        if(props.tags && props.tags.length === 0){
            return "Tags not found";
        }else{
            let tags = props.tags.map((tag:ITag, index:number) => <Tag key={index} selected={selectedTags.includes(tag.title)} title={tag.title} selectable={true} onClick={() => toggleTag(tag.title)} />);
            return tags;
        }
    }

    function createRoute(e:FormEvent){
        e.preventDefault();
        let target = e.target as HTMLFormElement;
        let title = target.routetitle as HTMLInputElement;
        let distance = target.distance as HTMLInputElement;
        let time = target.time as HTMLInputElement;
        let gpx = target.gpx as HTMLInputElement;
        let images = target.images as HTMLInputElement;
        let about = target.about as HTMLInputElement;

        if(title.value.trim() !== "" && distance.value.trim() !== "" && time.value.trim() !== "" && images.files && images.files.length > 0 && about.value.trim() !== ""){
            let imagesArray = Array.from(images.files);
            let gpxFile = gpx && gpx.files && gpx.files[0] || "";
            let totalImagesSize = 0;
            imagesArray.forEach((file:File) => {
                totalImagesSize += file.size;
            });

            if(totalImagesSize > imagesTotalFileSize * 1000000){
                setAlertText(`Total images size should be smaller than ${imagesTotalFileSize}mb`);
                return;
            }else{
                setAlertText(``);
            }

            if(selectedTags.length > 4 || selectedTags.length < 2){
                setAlertText(`Please select 2-4 tags`);
                return;
            }
            
            const routeData:ICreateRouteData = {
                title:title.value,
                distance:parseInt(distance.value),
                time:parseInt(time.value),
                gpx: gpxFile,
                images:images.files,
                about:about.value,
                tags:selectedTags
            }
            console.log("FETCH");
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
            return;
        }
    }

    return(
        <NRContainer>
            <NRForm onSubmit={(e) => createRoute(e)}>
                <TopInputContainer>
                    <TopLeftContainer>
                        <TextField name="routetitle" title="Route title" />
                        <TextField type="number" name="distance" title="Distance" placeholder="KM"/>
                        <TextField type="number" name="time" title="Time" placeholder="Minutes" />
                    </TopLeftContainer>

                    <TopRightContainer>
                        <FileField smallText="(Not required)" title="GPX" name="gpx" maxTotalWeightMB={gpxTotalFileSize} extention="gpx" />
                        <FileField smallText="(2-5 required)" title="Images" name="images" maxTotalWeightMB={imagesTotalFileSize} multiple={true} type="image/png" preview={true}/>
                    </TopRightContainer>
                </TopInputContainer>
                <TagsWrapper>
                    <InputFieldTitle>Tags (2-4 required)</InputFieldTitle>
                    <TagsContainer>
                        {getTags()}
                    </TagsContainer>
                </TagsWrapper>
                <TextAreaField title="About" name="about" placeholder="Please write sometging about your route" />
                {alertText.trim() !== "" && <NRAlert>{alertText}</NRAlert>}   
                <SignInButton>Create Route</SignInButton>
            </NRForm>
        </NRContainer>
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
  