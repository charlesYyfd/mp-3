import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: lightyellow;
    width: 30%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 90vh;

ul{
    padding-top: 1vw;
    padding-left: 0;
    list-style: none;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;/*make the nav center*/
}

li{
    margin-top: 1vh; /*margin between the nav elements */
    width: calc(7vh + 15vw);
    height: calc(10vh);
}

a{
    text-decoration: none; /*text stuff from class */
    font-family: Helvetica, arial, verdana, sans-serif;
    font-size: calc(1vw + 1vh); /* calc(+) ??*/
    font-weight: bold;
    color: sandybrown;

    display: block;  /*block if not they would stick together*/
    width: 100%;
    text-align: center;
    padding: 6px 20px;
    border: 2px solid darkgreen;
    background: mediumturquoise;   /* button fill */
}

    @media screen and (max-width: 750px) {
        width: 85%;
        height: calc(30px + 3vh);
        padding:0;
        margin: 0;

    ul{
        padding-top:0;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    li{

        border: none; /*delete rectangle boarders in phone view */
        justify-content: center;
        width: auto;
    }

    a {
        padding: 1vw; /*make nav smaller on phone */
        border-radius: 30%; /*circle*/
        font-size: calc(1px + 2vw); 
    }


`;
export default function Nav(){
    return (
        <StyledNav id="main">
        <nav>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/Edu`}>Education</Link></li>
                <li><Link to={`/Exp`}>Experience</Link></li>
                <li><Link to={`/Certs`}>Certifications</Link></li>
                <li><Link to={`/Ref`}>References</Link></li>
                <li><Link to={`/Proj`}>Projects</Link></li>
            </ul>
        </nav>
        </StyledNav>
    )
}