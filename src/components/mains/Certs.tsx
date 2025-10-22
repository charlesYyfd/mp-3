import styled from "styled-components";
import StyledMain from "../mains/StyledMain";
import v_img from "../../assets/view.png";


const StyledCerts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2vh;
    h3{
        padding: calc(2vw + 2px);
    }
    li{
        font-size: calc(2px + 1.2vw + 1.2vh);
    }
    p{
        padding-left: calc(2vw + 2px);
        padding-top: calc(2vw + 2px);
        font-size: calc(2px + 1vw + 1vh);
    }

    img {
        max-width: 40%;  //fix problem from mp1
        padding-top: 2vw;
        padding-left: 10%;
        padding-bottom: calc(1.5vw + 0px);
    }

    @media screen and (max-width: 750px) {
        align-items: center;
        p{
            padding-top: calc(1vw + 0px);
            font-size: calc(2px + 1.5vw + 1.5vh);
        }
        li{
            font-size: calc(2px + 1.5vw + 1.5vh);
        }
        img {
            max-width: 55%;  //fix problem from mp1
            padding-top: 2vw;
            padding-left: 10%;
            padding-bottom: calc(2vw + 2px);
        }
    }
`;

export default function Certs() {
    return(
        <StyledMain id="main-content">
            <title>Certifications | Charles Yao Resume</title>
            <h3 id="main-title">Certification</h3>

            <StyledCerts id="main">

                <ul>
                    <li>IBM Data Science Professional Certificate (Coursera) — In Progress, expected 2026</li>
                </ul>
                <div id="certs_pics">
                    <img src={v_img} alt="Charles Yao Profile" />
                    <p>- Although as you could see there isn't much completed yet, which feels like the endless ocean
                        picture I have taken, this is because I have been having my focus on classes,
                        and haven't really understand how to appreciate the value of certifications yet :)</p>
                </div>
            </StyledCerts>
        </StyledMain>
    )
}