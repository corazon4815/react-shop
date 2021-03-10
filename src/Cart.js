import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
// table에 중괄호를 써야 변수/함수 가져오기. 안쓰면 export default된거 가져온다는 뜻

function Cart(props){
  return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {
              props.state.map((a, i)=>{
                return (
                  <tr key={i}>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    <td>{a.quan}</td> 
                                                                              {/* dispatch로 수정요청을 보낼때 데이터도 보낼 수있음 
                                                                                  보낸 자료는 액션 파라미터에 저장돼있음*/}
                    <td><button className="btn btn-secondary" onClick={()=>{props.dispatch({type:'수량증가', payload : a.id})}}>+</button>&nbsp;
                        <button className="btn btn-secondary" onClick={()=>{props.dispatch({type:'수량감소', payload : a.id})}}>-&nbsp;</button>
                    </td>
                  </tr>
                        )
                    })
            }
          </tbody>
        </Table>
            {   
                props.alert열렸니 === true
                ? (<div className = "my-alert2">
                    <p>지금 구매하시면 신규 할인 20%</p><br/>
                    <button className="btn btn-secondary" onClick={()=>{props.dispatch({type:'닫기'})}}>닫기</button>
                </div>)
                : null
            }   

      </div>
  )
}

function state를props화(state){
  console.log(state)
  return {
    state : state.reducer, //stete안에 있는 모든 데이터를 state라는 이름의 props로 바꿔주세용
                           //이러면 state라고 쓰는 순간 안의 모든 데이터가 출력이 됨
    alert열렸니 : state.reducer2            }
}

export default connect(state를props화)(Cart)

//export default Cart;