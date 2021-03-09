import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 

//redux쓰기 
//1. redux설치 후 index파일에 provider import
//2. provider로 app 감싸기
//3. createStore안에 state저장
//4. provider에 props전송
//5. cart.js가서 state사용하기 ->export default 셋팅
//6. 쓰는곳에서 props로 받기 


let 초기값 = [
  { id : 0, name : '멋진신발', quan : 1},
  { id : 1, name : '멋진신발2', quan : 1}
];
//reducer는 항상 state를 뱉음
function reducer(state = 초기값, 액션){   //default parameter문법. 관습적으로 기본적으로 초기값을 넣어줌 
  if (액션.type === '수량증가'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if (액션.type === '수량감소'){
      let copy = [...state];
      copy[0].quan--;
      return copy  
  } else {
  return state
}
}

let store = createStore(reducer);


//</HashRouter> -> 라우팅을 안전하게 할수있게 도와줌(서버에 전송되지않고 페이지가 바뀜)
//BrowserRouter는 서버와 협업해서 보여줌 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
