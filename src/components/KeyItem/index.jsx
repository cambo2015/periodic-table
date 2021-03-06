import React from 'react';


const KeyItem = ({name,color}) => {
    return (
      
        <h6>
          <span className={`badge bg-${color} small-text rounded-pill`}>{name}</span>
        </h6>
      
    );
}
 
export default KeyItem;