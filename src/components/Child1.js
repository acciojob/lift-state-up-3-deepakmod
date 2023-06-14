import React from 'react';

function Child1({getShowModal}){

    return(
        <div className='child1'>
            <h2>Child Component 1</h2>
            <button onClick={ ()=>{ getShowModal("Option 1") } } >Option 1</button>
        </div>
    )
}

export default Child1;