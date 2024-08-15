import { useState } from "react";

export function ColorButton(posicion) {
    const background = ["bg-blue-600", "bg-orange-600", "bg-green-600"];
    const [color, setColor] = useState(posicion);
    setColor(posicion);
    return (
        background[color]
    );
}