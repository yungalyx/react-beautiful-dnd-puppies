import React from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
  margin-bottom: 8px;
  height: 42px;
  background-color: #E85A4F;
  &:hover {
   background-color: #E98074;
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
              <div style={{ float: 'left', textAlign:'center', height: '20px', width: '20px', border: 'solid white 1px', color: 'white', padding: '5px', margin: '5px'}}>
                {props.index+1}
              </div>
              <div style ={{ float: 'left', color: 'white', padding: '5px', margin: '5px', }}>
                {props.name.toUpperCase()} 
              </div>
          </Container>
        )}
      </Draggable>
    );
}

export default PuppyNametag;