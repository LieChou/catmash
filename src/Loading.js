import React from 'react';

export default () => {
    return (
        <div style={{ minHeight: '100vh' }} className="d-flex flex-row justify-content-center align-items-center w-100">
            <h3> Prêt? Feu... </h3>
            <img alt="loading gif" src={require("./assets/loading.gif")} />
        </div>
    );
}