import StyledMain from "../mains/StyledMain"
import styled from "styled-components";

const StyledEdu = styled.div`
    padding-left: 2vw;
    li{
        font-size: calc(1vw + 0.7vh);
    } 
    p{
        font-size: calc(0px + 1vw + 0.5vh);
        padding-top: 1vw
    }
    h3{
        font-size: calc(2px + 1vw + 1vh);
    }

    
    @media screen and (max-width: 750px) {
        ul{
            padding-bottom: calc(1px + 1vw);
        }
        li{
            font-size: calc(2px + 1.5vw + 0.5vh);
        }
        p{
            font-size: calc(4px + 1vw + 1vh);
            padding-bottom: 0.5vw;
        }
        h3{
            font-size: calc(2px + 2vw + 1vh);
        }
    }
`;

const StyledSchool = styled.div`
    padding-top: calc(1vw);
    padding-bottom: calc(1vw);
`;


export default function Edu() {
    return (
        <StyledMain id="main-content">
            <title>Education | Charles Yao Resume</title>
            <h3 id="main-title">Education</h3>

            <StyledEdu id="main">
                <StyledSchool id="edu_school">
                    <h3>Boston University, College of Arts & Sciences</h3>
                    <h3><strong>B.S. in Physics & Computer Science, Minor in Economics </strong></h3>
                    <p>Expected Jan 2026</p>
                </StyledSchool>

                    <p>Physics Coursework</p>
                    <ul>
                        <li>Computational Physics, Quantum Computing, Statistical Mechanics</li>
                        <li>Mechanics, Electromagnetism, Methods of Theoretical Physics</li>
                    </ul>
                    <p>Math Coursework</p>
                    <ul>
                        <li>Multivariable Calculus, Linear Algebra, Statistics</li>
                        <li>Abstract Math, Calculus I, Calculus II</li>
                    </ul>
                    <p>Computer Science Coursework</p>
                    <ul>
                        <li>Computer System, Intro Algorithm Analysis, Probability in Computer Science</li>
                        <li>Intro to Computer Science I, Intro to Computer Science II, Combinatoric Structures</li>
                    </ul>
                    <p>Economics Coursework</p>
                    <ul>
                        <li>Empirical Economics I, Empirical Economics II, Environment Economics</li>
                        <li>Economics I, Economics II, Intermed Micro Economics, Intermed Macro Economics</li>
                    </ul>


                    <p>Programming language</p>
                    <ul>
                        <li>Python (proficient), C (familiar), R (familiar), Java (familiar), Assembly (familiar), Html(familiar), Css(familiar), JavaScript(familiar)</li>
                    </ul>

            </StyledEdu>
        </StyledMain>
    )
}
