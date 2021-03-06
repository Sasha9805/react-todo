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

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>
};

const SearchPanel = () => {
  return <input type="text" placeholder="search"/>
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
