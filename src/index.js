import React from 'react';
import ReactDOM from 'react-dom';

// const el = React.createElement(
//   'h1',
//   null,
//   'Hello World'
// );

// const el = <h1>Hello World</h1>;
// Маленький (мало свойств) легковесный объект
// Исп. в VirtualDOM. Поэтому React работает так быстро
// console.log(el);

const el = (
  <div>
    <h1>
      My Todo List
    </h1>
    <input type="text" placeholder="search"/>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

ReactDOM.render(
  el,
  document.getElementById('root')
);
