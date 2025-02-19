import './Body.css';
import Articulo from "./Articulo.jsx";
import Menu from "./Menu.jsx";

const Body = () => {
    return (
        <>
        <div className="contenido">
            <header>
                <div className="arriba">
                    <img src="../../logo.png"/>
                    <p>Siguenos: </p>
                </div>
                <Menu />
            </header>
            <div className="imagen_banner">
                <img src="../../banner1.jpg" className="banner"/>
            </div>
            <section>
                <Articulo titulo="Turismo" foto="foto1.jpg" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit himenaeos potenti aenean orci quam
                        sollicitudin, lacinia eleifend et viverra metus. Mauris dictum donec nostra at accumsan laoreet
                        ligula, consequat placerat odio dis eget blandit lacinia dictumst, penatibus auctor cursus curae
                        non magna."/>
                <Articulo titulo="Hotel" foto="foto2.jpg" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit himenaeos potenti aenean orci quam
                        sollicitudin, lacinia eleifend et viverra metus. Mauris dictum donec nostra at accumsan laoreet
                        ligula, consequat placerat odio dis eget blandit lacinia dictumst, penatibus auctor cursus curae
                        non magna."/>
                <Articulo titulo="Marketing" foto="foto3.jpg" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit himenaeos potenti aenean orci quam
                        sollicitudin, lacinia eleifend et viverra metus. Mauris dictum donec nostra at accumsan laoreet
                        ligula, consequat placerat odio dis eget blandit lacinia dictumst, penatibus auctor cursus curae
                        non magna."/>
            </section>

        </div>
        <p>Página con menú de hamburguesa. Práctica 1</p>
        </>
)
}

export default Body;