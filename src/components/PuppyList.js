import React from 'react';
import PuppyNametag from './PuppyNametag'
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;

const Tasklist = styled.div`
    padding: 8px;
`;

export default class PuppyList extends React.Component{
    render() {
        return (
            <Container>
                <h2> {this.props.header} </h2>
                <Droppable droppableId={this.props.header}>
                    {provided => (
                         <Tasklist 
                         {...provided.droppableProps}
                         ref={provided.innerRef}
                         >
                             {this.props.puppies.map((v, index) => <PuppyNametag key={v.id} uniqueid={v.id} name={v.name} index={index} /> ) }
                             {provided.placeholder}
                       </Tasklist> 
                    )}
                </Droppable>
            </Container>
        );
    } 
}

// {Object.entries(this.props.puppies).map(([k, v]) => (<PuppyNametag name={v} id={k} key={k}/>))}