import './Body.css';

const Body = () => {
    return (
        <>
        <div className="contenido">
            <header>
                <div className="arriba">
                    <img src="../../logo.png"/>
                    <p>Siguenos: </p>
                </div>
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
            </header>
            <div className="imagen_banner">
                <img src="../../banner1.jpg" className="banner"/>
            </div>
            <section>
                <div className="foto">
                    <img src="../../foto1.jpg"/>
                    <h3>Turismo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit himenaeos potenti aenean orci quam
                        sollicitudin, lacinia eleifend et viverra metus. Mauris dictum donec nostra at accumsan laoreet
                        ligula, consequat placerat odio dis eget blandit lacinia dictumst, penatibus auctor cursus curae
                        non magna.</p>
                    <a href="#" className="detalles">VER DETALLES</a>
                </div>
                <div className="foto">
                    <img src="../../foto2.jpg"/>
                    <h3>Hotel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit himenaeos potenti aenean orci quam
                        sollicitudin, lacinia eleifend et viverra metus. Mauris dictum donec nostra at accumsan laoreet
                        ligula, consequat placerat odio dis eget blandit lacinia dictumst, penatibus auctor cursus curae
                        non magna.</p>
                    <a href="#" className="detalles">VER DETALLES</a>
                </div>
                <div className="foto">
                    <img src="../../foto3.jpg"/>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit himenaeos potenti aenean orci quam
                        sollicitudin, lacinia eleifend et viverra metus. Mauris dictum donec nostra at accumsan laoreet
                        ligula, consequat placerat odio dis eget blandit lacinia dictumst, penatibus auctor cursus curae
                        non magna.</p>
                    <a href="#" className="detalles">VER DETALLES</a>
                </div>
            </section>

        </div>
        <p>Página con menú de hamburguesa. Práctica 1</p>
        </>
)
}

export default Body;