'use client';
import { Island_Moments } from 'next/font/google';
import React, { useState } from 'react'

const ejercicio02 = () => {
    const [Palabra,setPalabra] = useState('')
    const [resultado, setresultado] = useState('')

    const matriz = [
        [0,0,200],
        [200,0,200],
    ];

    const analizar = () =>{

        let c = Palabra.split('');
        let i =0
        let estado =0
        let caracter =0
        let bus = Palabra.toLowerCase()

        const isLetter = new RegExp('^(ab)*$')
        const isleterb = new RegExp('[b]')
    
        console.log(bus)

        if(isLetter.test(bus)){
            caracter=1
        }else if(isleterb.test(bus)) {
            caracter=1
        }else{
            caracter=2
        }

        estado= matriz[estado][caracter]

        if (estado == 0 ){
            setresultado('Palabra Aceptada')
            
            
        } else{
            setresultado('Palabra No Aceptada')
            
            
        }

        
    };

    const borrar=()=>{

        setresultado('');
        setPalabra('');
        
    };
    return (
    <div className='text-center text-3xl m-4 bg-cyan-500 p-3' style={{borderRadius:15}}>Ejercicio 02
        <h1 className='text-xl m-6 hover:text-2xl' >Automata Finitos Derminista: Identificador de cadenas A,B donde despues de cada A sea seguida una B</h1>
        <div className='justify-evenly uppercase text-xl'>
        <input type='text' className=' text-stone-950 p-2 m-1 w-280 bg-stone-400 hover:bg-amber-300' placeholder='Escribe tu entrada' id='valor'  value={Palabra} style={{borderRadius:15}}
        onChange={(e) => setPalabra(e.target.value)}/>
        <button onClick={analizar} className='hover:text-lime-400 m-3'>Analizar</button>
        <button onClick={borrar} className=' hover:text-lime-400 m-3'>Borrar</button>
        {resultado && (
                <div className='m-3 p-4 text-center bg-lime-500' style={{borderRadius:30}}>
                    <p>Resultado: {resultado}</p>
                </div>)}
        </div>
    </div>
    )
}

export default ejercicio02