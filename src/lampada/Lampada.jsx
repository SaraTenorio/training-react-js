import React, { useState } from 'react';
import Light from './LightBulbSvg';

export default function Lampada() {
    const [ligth, setLigth] = useState(false);
    const fillColor = ligth ? "gold" : "gray";

    return (
        <>
            <div>
                <Light fillColor={fillColor} />
                <hr />
                <button onClick={() => setLigth(!ligth)}>ON/OFF</button>
            </div>
        </>
    );
}
