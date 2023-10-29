import styled from "styled-components"

const HeadStyle = styled.nav`
background-color: navy;
color:white;
display:flex;
flex-direction: column;


ul{
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-evenly ;

    li {
    display:inline-flex;
    list-style: none;
    width:33.33%;
    align-items:center;
    justify-content:center;
    h1{
        text-shadow: 2px 2px 1px black, 3px 3px 2px #ccc
    }
    }

    img{
        width:80px;
        cursor:pointer;
    }
    button{
        width:100px;
        background-color:black;
        color:#fff;
        border:none;
        box-shadow: 1px 1px 5px #ccc;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
    }
    button:hover{
            background-color:#eee;
            color:black;
            transition: all .2s ease
    }
}

`

export default HeadStyle;