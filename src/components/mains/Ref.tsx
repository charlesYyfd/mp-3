import styled from "styled-components";
import StyledMain from "../mains/StyledMain"
import n_img from "../../assets/nothing.png";

const StyledRef = styled.div`
    padding: 2vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    li{
        font-size: calc(1vw + 0.7vh + 2px);
    }
    p{
        padding-top: calc(2vw);
        font-size: calc(2px + 1.5vw);
    }
    h3{
        font-size: calc(2px + 1vw + 1vh);
    }
    
    text-align: left;
    img {
        max-width: 50%;  //fix problem from mp1
        padding-top: 4vh;
        padding-left: 10%;
    }
    @media screen and (max-width: 750px) {
        padding-left: 0;
        align-items: center;
        p{
            padding-left: 8vw;
            font-size: calc(2px + 4vw);
        }
        ul{
            padding-bottom: calc(1px + 0.5vw);
        }
        li{
            font-size: calc(2px + 1.5vw + 0.5vh);
        }
        p{
            font-size: calc(4px + 1vw + 1vh);
            padding-left: calc(2px + 0.5vw);
        }
        h3{
            font-size: calc(2px + 1vw + 1vh);
        }
        img {
            max-width: 55%;  //fix problem from mp1
            padding-top: 4vh;
            padding-left: 0;
        }
    }
`;

export default function Ref() {
    return(
        <StyledMain id="main-content">
            <title>References | Charles Yao Resume</title>
            <h3 id="main-title">References</h3>

            <StyledRef id="main">
                <ul>
                    <li>Planned graduation: Jan 2026 (Boston University)</li>
                    <li>High School: Guangdong Experimental School, 2022</li>
                    <li>Img below: https://www.reddit.com/r/comics/comments/o3r8gk/nothing/</li>
                </ul>
                <img src={n_img} alt="Fun_Image" />
                <div id="ref_words"><p>Since this resume is written by me, there are not much to reference for this Web
                    version project.</p>
                    <p>So a random image could reflect what you might feel for this page for the moment.</p></div>


            </StyledRef>
        </StyledMain>


    )
}