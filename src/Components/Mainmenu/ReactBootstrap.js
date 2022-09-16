import React,{Component,} from 'react';
import axios from 'axios';
 import {Container,Row,Col,Card,} from 'react-bootstrap'

// import Container from 'react-bootstrap/Container';
//  Globalvariable for restiapi_url
const url = `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10` 
 
export default class ReactBootstrap extends Component{
constructor(props){
    super(props);
    this.state={
        photos:[] //empty array
    }
}
render(){
    return(<>
    <div className='container' text-center>
        <h2 className='text-center'>React Boostrap UI Package</h2>
        <Container>
            <Row>
                {
                    this.state.photos.map((res,i)=>
                    {
                        return(<Col  lg={4} md={4} sm={6} xs={12}>
                                    <Card>
                                        <Card.Img variant='top'className='w-50 max-auto' src={res.thumbnailUrl}></Card.Img>

                                        <Card.Body>
                                            <Card.Title className='h4'>{res.Title}</Card.Title>
                                             <a className='btn btn-primary' href={res.url} target="-blank"  >Visit Site</a>
                                            {/* <Card.Link href="#">Card Link</Card.Link>
                                            <Card.Link href="#">Another Link</Card.Link> */}
                                        </Card.Body>
                                    </Card>

                            </Col>)

                    } )
                     }


                
            </Row>
        </Container>
    </div>
    </>)
}
 //Restapicalls
 componentDidMount(){
    axios.get(url).then((result) => this.setState({photos:result.data}))
}
}
