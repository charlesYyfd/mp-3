import styled from "styled-components";
import StyledMain from "../mains/StyledMain"

const StyledExp = styled.div`
    padding: calc(1vw + 2px);
    font-size: calc(2px+ 2vw);      
    text-align: left;
    justify-content: left;
    
    h3{
        padding: calc(1vw + 2px);
    }
    li{
        font-size: calc(1.5vw + 1vh);
    }
    p{
        font-size: calc(2px + 1vw + 1vh);
    }
    @media screen and (max-width: 750px) {

        justify-content: left;
        h3{
            padding-bottom: calc(0.5vw + 1px + 1vh);
            font-size: calc(1.5vw + 2px + 2vh);
            padding-left: 0;
        }
        ul{
            padding-bottom: calc(6vw + 2px + 1vh);
        }
        li{
            font-size: calc(1px + 1.5vw + 1.5vh);
        }
        p{
            font-size: calc(2px + 1.5vw + 1.5vh);
            padding-bottom: calc(0.5vw + 1px + 1vh);
        }
    }
`;
const StyledItalic = styled.p`
  font-style: italic;
`;

export default function Exp() {
    return(
        <StyledMain id="main-content">
            <title>Experience | Charles Yao Resume</title>
            <h3 id="main-title">Experience</h3>

            <StyledExp id="main">

                <div id="exp_standard">
                    <h3>Guangdong Technology Venture Capital</h3>
                    <StyledItalic> <p> Investment Assistant Intern</p> </StyledItalic>
                    <p>Guangzhou, China · Jul–Aug 2024</p>
                    <ul>
                        <li>Conducted quantitative research and statistical analysis on target companies (financial health, growth indicators, market trends).</li>
                        <li>Compiled findings into structured reports and visual summaries to support team decision-making.</li>
                    </ul>

                    <h3>Galaxy-Yueke Private Equity Fund</h3>
                    <StyledItalic><p> Investment Assistant Intern</p></StyledItalic>
                    <p>Guangzhou, China · Jul–Aug 2023</p>
                    <ul>
                        <li>Contributed data-driven insights and concise documentation for client presentations.</li>
                        <li>Monitored large datasets of stock performance, built trend analyses, and summarized insights for senior staff.</li>
                    </ul>
                </div>
            </StyledExp>
        </StyledMain>
    )
}