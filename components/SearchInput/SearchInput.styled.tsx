import styled from "styled-components";


export const SearchContainer = styled.div`
    width:100%;
    max-width: 430px;
    height:40px;
    overflow: hidden;
    border-radius: 5px;
    border:2px solid #4f4f4f8a;
    display: flex;
    align-items: center;
    padding:0px 10px;
    position: relative;

    &:focus{
        
    }
`

export const SearchIcon = styled.svg`
    fill: #4f4f4f8a;
    z-index: 2;
    position: absolute;
    left:10px;
    top:50%;
    transform: translateY(-50%);
    cursor: pointer;
`

export const SearchInputField = styled.input`
    width:100%; 
    height:100%;
    position:absolute;
    top:0px;
    left:0px;
    background-color:white;

    outline: none;
    border:0px;
    padding:0px 15px;
    padding-left:45px;
`