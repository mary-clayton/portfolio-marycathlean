import React from 'react';
import styled from 'styled-components';

const navBar = styled.nav `
display: flex;
`

const Home = () => {
    return (
        <div>
            <navBar>
                <a href="#home">Home</a>
            </navBar>
        </div>
    )
}

export default Home;
