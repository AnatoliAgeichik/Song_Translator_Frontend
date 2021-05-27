import React from 'react';
import {Nav} from 'react-bootstrap'


export class Header extends React.Component{
render(){
  return(
    <Nav className="justify-content-start bg-dark p-3" defaultActiveKey="/">
    <Nav.Item>
      <Nav.Link className="text-light" href="/">Song Translator</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/singers">Singers</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/tracks">Tracks</Nav.Link>
    </Nav.Item>
  </Nav>
    );
  }
}
