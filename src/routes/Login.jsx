import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Form, Button } from 'react-bootstrap';
import NavBarLogin from '../components/NavBarLogin';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [pass, setApellido] = useState('');

    const [mensajeApi, setMensajeApi] = useState('');

    const handleNom = event => {
        setNombre(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handlePass = event => {
        setApellido(event.target.value);
        console.log('value is:', event.target.value);
    };

    const consumiendoApi = () => {
    fetch("https://censo.develotion.com//login.php", {
    method: "POST",
    body: JSON.stringify({ usuario : nombre, password : pass }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    })
    .then((response) => response.json())
        .then((json) => { 
            console.log(json);
            console.log(json.apiKey);
            if (json.codigo == 200) {
                let localStorage = window.localStorage;
                localStorage.setItem("KEY", json.apiKey);
                localStorage.setItem("ID", json.id);
                navigate('/Home');
            }else{
              setMensajeApi(json.mensaje);
            }
        });
}
    
    return (
      <>
        <NavBarLogin />
        {/* Login */}
        <Container>
          <h1>Login</h1>
          <br />
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Ingrese su usuario"
                onChange={handleNom}
                value={nombre}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Ingrese su contrasena"
                onChange={handlePass}
                value={pass}
              />
            </Form.Group>
          </Form>
          <br />
          <Button onClick={consumiendoApi}>Ingresar</Button>
          <br />
          <br />
        </Container>
        <p style={{color: 'red'}}>{mensajeApi}</p>
      </>
    );
}

export default Login