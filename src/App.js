import React, {useState} from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Jumbotron} from 'react-bootstrap';
import './App.css';
import Data from './data.js' //    ./ 가 현재 경로라는 뜻임 

function App() {

  let [shoes, shoes변경] = useState(Data);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">MY SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="background">
        <h1>Season open</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

    
      <div className="container">
        <div className="row">
          {
            shoes.map((a,i)=>{
              return <Card shoes={a} i={i} key={i}/>  //shoes[i]를 a로적어도 됨 
                                              //i를 자식에 전송하는법 1. i={i}
            })
          }
        </div>
      </div>
  
    </div>

  );
}

// component제작법 1. funtion컴포넌트이름(){} 2.return(<div></div)
function Card(props){
  return (
    <div className="col-md-4"> {/**md : 모바일에선 새로로 정렬*/}
        <img src={ 'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg' } width="100%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;
