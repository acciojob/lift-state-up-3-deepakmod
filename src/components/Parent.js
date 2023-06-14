import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

function Parent(){
    const [showModal , setShowModal ] = useState("");

    return(
        <div className='parent'>
            <h1>Parent Component</h1>
            <Child1 getShowModal={setShowModal} />
            <Child2 getShowModal={setShowModal} />
            <p>Selected Option: {showModal}</p>
        </div>
    )
}

export default Parent;