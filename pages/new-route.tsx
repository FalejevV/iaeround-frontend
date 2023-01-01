import { useState } from "react";
import Fetching from "../Fetching";
import FileField from "../components/FileField/FileField";
import { InputFieldTitle, SignInButton, TagsContainer } from "../components/Styles.styled";
import Tag from "../components/Tag/Tag";
import TextField from "../components/TextField/TextField";
import { ITag } from "../interface";
import { NRContainer, NRForm, TagsWrapper, TopInputContainer, TopLeftContainer, TopRightContainer } from "../styles/new-route.styled";
import { TitleTagsWrapper } from "../styles/route-settings.styled";
import TextAreaField from "../components/TextAreaField/TextAreaField";


function NewRoute(props:{
    tags:ITag[],
}){
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

    function createRoute(){

    }
    return(
        <NRContainer>
            <NRForm>
                <TopInputContainer>
                    <TopLeftContainer>
                        <TextField name="routetitle" title="Route title" />
                        <TextField name="distance" title="Distance" placeholder="KM"/>
                        <TextField name="time" title="Time" placeholder="Minutes" />
                    </TopLeftContainer>

                    <TopRightContainer>
                        <FileField title="GPX" name="gpx" maxTotalWeightMB={3} extention="gpx" />
                        <FileField title="Images" name="images" maxTotalWeightMB={5} multiple={true} type="image/png" preview={true}/>
                    </TopRightContainer>
                </TopInputContainer>
                <TagsWrapper>
                    <InputFieldTitle>Tags (2-4 required)</InputFieldTitle>
                    <TagsContainer>
                        {getTags()}
                    </TagsContainer>
                </TagsWrapper>
                <TextAreaField title="About" name="about" placeholder="Please write sometging about your route" />      
            </NRForm>
            <SignInButton onClick={createRoute}>Create Route</SignInButton>
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
  