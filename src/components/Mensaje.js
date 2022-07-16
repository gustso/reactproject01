import React from 'react';
import Button from 'react-bootstrap/Button';

class Mensaje  extends React.Component{
    render () {
      return  <Button variant="success">Hola Mundo!! Soy {this.props.nombre}</Button>
    }
  
  }
  

  export default Mensaje;