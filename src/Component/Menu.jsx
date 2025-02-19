import './Menu.css';

const Menu = () => {
    return (
        <>
            <input type="checkbox" id="menu-check"/>
            <label id="menu" htmlFor="menu-check">
                <span id="menu-abrir">&#9776;</span>
                <span id="menu-cerrar">X</span>
            </label>
            <nav className="menu">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Nuestro Equipo</a></li>
                    <li><a href="#">Nuestros Clientes</a></li>
                    <li><a href="#">Redacción</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;