import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 20vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 280px;
    font-weight: 500;
    font-size: 14px;
    height: 40px;
    border-radius: 10px;
    padding-left: 10px;
    border: 1px solid black;
    outline: none;
    margin: 20px 0;
    &:focus{
        border-bottom: 1px solid #6941c6;
        -webkit-transition: 0.1s;
        transition: 0.5s;
    }

`

const Button = styled.button`
    width: 300px;
    padding: 1.3em 1em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #bbb;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    &:hover{
        background-color: #23c483;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    &:active{
        transform: translateY(-1px);
    }
`

const Prediction = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Input placeholder='Enter Location to Predict Weather' />
                <Button>Predict</Button>
            </Wrapper>

        </Container>
    );
}

export default Prediction;
