import React from "react";

const Calculator = () => {

    return (
        <div className="container">
            <div className="position-relative" style={{width: "1300px", height: "800px", marginTop: "100px", backgroundColor: "#51A9AC"}}>
                <div className="bg-dark rounded-4 position-absolute top-50 start-50 translate-middle text-white" style={{width: "400px", height: "605px"}}>
                    <div className="bg-secondary d-flex justify-content-end pe-4 m-2 rounded-2 fs-1 pt-3" style={{width: "385px", height: "100px"}}>0</div>
                    <div className="d-flex flex-row">
                        <button className="ms-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>C</button>
                        <button className="ms-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>+-</button>
                        <button className="ms-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>%</button>
                        <button className="ms-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>/</button>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>7</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>8</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>9</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>x</button>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>4</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>5</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>6</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>-</button>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>1</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>2</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>3</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>+</button>
                    </div>
                    <div className="d-flex flex-row">
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>0</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "90px", height: "90px", backgroundColor: "#8B51AC"}}>.</button>
                        <button className="ms-2 mt-2 rounded-2 text-white fs-2" style={{width: "188px", height: "90px", backgroundColor: "#B64097"}}>=</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;