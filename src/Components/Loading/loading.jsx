import React from "react";
import {LoadingOutlined} from '@ant-design/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Loading = () =>{

    return (
     <Container fluid='md'>
        <Row>
            <Col md={{ span: 5, offset: 5 }}>
              <LoadingOutlined style={{fontSize:40}}/>
            </Col>
        </Row>
     </Container>
    )
}

export default Loading;