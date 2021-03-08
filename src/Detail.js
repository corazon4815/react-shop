import React, {useEffect, useState} from 'react';
import {useHistory, useParams } from 'react-router-dom';
//import styled from 'styled-conponents';
                    //css를 미리 입혀놓은 컴포넌트 근데 설치해도 없다고나와서 주석처리함
import './Detail.scss';

//  let 박스 = styled.div`
//    padding : 20px;
//  `;

function Detail(props){

  //1. componentDidMount() : 컴포넌트 첫 등장후 실행할 코드 
  //2. componentWillUnmount() : 다른페이지로 넘어간다든지 등의 사유로 컴포넌트가 사라지기 전 실행할 코드
  //3. useEffect() : componentDidMount와 같음 (첫등장해서 로딩이 끝난후 = mount가 끝났을때)
                                            //(컴포넌트가 재랜더링되고난 후 때 = update되고 난 후)

    //useEffect : **** 맨처음 Detail이 로드될때만 실행하고 싶으면 []를 넣어주면됨
                            //특정 state가 변경될때만 실행해주세요->느낌
    //setTimeout : 타이머가 만료된 후 지정된 코드를 실행함
    useEffect(()=>{
    let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);  
    return ()=>{clearTimeout(타이머)}
    //setTimeout가 끝나지않았는데 페이지가 바뀌면 버그가 날수도있기때문에 
    //return(=componentWillUnmount)으로 컴포넌트가
    //종료되기전에 뭘 실행할지 적음 
  },[]);
  
  let { id } = useParams(); //  /:id자리에 사용자가 입력한 값이 저장됨
  let history = useHistory();
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState('');


    return (
      <div className="container">
        {/* <박스></박스> */}

        {/* { inputData } 리액트에선 input에 값을 입력할때마다 Detail이 재 랜더링(컴포넌트)업데이트됨 */}
        {/* <input onChange={(e)=>{inputData변경(e.target.value) }} /> */}

        {
          alert === true
          ? (<div className="my-alert2">
              <p>재고가 얼마 남지 않았습니다.</p>
            </div>)
          : null    
        }

        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+(id)+'.jpg'} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id-1].title}</h4>
            <p>{props.shoes[id-1].content}</p>
            <p>{props.shoes[id-1].price}W</p>
            
            <Info 재고={props.재고}/> 
            {/* 자식의 자식에게 props전송하는법 */}

            <button className="btn btn-secondary" onClick={()=>{
              //주문클릭시 재고 빼기
              props.재고변경([9,10,11])

            }}>주문하기</button>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-info" onClick={()=>{
              history.push('/')
            }}>뒤로가기</button>

          </div>
        </div>
      </div> 
    )
}

function Info(props){
  return (
    <p> 재고 : {props.재고[0]} </p>
  )
}

export default Detail;