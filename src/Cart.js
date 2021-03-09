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
                                    <td><button onClick={()=>{props.dispatch({type:'수량증가'})}}>+</button>&nbsp;
                                        <button onClick={()=>{props.dispatch({type:'수량감소'})}}>-&nbsp;</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

function state를props화(state){
    return {
        state : state //stete안에 있는 모든 데이터를 state라는 이름의 props로 바꿔주세용
                        //이러면 state라고 쓰는 순간 안의 모든 데이터가 출력이 됨
        }
}

export default connect(state를props화)(Cart)

//export default Cart;