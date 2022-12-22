import { IRoute } from "../../interface";
import LikeCounter from "../LikeCounter/LikeCounter";
import Tag from "../Tag/Tag";
import { CardContainer, CardImage, DTTitle, DTContainer, DTSVG, DistanceTimeContainer, RouteInfoContainer, RouteTitle, RouteTitleContainer, TagsLikesContainer, TagsContainer, LikesContainer, GPXIndicator, DateInfo } from "./RouteCard.styled";


function RouteCard(props:{
    data:IRoute,
    filterable?: boolean,
}){

    function clickCheck(e:React.MouseEvent){
        let target  = e.target as HTMLElement;
        if(target.localName === "nav" && props.filterable === true){
            e.preventDefault();
        }
    }
    return(
        <CardContainer>
            <CardImage src={props.data.images[0]} alt="route thumbnail" />
            <RouteInfoContainer href={`/route?id=${props.data.id}`} onClick={(e) => clickCheck(e)}>
                <RouteTitleContainer>
                    <RouteTitle>{props.data.title}</RouteTitle>
                    <DistanceTimeContainer>
                        <DTContainer>
                            <DTSVG viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"/><path d="M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 1 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5-4-5h3zm15-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </DTSVG>
                            <DTTitle>{props.data.distance}km</DTTitle>
                        </DTContainer>

                        <DTContainer>
                            <DTSVG viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/>
                            </DTSVG>
                            <DTTitle>{props.data.time}min</DTTitle>
                        </DTContainer>
                    </DistanceTimeContainer>
                </RouteTitleContainer>
                <TagsLikesContainer>
                    <DateInfo>{props.data.date}</DateInfo>
                    <TagsContainer>
                        {props.data.tags.map(tag => <Tag key={tag} title={tag} selectable={props.filterable} />)}
                    </TagsContainer>
                    <LikesContainer>
                        {props.data.gpx.trim() !== "" && <GPXIndicator>GPX</GPXIndicator>}
                        <LikeCounter likes={props.data.likes} />
                    </LikesContainer>
                </TagsLikesContainer>
            </RouteInfoContainer>
        </CardContainer>
    )
}

export default RouteCard;