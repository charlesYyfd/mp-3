import styled from "styled-components";

const StyledHeader = styled.header`
    margin: 0 auto;
    background-color: dodgerblue;
	text-align: left;
	font-family: Helvetica, Arial, Verdana, sans-serif;
	font-size: calc(2px + 2vw);
	font-weight: bold;
    
    width: 80%;
    
	@media screen and (max-width: 750px) {
		text-align: center;
        width: 85%;
	}
`;

export default function Header() {
    return(
        <StyledHeader>
            <h1>Charles' Resume</h1>
            <p>A website showcasing Charles' accomplishments</p>
        </StyledHeader>
    )
}