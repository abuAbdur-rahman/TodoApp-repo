import styled from "styled-components"

const Wrapper = styled.form`
    background-color:lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 900;
    user-select: none;

    input{
        display: block;
        width: 300px;
        margin: 10px 0;
        padding: 8px;
        border-radius: 10px;
        outline: none;
        border: none;
        font-weight: 700;
        user-select: none;
        cursor: pointer;
        box-shadow: 2px 2px 4px black;
    }
    .checkbox{
        width: auto;
        display: inline;
    }
    .label{
        cursor: pointer;
    }

    button{
        width: 100px;
        margin: 10px 0; 
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