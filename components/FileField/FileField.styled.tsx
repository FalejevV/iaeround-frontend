import styled, { css } from "styled-components";
import { IToggle } from "../../interface";


export const FFContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
    width:150px;
`

export const FFLabel = styled.label`
    font-size: 20px;
    font-weight: 500;
    cursor:pointer;
    position: relative;
`

export const FFInput = styled.input`
    display: none;
`


export const FFImage = styled.img<IToggle>`
    width:120px;
    height:80px;
    padding:20px;
    background-color: #dddddd;
    border-radius: 5px;
    transition: all 0.3s;

    &:hover{
        filter:brightness(1.1);
    }

    ${({ toggle }) => toggle && css`
        background-color: #9501017a;
    `}

    ${({ success }) => success && css`
        background-color: #01950692;
    `}
    
`

export const AlertText = styled.p`
    color:#9f0000;
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    width:100%;
`

export const FilePreviewContainer = styled.div<IToggle>`
    width:100%;
    display: flex;
    overflow-y:hidden;
    overflow-x: scroll;
    scrollbar-width: thin;
    align-items: center;
    ${({toggle}) => !toggle && css`
        justify-content: center;
        overflow:hidden;
    `}
    @media(max-width:600px){
        width:70vw;
    }
`

export const PreviewImages = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`

export const PreviewImage = styled.img`
    width:100px;
    height:100px;
    object-fit: cover;
    border:2px solid ${({ theme }) => theme.accentColor};
    border-radius:5px;
`

export const SmallText = styled.p`
    position: absolute;
    left:calc(100% + 10px);
    top:0px;
    font-size: 14px;
    font-weight: 400;
    color:#606060;
    white-space: nowrap;

`