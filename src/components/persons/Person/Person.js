import React from 'react';
//import Radium from 'radium';
 const person = (props) => {
     const style = {
        '@media (min-width: 500px)': {
            width:'450px'
        }
     };
    return (
        
        <div style={style}>
    <p onClick={props.click}> i am {props.name} and i am {props.age} year old </p>
    <p>{props.children}</p>
    
    </div>
  
    )
 };

 export default person;