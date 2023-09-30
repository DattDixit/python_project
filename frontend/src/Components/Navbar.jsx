import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    background-color: black;
    color: white;
    height:60px;
    padding-bottom:10px;
`

const Wrapper = styled.div`
    padding : 20px;
    display:flex;
    justify-content : space-between;
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: center;
    
`

const Center = styled.div`
flex:1;
text-align: center;
`;

const Right = styled.div`
flex:1;
display: flex;
align-items:center; 
justify-content: flex-end;
`;

const LeftBox = styled.div`
    font-size: 18px;
    font-weight: 500;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const MenuItem = styled.div`
    width: 120px;
    font-size: 14px;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LeftBox>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>
                            Home
                        </Link>
                    </LeftBox>
                    <LeftBox>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/predict'}>
                            Prediction Page
                        </Link>
                    </LeftBox>
                    <LeftBox>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/about'}>
                            About Us
                        </Link>
                    </LeftBox>
                </Left>
                <Center>
                </Center>
                <Right>
                    <MenuItem>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/register'}>
                            REGISTER
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/login'}>
                            SIGN IN
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
