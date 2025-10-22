import { useState } from "react";
import styled from "styled-components";
import useColorChanger from "./useColorChanger";

const CalcWrap = styled.section`
  background: lightgreen;
  text-align: center;
  display: grid;
`;
const StyledRow = styled.div`
  display: flex;
  gap: 2vh; 
  justify-content: center;
`;

const StyledButton = styled.button`
  font-size: calc(3px + 2vw);
  border: 2px solid darkgreen;
  background: mediumturquoise;
  color: sandybrown;
`;

const StyledOutput = styled.p`
  margin: 0;  
  font-size: calc(6px + 2vw);
`;

export default function Calculator() {
    const [one, setOne] = useState(""); // input
    const [two, setTwo] = useState("");

    const [outText, setOutText] = useState("");
    const [outColor, setOutColor] = useState("black"); // custom color hook

    const Color= useColorChanger();
    function doAdd() {
        const result = Number(one) + Number(two); //mp1
        const { text, color } = Color(result);
        setOutText(text);
        setOutColor(color);
    }

    function doSub() {
        const result = Number(one) - Number(two);
        const { text, color } = Color(result);
        setOutText(text);
        setOutColor(color);
    }

    function doMult() {
        const result = Number(one) * Number(two);
        const { text, color } = Color(result);
        setOutText(text);
        setOutColor(color);
    }

    function doDiv() {
        const divisor = Number(two);
        if (divisor === 0) {
            const { text, color } = Color("Error: divide by zero");
            setOutText(text);
            setOutColor(color);
        } else {
            const result = Number(one) / divisor;
            const { text, color } = Color(result);
            setOutText(text);
            setOutColor(color);
        }
    }

    function doPower() {
        const base = Number(one);
        const exp = Number(two);
        let result = 1;

        if (exp === 0) result = 1;
        else if (exp < 0) {
            for (let i = 0; i < Math.abs(exp); i++) {
                result *= base;
                result = 1 / result;
            }
        } else {
            for (let i = 0; i < exp; i++) {
                result *= base;
                }
        }
        const { text, color } = Color(result);
        setOutText(text);
        setOutColor(color);
    }

    function doClear() {
        setOne("");
        setTwo("");
        setOutText("");
        setOutColor("black");
    }

    return (
        <CalcWrap>
            <StyledRow>
                <p>Input Number 1:</p>
                <input value={one} onChange={(e) => setOne(e.target.value)}/>
            </StyledRow>
            <StyledRow>
                <p>Input Number 2:</p>
                <input value={two} onChange={(e) => setTwo(e.target.value)}/>
            </StyledRow>
            <StyledRow>
                <StyledButton onClick={doAdd}>+</StyledButton>
                <StyledButton onClick={doSub}>-</StyledButton>
                <StyledButton onClick={doMult}>*</StyledButton>
                <StyledButton onClick={doDiv}>/</StyledButton>
                <StyledButton onClick={doPower}>**</StyledButton>
                <StyledButton onClick={doClear}>Clear</StyledButton>
            </StyledRow>
            <StyledOutput style={{ color: outColor }}>{outText}</StyledOutput>
        </CalcWrap>
    );
}
