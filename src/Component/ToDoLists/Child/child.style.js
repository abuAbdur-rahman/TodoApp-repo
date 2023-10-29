import styled from "styled-components";

const Wrapper = styled.div`
    background-color: coral;
    color: white;
    padding: 10px;
    border-radius: 10px;    
    box-shadow: 2px 2px 3px black;
    margin-bottom: 5px;
    border: 1px solid black;
    cursor: pointer;
    user-select: none;
    h3{
        font-family: Arial, Helvetica, sans-serif;
        text-shadow: 2px 2px 3px black;
        display: inline-block;
        padding-bottom: 5px;
        border-bottom: 1px solid black;
        cursor: pointer;
    }
    p {
        font-size: .75rem;
        font-style: italic;
        color: black;
        font-weight: 900;
        cursor: auto
    }
    button{
        width: 100px;
        margin: 10px 0 0 150px; 
        padding: 8px;
        box-shadow: 2px 2px 4px black;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    button:hover{
            background-color: #333;
            color: white;
            transition:all .3s ease-in-out;
        }
`
export default Wrapper;
