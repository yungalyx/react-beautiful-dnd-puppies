import React from 'react';
import styled from 'styled-components'

const Title = styled.h2`
    color: palevioletred;
    font-size: 50px;
    text-align: center;

`;

export default class Header extends React.Component {
    render() {
        return (
            <header className='App-Header'>
                <Title> A list of Good Boys {this.props.title} </Title>
            </header>
        );
    }
}

