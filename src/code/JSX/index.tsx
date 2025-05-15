
// const element = (
//     <div className="container">
//         <h1>Hello, React!</h1>
//         <button onClick={() => alert('Clicked!')}>Click</button>
//     </div>
// )
// export default element

import React from "react";

const element = React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, 'Hello, React!'),
    React.createElement(
        'button',
        { onClick: () => alert('Clicked!') },
        'Click'
    )
);

export default element;