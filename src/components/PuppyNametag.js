import React from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: green;
  &:hover {
   background-color: yellow;
 }
`;

const PuppyNametag = (props) => {
    console.log("PROPS: " + props.uniqueid)
    return (
      <Draggable draggableId={props.name} index={props.index}>
        {(provided, snapshot)=> (
          <Container 
            {...provided.draggableProps}
            {...provided.dragHandleProps} 
            {...provided.innerRed}
            ref={provided.innerRef}
            >
              <div style={{ float: 'left'}}>
                {props.index}
              </div>
              <div style ={{ float: 'right'}}>
                {props.name.toUpperCase()} 
              </div>
          </Container>
        )}
      </Draggable>
    );
}

export default PuppyNametag;