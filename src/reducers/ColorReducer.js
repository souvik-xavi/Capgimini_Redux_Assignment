import React from 'react';

function ColorReducer(data="",action) {
    console.log("Inside Reducer")
    switch(action.type){
   case 'SET_COLOR':
       console.log("previous favourite "+ data);
       data=action.color;
       console.log("current favourite "+ data);
       return data;
    
    default:
        return data
    }
}

export default ColorReducer;