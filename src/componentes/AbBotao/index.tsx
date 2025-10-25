// @ts-ignore
import React from "react";

export const AbBotao = () => {
    const AbBotaoStyle: React.CSSProperties = {
        backgroundColor: "#007BFF", // azul padrão
        color: "white",
        fontFamily: "Verdana, sans-serif",
        border: "none",
        borderRadius: "8px", // cantos arredondados
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.2s ease-in-out",
    };
    // @ts-ignore
    return (
        <div>
            <button style={AbBotaoStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3" )}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
            >
                Clique aqui!
            </button>

        </div>
    );
}