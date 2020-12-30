import React, { Component } from 'react';
import { render } from 'react-dom';
import useFetch from './_UseFetch';
import './style.css';

function MyComponent() {
  const res = useFetch('https://jsonplaceholder.typicode.com/albums', {});

  if (res.error) return <div>Error: {res.error.message}</div>;
  if (!res.items) return <div>Loading...</div>;
  
  return (
    <div>
      <ul>
        {res.items.map(item => {
          const { id, userId, title } = item;
          <li key={id}>
            <p>Album: {id} user: {userId}</p>
            <p>title: {title} </p>
          </li>
        })}
      </ul>
    </div>
  );
}

render(<MyComponent />, document.getElementById('root'));
