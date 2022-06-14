import React from 'react';

const style = (dimension) => {
    const dim = dimension + 'px' ;
    const hi = '80vh';
    return {
        width: dim,
        height: hi,
        border: '1px solid #000',
        position: 'relative',
        margin: '25px auto',
        overflow: 'hidden',
        backgroundColor: '#000',
    };
};

export default ({ dimension, children }) => (
    <div style={style(dimension)}>
        {children}
        <div className="footertext">
            <h3>NextJS DODGE GAME</h3>
            <h5>USE ARROW TO SAVE FOOD.</h5>
        </div>
    </div>
)