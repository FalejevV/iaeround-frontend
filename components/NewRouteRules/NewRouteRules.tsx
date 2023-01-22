import Link from "next/link";
import { NRRImage, NRRImageContainer, NRRImageTitle, NRRulesBackgroundFill, NRRulesButton, NRRulesButtonText, NRRulesContainer, NRRulesList, NRRulesText, NRRulesTitle } from "./NewRouteRules.styled";
import { useEffect, useState } from "react";



function NewRouteRules(){
    const [count,setCount] = useState(0);
    

    function countIncrement(){
        setCount(prevCount => {
            if(prevCount < 5){
                return prevCount + 1;
            }else{
                return prevCount;
            }
        })
    }

    useEffect(() => {
        if(count >= 4){

        }
    },[count]);

    return(
        <>
            {count < 4 && 
            <NRRulesBackgroundFill>
                <NRRulesContainer>
                    <NRRulesTitle>Route upload rules</NRRulesTitle>
                    <NRRulesList>
                        <NRRulesText>
                            1. Please fill appropriate route info, and upload images only related to that route.
                        </NRRulesText>
                        
                        <NRRulesText>
                            2. You need to provide a map image that displays an entire route.
                            <br></br>(Phone screenshot from <Link href="https://play.google.com/store/apps/details?id=com.ilyabogdanovich.geotracker&hl=en_US&gl=US">route tracking app</Link>/<Link href="https://www.gpsvisualizer.com/draw/">draw online</Link>)
                            <br></br>Drop it in &quot;Images&quot; upload.
                        </NRRulesText>
                        
                        <NRRImageContainer>
                            <NRRImageTitle>(Example image)</NRRImageTitle>
                            <NRRImage width="500" height="400" alt="example" src="/img/ImageExample.png"/>
                        </NRRImageContainer>
                    </NRRulesList>
                    <NRRulesButton onClick={countIncrement} count={count}><NRRulesButtonText>Got it!</NRRulesButtonText></NRRulesButton>
                </NRRulesContainer>
            </NRRulesBackgroundFill>
            }
        </>
    )
}

export default NewRouteRules;