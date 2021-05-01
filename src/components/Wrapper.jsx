
import Routes from './common/Routes';
import React, { Fragment, PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';

class Wrapper extends PureComponent {
  render() {
 
    return (
      <Fragment>
        <Container fluid >
          <Row>
            <Col className="content" md={10} sm={12} >
              <Routes   props={this.props}/>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Wrapper;
