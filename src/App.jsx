import { useState } from "react";
import "./App.css";

function App() {
    const [band1, setBand1] = useState("");
    const [band2, setBand2] = useState("");
    const [multiplier, setMultiplier] = useState("");
    const [tolerance, setTolerance] = useState("");
    const [result, setResult] = useState(null);

    const colors = {
        negro: 0,
        marrón: 1,
        rojo: 2,
        naranja: 3,
        amarillo: 4,
        verde: 5,
        azul: 6,
        violeta: 7,
        gris: 8,
        blanco: 9,
    };

    const multipliers = {
        negro: 1,
        marrón: 10,
        rojo: 100,
        naranja: 1000,
        amarillo: 10000,
        verde: 100000,
        azul: 1000000,
        violeta: 10000000,
        gris: 100000000,
        blanco: 1000000000,
        dorado: 0.1,
        plateado: 0.01,
    };

    const tolerances = {
        marrón: "±1%",
        rojo: "±2%",
        verde: "±0.5%",
        azul: "±0.25%",
        violeta: "±0.1%",
        gris: "±0.05%",
        dorado: "±5%",
        plateado: "±10%",
    };

    const calcular = () => {
        if (band1 && band2 && multiplier && tolerance) {
            const baseValue = parseInt(`${colors[band1]}${colors[band2]}`);
            const valor = baseValue * multipliers[multiplier];
            setResult(
                `${valor >= 1000 ? valor / 1000 + "K" : valor} Ω ${
                    tolerances[tolerance]
                }`
            );
        } else {
            setResult("Selecciona todos los valores");
        }
    };

    return (
        <div className="calculator-card">
            <h1 className="title">Calculadora de Resistencias</h1>

            {/* TABLA DE REFERENCIA */}
            <div className="reference-table-container">
                <h3 className="table-title">Tabla de Colores de Resistencias</h3>
                <table className="color-table">
                    <thead>
                        <tr>
                            <th>Color</th>
                            <th>Banda 1 (Valor)</th>
                            <th>Banda 2 (Valor)</th>
                            <th>Banda 3 (Multiplicador)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ backgroundColor: "#000", color: "white" }}>
                            <td>Negro</td><td>0</td><td>0</td><td>x1 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#5b3310", color: "white" }}>
                            <td>Marrón</td><td>1</td><td>1</td><td>x10 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#d00", color: "white" }}>
                            <td>Rojo</td><td>2</td><td>2</td><td>x100 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#ff8c00" }}>
                            <td>Naranja</td><td>3</td><td>3</td><td>x1,000 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#ffeb3b" }}>
                            <td>Amarillo</td><td>4</td><td>4</td><td>x10,000 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#008000", color: "white" }}>
                            <td>Verde</td><td>5</td><td>5</td><td>x100,000 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#0000ff", color: "white" }}>
                            <td>Azul</td><td>6</td><td>6</td><td>x1,000,000 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#800080", color: "white" }}>
                            <td>Violeta</td><td>7</td><td>7</td><td>x10,000,000 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#808080", color: "white" }}>
                            <td>Gris</td><td>8</td><td>8</td><td>x100,000,000 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#ffffff" }}>
                            <td>Blanco</td><td>9</td><td>9</td><td>x1,000,000,000 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#b8860b" }}>
                            <td>Dorado</td><td>-</td><td>-</td><td>x0.1 Ω</td>
                        </tr>
                        <tr style={{ backgroundColor: "#c0c0c0" }}>
                            <td>Plateado</td><td>-</td><td>-</td><td>x0.01 Ω</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="calculator-layout">
                <div className="calculator-controls">
                    <div className="select-group">
                        <label>Banda 1 </label>
                        <select value={band1} onChange={(e) => setBand1(e.target.value)}>
                            <option value="">Selecciona color</option>
                            {Object.keys(colors).map((color) => (
                                <option key={color} value={color}>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="select-group">
                        <label>Banda 2 </label>
                        <select value={band2} onChange={(e) => setBand2(e.target.value)}>
                            <option value="">Selecciona color</option>
                            {Object.keys(colors).map((color) => (
                                <option key={color} value={color}>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="select-group">
                        <label>Multiplicador </label>
                        <select value={multiplier} onChange={(e) => setMultiplier(e.target.value)}>
                            <option value="">Selecciona color</option>
                            {Object.keys(multipliers).map((color) => (
                                <option key={color} value={color}>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="select-group">
                        <label>Tolerancia </label>
                        <select value={tolerance} onChange={(e) => setTolerance(e.target.value)}>
                            <option value="">Selecciona color</option>
                            {Object.keys(tolerances).map((color) => (
                                <option key={color} value={color}>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className="btn-calc" onClick={calcular}>Calcular</button>
                </div>

                <div className="result-panel">
                    <div className="resistor-body">
                        <div className={`band color-${band1}`}></div>
                        <div className={`band color-${band2}`}></div>
                        <div className={`band color-${multiplier}`}></div>
                        <div className={`band color-${tolerance}`}></div>
                    </div>

                    <div className="result-card mt-4">
                        <h2>Resultado:</h2>
                        <p>{result ? result : "Aún sin calcular"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
