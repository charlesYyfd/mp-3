import styled from "styled-components";

const StyledMain = styled.main`
    font-size: calc(1vw + 1vh);
    font-family: Helvetica, Arial, Verdana, sans-serif;
    
    width: 56vw;
    height: 90vh;
    background-color: lightblue;
    margin: 0;
    padding: 0;
    /*height: auto; /* auto to prevent white screen background*/
    text-align: left;
    
    @media screen and (max-width: 750px) {
        height: 120vh; /* phone view would require a longer view*/
        width: 85%;
        text-align: left;
        gap: 2vh;
        
        #main-title {
            text-align: center;
        }
    }
`;

export default StyledMain;