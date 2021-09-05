import React, { useEffect, useState } from 'react';

function Counter() {
    const weddingDate = new Date('2021-10-30T12:00:00');
    const [timeToWedding, setTimweToWedding] = useState(+weddingDate - +Date.now())
    console.log({timeToWedding});

    useEffect(() => {

    }, [])

    return <h1>{timeToWedding.toLocaleString("es-ES")}</h1>
}

export default Counter;