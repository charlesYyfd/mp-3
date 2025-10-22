import Home from "./mains/Home.tsx";
import Edu from "./mains/Edu.tsx";
import Proj from "./mains/Proj.tsx";
import Ref from "./mains/Ref.tsx";
import Exp from "./mains/Exp.tsx";
import Certs from "./mains/Certs.tsx";
import Nav from "./Nav.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router-dom"
import styled from "styled-components";
const Container = styled.div`
    width: 80vw;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0;  
    box-sizing: border-box;

    @media screen and (max-width: 750px) {
        flex-direction: column;  /* stack Nav on top of Main */
        width: 100vw;
        align-items: center;     /* center contents horizontally */
        justify-content: center;
        padding: 0;
    }
`;

const MainContainer = styled.main`
    width: 70%;
    box-sizing: border-box;
    
    @media screen and (max-width: 750px) {
        width: 100%; /* make the main thick */
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
export default function Root(){
    return (
        <>
        <Header/>
        <Container>
        <Nav/>
            <MainContainer>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/Edu`} element={<Edu/>}/>
                    <Route path={`/Ref`} element={<Ref/>}/>
                    <Route path={`/Exp`} element={<Exp/>}/>
                    <Route path={`/Certs`} element={<Certs/>}/>
                    <Route path={`/Proj`} element={<Proj/>}/>
                </Routes>
            </MainContainer>
        </Container>
        <Footer/>
        </>
    )
} /* many styling should be in rooter*/
/* ones inside the Routes are conditionally rendered, outside are static ones*/