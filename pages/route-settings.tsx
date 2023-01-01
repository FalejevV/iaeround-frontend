import { FormEvent, useEffect, useRef, useState } from "react";
import { IRoute } from "../interface";
import Fetching from "../Fetching";
import { useRouter } from "next/router";
import { DistanceTimeContainer, LoginErrorText, RSButtonsContainer, RSContainer, RemoveRouteButton, RouteEditForm, SaveRouteButton, TitleTagsWrapper } from "../styles/route-settings.styled";
import { InputFieldTitle, LoadingImage, StatusMessage, TagsContainer } from "../components/Styles.styled";
import TextField from "../components/TextField/TextField";
import TextAreaField from "../components/TextAreaField/TextAreaField";
import Tag from "../components/Tag/Tag";



function RouteSettings(){

    const [routeFetch,setRouteFetch] = useState<IRoute>();
    const [authFetch, setAuthFetch] = useState<string>();
    const [tagsFetch , setTagsFetch] = useState([]);
    let formRef = useRef(null);
    const router = useRouter();
    const { id } = router.query;
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [removeRouteTimer, setRemoveRouteTimer] = useState(5);
    const [alertText, setAlertText] = useState({
        error:false,
        text:""
    });

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

    function saveRoute(e:FormEvent){
        e.preventDefault();
        if(formRef.current){
            let form = formRef.current as HTMLFormElement;
            let title = form.routetitle as HTMLInputElement;
            let about = form.about as HTMLInputElement;
            let distance = form.distance as HTMLInputElement;
            let time = form.time as HTMLInputElement;
            if(title.value.trim() !== "" && about.value.trim() !== "" && distance.value.trim() !== "" && time.value.trim() !== ""){
                if(selectedTags.length >= 2 && selectedTags.length <=4){
                    setAlertText({
                        error:false,
                        text:""
                    });
                    if(id !== undefined){
                        Fetching.updateRoute({
                            id:id[0],
                            title:title.value,
                            about:about.value,
                            distance:distance.value,
                            time:time.value,
                            tags:selectedTags
                        }).then(res => res.json()).then(data => {
                            if(data.status !== "OK"){
                                setAlertText({
                                    error:true,
                                    text:data.status
                                })
                            }else{
                                window.location.href = `/route?id=${id[0]}`;
                            }
                        })
                    }
                }else{
                    if(selectedTags.length < 2){
                        setAlertText({
                            error:true,
                            text:"You need to select atleast 2 tags"
                        })
                    }else if (selectedTags.length > 4){
                        setAlertText({
                            error:true,
                            text:"You selected too much tags. (4 max)"
                        })
                    }
                }
            }else{
                setAlertText({
                    error:true,
                    text:"Some fields look empty"
                })
            }
        }
    }


    function removeRoute(e:FormEvent){
        e.preventDefault();
        if(removeRouteTimer > 1){
            setRemoveRouteTimer(prevTimer => prevTimer -= 1);
        }else{
            if(id !== undefined && id[0].trim() !== ""){
                Fetching.removeRoute(id[0]).then(res => res.json()).then(data => {
                    if(data.status === "OK"){
                        window.location.href = `/`;
                    }else{
                        setAlertText({
                            error:true,
                            text:data.status
                        })
                    }
                })
            }
        }
    }

    return(
        <RSContainer>
            {routeFetch === undefined && <LoadingImage src="/img/Loading-gif.gif" />}
            {routeFetch !== undefined && authFetch !== undefined && <>
                {routeFetch.owner_id !== authFetch ? 
                <>
                    <LoginErrorText>Seems like you dont have access to edit this route.</LoginErrorText>
                    <LoginErrorText>(Try to relogin)</LoginErrorText>
                </>
                :
                <>
                    <RouteEditForm ref={formRef}>
                        <TextField title="Title" name="routetitle" preValue={routeFetch.title}/>
                        <DistanceTimeContainer>
                            <TextField title="Distance (km)" name="distance" preValue={routeFetch.distance}/>
                            <TextField title="Time (min)" name="time" preValue={routeFetch.time}/>
                        </DistanceTimeContainer>
                        <TextAreaField title="About" name="about" preValue={routeFetch.about} />
                        <TitleTagsWrapper>
                            <InputFieldTitle>Tags (2-4 required)</InputFieldTitle>
                            <TagsContainer>
                                {tagsFetch.map((tag:{title:string}, index:number) => <Tag onClick={() => toggleTag(tag.title)} selected={selectedTags.includes(tag.title)} key={index} title={tag.title} selectable={true} />)}
                            </TagsContainer>
                        </TitleTagsWrapper>
                        {alertText.text.trim() !== "" && <StatusMessage toggle={alertText.error}>{alertText.text}</StatusMessage>}
                        <RSButtonsContainer>
                            <SaveRouteButton onClick={(e) => saveRoute(e)} >Save route</SaveRouteButton>
                            <RemoveRouteButton onClick={(e) => removeRoute(e)} >Remove route {removeRouteTimer < 5 && removeRouteTimer > 0 && `(${removeRouteTimer} clicks)`}</RemoveRouteButton>
                        </RSButtonsContainer>
                    </RouteEditForm>
                </>
                }
            </>}
        </RSContainer>
    )

}

export default RouteSettings;