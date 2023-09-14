import React, { useState } from "react";

const Calculator = () => {

    const [calculator, setCalculator] = useState(0);
    // const [numbers, setNumbers] = useState();

    // function calculatorDisplay() {
    //     setNumbers()
    // }


    return (
        <div className="container">
            <div className="blueBox position-relative">
                <div className="bigBox bg-dark position-absolute top-50 start-50 translate-middle">
                    <div>
                        <input value={calculator} onChange={(e) => {setCalculator(e.target.value)}} type="text" className="display bg-secondary d-flex justify-content-end pe-4 m-2 fs-1 pt-3"></input>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="purpleButton ms-2 fs-2">C</button>
                        <button className="purpleButton ms-2 fs-2">+-</button>
                        <button className="purpleButton ms-2 fs-2">%</button>
                        <button className="purpleButton ms-2 fs-2">/</button>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="purpleButton ms-2 mt-2 fs-2">7</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">8</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">9</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">x</button>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="purpleButton ms-2 mt-2 fs-2">4</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">5</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">6</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">-</button>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="purpleButton ms-2 mt-2 fs-2">1</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">2</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">3</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">+</button>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="purpleButton ms-2 mt-2 fs-2">0</button>
                        <button className="purpleButton ms-2 mt-2 fs-2">.</button>
                        <button className="pinkButton ms-2 mt-2 fs-2">=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;