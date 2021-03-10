import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux'; 

//redux쓰기 
//1. redux설치 후 index파일에 provider import
//2. provider로 app 감싸기
//3. createStore안에 state저장
//4. provider에 props전송
//5. cart.js가서 state사용하기 ->export default 셋팅
//6. 쓰는곳에서 props로 받기 

let alert초기값 = true;

function reducer2(state = alert초기값, 액션 ){
  if (액션.type === '닫기'){
    state = false;
    return state;
  }else{
    return state;
  }
}


let 초기값 = [
  { id : 18, name : '멋진신발', quan : 1},
  { id : 11, name : '멋진신발2', quan : 1}
];


//reducer는 항상 state를 뱉음
function reducer(state = 초기값, 액션){   //default parameter문법. 관습적으로 기본적으로 초기값을 넣어줌 
  console.log(액션.payload)
  if(액션.type === '항목추가') {
    let copy = [...state];
    // if(copy.indexOf(Object.keys(id)[0])===-1){
      //consol.log(Object.keys(copy));

    // }
    for(let i = 0; i<copy.length; i++){
    if(copy[i].id===액션.payload){
      console.log("여기")
      copy[i].quan = 2;
     
    }else{
      console.log("여기")
    copy.push(액션.payload);
    
    }
    console.log("여기")
    return copy
  } 
    
  } else if (액션.type === '수량증가'){
    let copy = [...state];
    //  for(let i = 0; i<copy.length; i++){
    //    if(copy[i].id == 액션.payload){
    //      copy[i].quan++;
    //    return copy;
    //    }
    let newCopy = copy.map(function(obj,i) {
      if(obj.id === 액션.payload) {
        obj.quan++;
      }
      return obj;
    });
  
      return newCopy;
      
  } else if (액션.type === '수량감소'){
      let copy = [...state];
      
      let newCopy = copy.map(function(obj,i) {
        if(obj.id === 액션.payload) {
          obj.quan--;
        }
        return obj;
      });
      return newCopy;
  } else {
      return state;
  }
}

let store = createStore(combineReducers({reducer, reducer2}));


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
