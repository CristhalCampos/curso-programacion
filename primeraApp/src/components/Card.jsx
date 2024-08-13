import Button from "./Button";
import PropTypes from "prop-types";

export default function Card({
    title = "Titulo de la card",
    description = "Descripción de la card",
    image = "url de la imagen",
}) {
    return (
        <div>
            <h2 className={`text-lg text-violet-900 font-bold`}>{title}</h2>
            <p>{description}</p>
            <img src={image} className={`w-40`} />
            <Button text="Ver más" background="bg-violet-800" />
        </div>    
    );
}

Card.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
};