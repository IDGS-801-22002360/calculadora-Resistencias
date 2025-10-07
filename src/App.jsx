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
            <h1 className="text-3xl font-bold mb-4">
                Calculadora de Resistencias
            </h1>
            <div className="calculator-layout">
                {/* PANEL IZQUIERDO */}
                <div className="calculator-controls">
                    <div className="select-group">
                        <label>Banda 1</label>
                        <select
                            value={band1}
                            onChange={(e) => setBand1(e.target.value)}
                        >
                            <option value="">Selecciona color</option>
                            {Object.keys(colors).map((color) => (
                                <option key={color} value={color}>
                                    {color.charAt(0).toUpperCase() +
                                        color.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="select-group">
                        <label>Banda 2</label>
                        <select
                            value={band2}
                            onChange={(e) => setBand2(e.target.value)}
                        >
                            <option value="">Selecciona color</option>
                            {Object.keys(colors).map((color) => (
                                <option key={color} value={color}>
                                    {color.charAt(0).toUpperCase() +
                                        color.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="select-group">
                        <label>Multiplicador</label>
                        <select
                            value={multiplier}
                            onChange={(e) => setMultiplier(e.target.value)}
                        >
                            <option value="">Selecciona color</option>
                            {Object.keys(multipliers).map((color) => (
                                <option key={color} value={color}>
                                    {color.charAt(0).toUpperCase() +
                                        color.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="select-group">
                        <label>Tolerancia</label>
                        <select
                            value={tolerance}
                            onChange={(e) => setTolerance(e.target.value)}
                        >
                            <option value="">Selecciona color</option>
                            {Object.keys(tolerances).map((color) => (
                                <option key={color} value={color}>
                                    {color.charAt(0).toUpperCase() +
                                        color.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className="btn-calc" onClick={calcular}>
                        Calcular
                    </button>
                </div>

                {/* PANEL DERECHO */}
                <div className="result-panel">
                    <div className="resistor-visual">
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
