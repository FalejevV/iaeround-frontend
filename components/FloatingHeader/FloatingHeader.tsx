import { useEffect, useState } from "react";
import Header from "../Header/Header";
import SortTagsBar from "../SortTagsBar/SortTagsBar";
import { FloatingHeaderContainer } from "./FloatingHeader.styled";


function FloatingHeader(){
    const [toggle,setToggle] = useState<boolean>(false);
    const [pageOffset, setPageOffset] = useState(0);
    const [headerHidden, setHeaderHidden] = useState(false);

    useEffect(() => {
        console.log(window.scrollY);
        document.addEventListener('scroll', (e) => {
            if(window.scrollY>200){
                setToggle(true);
            }else{
                setToggle(false);
            }
            if(pageOffset < window.pageYOffset && window.pageYOffset > 100 && pageOffset > 50){
                if(!headerHidden && pageOffset + 150 < window.pageYOffset){
                    setHeaderHidden(true);
                    setPageOffset(window.pageYOffset);
                }
                return;
            }

            if(pageOffset > window.pageYOffset){
                if(headerHidden && (pageOffset - 150) > window.pageYOffset){
                    setHeaderHidden(false);
                    setPageOffset(window.pageYOffset);
                }
                return;
            }else{
                setPageOffset(window.pageYOffset);
            }
        });


        return(() =>{
            document.removeEventListener('scroll', (e) => {
                setPageOffset(window.pageYOffset);
            });
        })
    },[headerHidden,pageOffset]);

    return(
        <FloatingHeaderContainer onMouseEnter={() => {setHeaderHidden(false)}} onMouseLeave={() => {setHeaderHidden(true)}} toggle={toggle} selected={toggle && !headerHidden}>
            <Header/>
            <SortTagsBar />
        </FloatingHeaderContainer>
    )
}

export default FloatingHeader;