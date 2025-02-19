import './Articulo.css';

// eslint-disable-next-line react/prop-types
const Articulo = ({titulo, texto, foto}) => {
    return (
        <div className="foto">
            <img src={"../../"+foto}/>
            <h3>{titulo}</h3>
            <p>{texto}</p>
            <a href="#" className="detalles">VER DETALLES</a>
        </div>
    )
}

export default Articulo;