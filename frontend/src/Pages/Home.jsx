import React from 'react';
import Navbar from '../Components/Navbar';
import IndiaMap from '../Components/IndiaMap';
import styled from 'styled-components';

const India = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-self: center;
    height: 85vh;
`
const Home = () => {
    return (
        <div>
            <Navbar />
            <India>
                <IndiaMap />
            </India>
        </div>
    );
}

export default Home;
