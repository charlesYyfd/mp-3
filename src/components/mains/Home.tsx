import styled from "styled-components";
import img from "../../assets/img.png";
import StyledMain from "../mains/StyledMain"


const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1vh;
    padding: 1vw;
    img {
        max-width: 40%;
        margin-top: 0;
        padding-left: 10%;
        box-sizing: border-box;
    }
    p{
        padding-top: 2vw;
        padding-bottom: 1vw;
        font-size: calc(2px + 2vw);
    }
        
    @media screen and (max-width: 750px) {
        align-items: center;
        img {
            max-width: 50%;  //fix problem from mp1
            padding-top: 4vw;
            padding-left: 0;
        }
        p{
            padding-top: 2vw;
            padding-bottom: 2vw;
            padding-left: 2vw;
            font-size: calc(2px + 3vw);
        }
    }
`;

export default function Home() {
    return (
        <StyledMain id="main-content">
            <title>Home | Charles Yao Resume</title>
            <h3 id="main-title">Home</h3>

            <StyledHome id="main">
                <img src={img} alt="Charles Yao Profile" />
                <p>
                    Welcome to my online resume! I’m <b>Charles Yao</b>, a Physics &
                    Computer Science major at Boston University, expected to graduate in
                    2026.
                </p>

                <p>
                    I’m experienced in Python, C, HTML, JS, and CSS. Beyond coding, I love
                    exploring the physics behind natural systems and uncovering hidden
                    patterns in nature.
                </p>


            </StyledHome>
        </StyledMain>
    );
}