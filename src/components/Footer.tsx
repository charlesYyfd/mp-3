import styled from "styled-components";
const StyledFooter = styled.footer`
    font-size: calc(2px + 2vw);
    font-family: Helvetica, Arial, Verdana, sans-serif;
    margin: 0 auto;
    width:80%;
    background-color: dodgerblue;
    /*height: auto; /* auto to prevent white screen background*/
    text-align: center;
    padding: 0;

    @media screen and (max-width: 750px) {
        /*height: 150vh; /* phone view would require a longer view*/
        width: 85%;  /*footer &header @85% to remain consistant with the wrapper*/
    }
    `;

export default function Footer() {
    return(
        <StyledFooter>
            <p>All Rights Reserved by Charles Yao <a href="">Credits</a> &#169;</p>
        </StyledFooter>
    )
}