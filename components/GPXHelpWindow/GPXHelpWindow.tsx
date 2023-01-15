import Link from "next/link";
import { DownloadButton, DownloadContainer, DownloadSVG } from "../../styles/route.styled";
import { GPXCloseButton, GPXHContainer, GPXHTitle, GPXHWindowWrapper, GPXDownloadStepContainer, GPXStepText, GPXHImagesContainer, GPXHImage, GPXHImageTitle } from "./GPXHelpWindow.styled";



function GPXHelpWindow(props:{
    setToggle:Function,
    downloadLink:string,
}){

    function clickHandler(e:React.MouseEvent){
        let target = e.target as HTMLElement;
        if(target.localName !== "div"){
            return;
        }
        if(target.className.includes("Wrapper")){
            props.setToggle(false);
        }
    }
    return(
        <GPXHWindowWrapper onClick={(e) => clickHandler(e)}>
            <GPXHContainer>
                <GPXCloseButton onClick={() => props.setToggle(false)} viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                </GPXCloseButton>
                <GPXHTitle>How to use GPX?</GPXHTitle>
                <GPXDownloadStepContainer>
                    <GPXStepText>
                        1. Download selected GPX route.
                    </GPXStepText> 
                    <DownloadContainer>
                        <DownloadButton href={props.downloadLink} download>
                            <DownloadSVG viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"/>
                            </DownloadSVG>
                            Download GPX
                        </DownloadButton>
                    </DownloadContainer>
                </GPXDownloadStepContainer>

                <GPXStepText>
                2. Upload file to website or mobile app to preview.
                </GPXStepText> 
                <GPXHImagesContainer>
                    <Link href="https://www.gpsvisualizer.com/" target="_blank">
                        <GPXHImageTitle>(Click to open website)</GPXHImageTitle>
                        <GPXHImage src="/img/webgpx.png"/>
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.vecturagames.android.app.gpxviewer&hl=en_US&gl=US" target="_blank">
                        <GPXHImageTitle>(Click to open app page)</GPXHImageTitle>
                        <GPXHImage src="/img/mobilegpx.png"/>
                    </Link>
                </GPXHImagesContainer>
            </GPXHContainer>
        </GPXHWindowWrapper>
    )
}

export default GPXHelpWindow;