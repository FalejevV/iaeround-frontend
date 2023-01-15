import Fetching, { cloudAvatarLink } from "../../Fetching";
import { IProfile, IRoute } from "../../interface";
import { IBAboutText, IBStatText, InfoBarAvatar, InfoBarLeftSide, InfoBarUserStats, PInfoBar, ProfileContainer, ProfileDivider, ProfileRoutesTitle } from "../../styles/profile.styled";
import defaultAvatarImage from "../../public/img/profile.svg";
import { useEffect, useState } from "react";
import CardGrid from "../../components/CardGrid/CardGrid";
import EditButton from "../../components/EditButton/EditButton";

function Profile(props:{
    user:IProfile,
    routes:IRoute[]
}){

    const [likes, setLikes] = useState<number>();
    const [routeCounter, setRouteCounter] = useState<number>();
    const [latestPosts, setLatestPosts] = useState<IRoute[]>();
    const [likedPosts, setLikedPosts] = useState<IRoute[]>();
    useEffect(() => {
        if(props.routes.length > 0){
            let likeSum = 0;
            let routeSum = 0;
            let profilePosts:IRoute[] = [];
            let likedPosts:IRoute[] = [];
            props.routes.forEach((route:IRoute) => {
                if(route.owner_id === props.user.id){
                    let likesSet = new Set(route.likes);
                    likeSum += likesSet.size;
                    routeSum += 1;
                    profilePosts.push(route);
                }
                if(route.likes.includes(props.user.id)){
                    likedPosts.push(route);
                }
            })
            
            setLatestPosts(
                profilePosts.sort(function(a:IRoute, b:IRoute){
                    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
                })
            );
            setLikedPosts(
                likedPosts.sort(function(a:IRoute, b:IRoute){
                    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
                })
            );
            
            setLikes(likeSum);
            setRouteCounter(routeSum);
        }
    },[]);
    
    return(
        <>
            <PInfoBar>
                <InfoBarLeftSide>
                    <InfoBarAvatar src={props.user.avatar !== "" ? cloudAvatarLink + `/${props.user.id}/${props.user.avatar}` : defaultAvatarImage.src} />
                    <InfoBarUserStats>
                        <IBStatText>{props.user.name}</IBStatText>
                        <IBStatText>Likes: {likes}</IBStatText>
                        <IBStatText>Routes: {routeCounter}</IBStatText>

                        <EditButton link="/settings" text="Edit profile" />
                    </InfoBarUserStats>
                </InfoBarLeftSide>
                <IBAboutText>
                {props.user.about}
                </IBAboutText>
            </PInfoBar>
            <ProfileDivider></ProfileDivider>

            <ProfileContainer>
                {latestPosts !== undefined && latestPosts.length > 0 && <>
                    <ProfileRoutesTitle>Latest Posts</ProfileRoutesTitle>
                    <CardGrid removePadding={true} data={latestPosts} displayAmount={3} incrementDisplayAmountBy={3} filterable={false} />
                </>}

                {likedPosts !== undefined && likedPosts.length > 0 &&  <>
                    <ProfileRoutesTitle>Liked Posts</ProfileRoutesTitle>
                    <CardGrid removePadding={true} data={likedPosts} displayAmount={3} incrementDisplayAmountBy={3} filterable={false} />
                </>}
            </ProfileContainer>
        </>
        )
}


export default Profile;


export async function getServerSideProps(context:{query:{id:string}}) {
    const {id} = context.query;
    
    let userFetch = await Fetching.getUser(id).then(res => res.json()).then(data => data);
    let routesFetch = await Fetching.getAllRoutes().then(res => res.json());
    return{
        props:{
            user:userFetch,
            routes:routesFetch.data,
        }
    }
}
  