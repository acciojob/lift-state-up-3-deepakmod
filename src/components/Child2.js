import React from 'react';

function Child2({getShowModal}){

    return(
        <div className='child2'>
            <h2>Child Component 2</h2>
            <button onClick={ ()=>{ getShowModal("Option 2") } } >Option 2</button>
        </div>
    )
}

export default Child2;