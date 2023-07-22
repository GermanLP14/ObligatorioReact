import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

const MenuBar = () => {

  const cerrarSesion = () => {
    localStorage.clear();
  }

  return (
    <>
      {/* Navbar */}
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand href="/Login" onClick={cerrarSesion}>
            Cerrar Sesion
          </Navbar.Brand>

          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Dashboard
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item value="1" href="/AgregarPersona">
                Agregar Persona
              </Dropdown.Item>
              <Dropdown.Item value="2">Listado de Personas</Dropdown.Item>
              <Dropdown.Item value="3">Censados totales</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Analisis
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item value="1">Personas por departamento</Dropdown.Item>
              <Dropdown.Item value="2">Personas por ocupación</Dropdown.Item>
              <Dropdown.Item value="3">Usuarios por Departamento</Dropdown.Item>
              <Dropdown.Item value="4">Porcentaje Censados</Dropdown.Item>
              <Dropdown.Item value="5">Cuando finaliza el Censo</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
