import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Form, Button } from 'react-bootstrap';
import Navbarrra from '../components/Navbarrra';
import {useNavigate} from 'react-router-dom';


const Registro = () => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [pass, setPass] = useState('');

    const [mensajeApi, setMensajeApi] = useState('');

    const handleNom = event => {
        setNombre(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handleApe = event => {
        setPass(event.target.value);
        console.log('value is:', event.target.value);
    };

    const consumiendoApi = () => {

        console.log('consumiendo api');  
        
        fetch("https://censo.develotion.com//usuarios.php", {
            method: "POST",
            body: JSON.stringify({ usuario: nombre, password: pass }),
            headers: {
            "Content-type": "application/json",
        },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            console.log(json.apiKey);
            if (json.codigo == 200) {
                let localStorage = window.localStorage;
                localStorage.setItem("KEY", json.apiKey);
                navigate("/Home");
            }else{
                setMensajeApi(json.mensaje);
            }
        });
    }


    return (
        <>
            <Navbarrra />
            {/* Registro */}            
            <Container>
                <h1>Registro</h1>
                <br />
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Ingrese su usuario" onChange={handleNom} value={nombre}/>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Control type="password" placeholder="Ingrese su contrasena" onChange={handleApe} value={pass}/>
                    </Form.Group>
                </Form>
                <br />
                <Button onClick={consumiendoApi}>Registrarse</Button>
                <br />
                <br />
                <p style={{color: 'red'}}>{mensajeApi}</p>
            </Container>
        </>
    )
}

export default Registro