import Paragraph from "./Paragraph.tsx";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.tsx";
import styled from "styled-components";
import type {ThemeTypes} from "../types.ts";

const StyledDiv=styled.div<{theme:ThemeTypes}>`
    width: 80vw;
    margin: ${(props)=>props.theme.margin};
    background-color: ${(props)=>props.theme.backgroundColor};
`;

export default function Div(){

    const themeContext = useContext(ThemeContext);

    return(
        <StyledDiv theme={themeContext!}>
            <Paragraph/>
        </StyledDiv>
    )
}