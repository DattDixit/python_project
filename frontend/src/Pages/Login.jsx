import React from 'react';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
const Wrapper = styled.div`

    display: flex;
    margin: 10vh 32vw;
    background-color: lightgreen;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
    width: 36vw;
    height: 50vh;
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
    padding: 1em 1em;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #ccc;
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
const Login = () => {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
            <h2>Sign In</h2>
                <Input type='email' placeholder='Enter Your Email'/>
                <Input type='password' placeholder='Enter Your Password'/>
                <Button>Sign In</Button>
                <p>Create an Account? <Link to={'/register'}>Register</Link></p>
            </Wrapper>
        </Container>
    );
}

export default Login;
