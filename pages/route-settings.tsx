import { useEffect, useState } from "react";
import { IRoute } from "../interface";
import Fetching from "../Fetching";
import { useRouter } from "next/router";
import { DistanceTimeContainer, LoginErrorText, RSButtonsContainer, RSContainer, RemoveRouteButton, RouteEditForm, SaveRouteButton, TagsContainer, TitleTagsWrapper } from "../styles/route-settings.styled";
import { InputFieldTitle, LoadingImage } from "../components/Styles.styled";
import TextField from "../components/TextField/TextField";
import TextAreaField from "../components/TextAreaField/TextAreaField";
import Tag from "../components/Tag/Tag";



function RouteSettings(){

    const [routeFetch,setRouteFetch] = useState<IRoute>();
    const [authFetch, setAuthFetch] = useState<string>();
    const [tagsFetch , setTagsFetch] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [removeRouteTimer, setRemoveRouteTimer] = useState(5);
    useEffect(() => {
        if(id && id !== undefined && id !== ""){
            Fetching.checkAuth().then(res => setAuthFetch(res));
            Fetching.getOneRoute(id[0]).then(res => res.json()).then(data => {setRouteFetch(data.data); setSelectedTags(data.data.tags)});
            Fetching.getTags().then(res => res.json()).then(data => setTagsFetch(data.data || []));
        }
    },[id]);



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

    function saveRoute(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault();
    }


    function removeRoute(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault();
        if(removeRouteTimer > 0){
            setRemoveRouteTimer(prevTimer => prevTimer -= 1);
        }else{
            console.log("REMOVE");
        }
    }

    return(
        <RSContainer>
            {routeFetch === undefined && <LoadingImage src="/img/Loading-gif.gif" />}
            {routeFetch !== undefined && authFetch !== undefined && <>
                {routeFetch.owner_id !== authFetch ? 
                <>
                    <LoginErrorText>Seems like you don't have access to edit this route.</LoginErrorText>
                    <LoginErrorText>(Try to relogin)</LoginErrorText>
                </>
                :
                <>
                    <RouteEditForm>
                        <TextField title="Title" name="title" preValue={routeFetch.title}/>
                        <DistanceTimeContainer>
                            <TextField title="Distance (km)" name="distance" preValue={routeFetch.distance}/>
                            <TextField title="Time (min)" name="time" preValue={routeFetch.time}/>
                        </DistanceTimeContainer>
                        <TextAreaField title="About" name="about" preValue={routeFetch.about} />
                        <TitleTagsWrapper>
                            <InputFieldTitle>Tags</InputFieldTitle>
                            <TagsContainer>
                                {tagsFetch.map((tag:{title:string}, index:number) => <Tag onClick={() => toggleTag(tag.title)} selected={selectedTags.includes(tag.title)} key={index} title={tag.title} selectable={true} />)}
                            </TagsContainer>
                        </TitleTagsWrapper>
                            
                        <RSButtonsContainer>
                            <SaveRouteButton onClick={(e) => saveRoute(e)} href="#">Save route</SaveRouteButton>
                            <RemoveRouteButton onClick={(e) => removeRoute(e)} href="#">Remove route {removeRouteTimer < 5 && removeRouteTimer > 0 && `(${removeRouteTimer} clicks)`}</RemoveRouteButton>
                        </RSButtonsContainer>
                    </RouteEditForm>
                </>
                }
            </>}
        </RSContainer>
    )

}

export default RouteSettings;