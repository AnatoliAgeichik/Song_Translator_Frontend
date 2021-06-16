import React from 'react';
import {Nav} from 'react-bootstrap'


function logout(){
    localStorage.setItem("token", null)
    localStorage.setItem("logged", false)
}

export class Header extends React.Component{

render(){
  return(
    <Nav className="d-flex bg-dark p-3" defaultActiveKey="/">
      <Nav.Item >
          <Nav.Link className="text-light" href="/">Song Translator</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link className="text-light" href="/singers?page=1&ordering=name">Singers</Nav.Link>
      </Nav.Item>
      <Nav.Item >
          <Nav.Link className="text-light" href="/tracks/?page=1&ordering=track_name">Tracks</Nav.Link>
      </Nav.Item>

      <div className={localStorage.getItem("logged")==="true"? 'd-none':'d-flex ml-auto'}>
          <Nav.Item>
            <Nav.Link className="text-light" href="/sign_in">Sign in</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="/sign_up">Sign up</Nav.Link>
          </Nav.Item>
      </div>

      <div className={localStorage.getItem("logged")==="true"? 'd-flex ml-auto':'d-none'}>
          <Nav.Item>
            <Nav.Link className="text-light pull-right " onClick={logout} href="/">Log out</Nav.Link>
          </Nav.Item>
      </div>
    </Nav>
    );
  }
}
