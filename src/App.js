import React from 'react';
import Gallery from './components/Gallery';
import NameCard from './components/NameCard';
import { Container, Row, Col, Image } from 'react-bootstrap';



export default class App extends React.Component {
  render() {
    // const linkStyle = {
    //   textDecoration: 'none',
    //   color: 'white',
    // }
    return  (
      <Container>
        <Row><Gallery /></Row>
        <Row><NameCard /></Row>
      </Container> 
    )
  }
}
