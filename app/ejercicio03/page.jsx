'use client';
import { Island_Moments } from 'next/font/google';
import React, { useState } from 'react'

const ejercicio03 = () => {
    const [numero,setnumero] = useState('')
    const [resultado, setresultado] = useState('')

    const matriz = [
        [1,200,200],
        [1,1,200]
    ];

    const analizar = () =>{

        let c = numero.split('');
        let i =0
        let estado =0
        let caracter=0

        const isDigit= new RegExp('[0]')
        const isDigit1= new RegExp('[1]')
        
        while(i < numero.length){
            if (isDigit.test(c[i])){
                caracter=1
            }else if(isDigit1.test(c[i])){
                caracter=1
            }else{
                caracter =2
                setresultado('se encontró un error')
                return
            }
            
            i++
        }

        if(isDigit.test(c[0])){
            caracter=0
        }
        else{
            caracter = 2

            estado = matriz[estado][caracter];
            if(estado=== 200){
                setresultado('se encontró un error')
                return
            }
            
        }
        if (estado== 0){
            setresultado('Cadena Aceptada')
        } else{
            setresultado('Cadena No Aceptada')
        }

    }

    const borrar=()=>{

        setresultado('');
        setnumero('');
        
    };
    return (
    <div className='text-center text-3xl m-4 bg-cyan-500 p-3' style={{borderRadius:15}}>Ejercicio 03
        <h1 className='text-xl m-6 hover:text-2xl'>Automata Finitos Derminista: Identificador de cadenas de 1,0 que inicien con 0</h1>
        <div className='justify-evenly uppercase text-xl'>
        <input type='text' className=' text-stone-950 p-2 m-1 w-280 bg-stone-400 hover:bg-fuchsia-500' placeholder='Escribe tu entrada' id='valor'  value={numero} style={{borderRadius:15}}
        onChange={(e) => setnumero(e.target.value)}/>
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

export default ejercicio03