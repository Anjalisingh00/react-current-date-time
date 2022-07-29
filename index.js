import React from 'react';
import ReactDom from 'react-dom';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
ReactDom.render(
  <>
 <h1> Hello, My Name is Anjali Singh  </h1>
 <p>current date is={currDate}  </p>
 <p>current time is={currTime}</p>
  </>,
  document.getElementById("root")

 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

