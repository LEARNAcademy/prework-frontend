import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
// import necessary components from reactstrap
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <h2>Meet Your New Friend</h2>
        <Container>
          <Row>
            <Col>
              <ListGroup>
                { this.props.cats.map((cat, index) => {
                  return (
                    <ListGroupItem key={ index }>
                      <h4>
                        {/* using dot notation to access the cat attributes */}
                        <NavLink
                          to={`/catshow/${cat.id}`}
                        >
                          { cat.name }
                        </NavLink>
                      </h4>
                    </ListGroupItem>
                  )
                })}
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}
export default CatIndex
