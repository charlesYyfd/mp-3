import styled from "styled-components";
import StyledMain from "../mains/StyledMain";
import Calculator from "../mains/Calculator";
const StyledProj = styled.div`
    padding: 2vh 2vw;
    li{
        font-size: calc(2px + 1.5vw)
    }
    ul{
        padding-bottom: 2vw;
    }
    h3{
        padding-top: calc(1vh)
        font-size: calc(2px + 2vw);
    }

    @media screen and (max-width: 750px) {
        align-items: center;
        li{
            font-size: calc(3px + 2vw)
        }
        h3{
            padding-top: calc(1vh);
            padding-bottom: calc(1vh);
        }
        ul{
            padding-bottom: calc(10vh);
            padding-top: calc(1vh)
        }
    }
`;

export default function Proj() {
    return(
        <StyledMain id="main-content">
            <title>Projects | Charles Yao Resume</title>
            <h3 id="main-title">Project</h3>

            <StyledProj id="main">
                <div id="projects_school">
                    <h3>Computational Simulation of Chaotic Systems</h3>
                    <ul>
                        <li>Simulated Lorenz, Duffing, van der Pol, and pendulum systems with ODE solvers.</li>
                        <li>Generated plots to study sensitivity, stability, and chaotic transitions; summarized findings with visuals and notes.</li>
                    </ul>

                    <h3>Modeling Diffusion Processes with Crank–Nicolson</h3>
                    <ul>
                        <li>Implemented 1D diffusion with zero-flux boundary conditions in Python.</li>
                        <li>Used sparse matrix solvers and trapezoidal integration to track front propagation.</li>
                    </ul>
                </div>
                <h3>Calculator</h3>
                <Calculator/>

            </StyledProj>
        </StyledMain>
    )
}