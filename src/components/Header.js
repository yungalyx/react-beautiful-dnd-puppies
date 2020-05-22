import React from 'react';
import styled from 'styled-components'

const Title = styled.h2`
    color: #E85A4F;
    font-size: 50px;
    text-align: center;

`;

export default class Header extends React.Component {
    render() {
        return (
            <header className='App-Header'>
                <Title> <span> {'\u{1F436}'} </span>A list of Good Boys {this.props.title} <span>{'\u{1F415}'}</span> </Title>
            </header>
        );
    }
}

