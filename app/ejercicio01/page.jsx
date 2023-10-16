'use client';
import { Island_Moments } from 'next/font/google';
import React, { useState } from 'react'

const ejercicio01 = () => {
    const [Palabra,setPalabra] = useState('')
    const [resultado, setresultado] = useState('')

    const matriz = [
        [1,200,200],
        [1,0,200]
    ];

    const analizar = () =>{

        let c = Palabra.split('');
        let i =0
        let estado =0
        let caracter=0

        const isLetter = new RegExp('[a-zA-Z]')
        const isDigit= new RegExp('[0-9]')

        while(i < Palabra.length){
            if (isDigit.test(c[i])){
                caracter=1
            }else if(isLetter.test(c[i])){
                caracter=0
            }else{
                caracter =2 
            }
            estado = matriz[estado][caracter];
            if(estado=== 200){
                setresultado('se encontró un error')
                return
            }
            i++
        }
        if (estado == 1 ){
            setresultado('Palabra Aceptada')
        } else{
            setresultado('Palabra No Aceptada')
        }



    }
    
    const borrar=()=>{

        valor.value='';
        
    };
    return (
    <div className='text-center text-3xl m-4 bg-cyan-500 p-3' style={{borderRadius:15}}>Ejercicio 01
        <h1 className='text-xl m-6 hover:text-2xl'>Automata Finitos Derminista: Determinador de Letras</h1>
        <div className='justify-evenly uppercase text-xl'>
        <input type='text' className=' text-stone-950 p-2 m-1 w-280 bg-stone-400 hover:bg-green-400' placeholder='Escribe tu entrada' id='valor'  value={Palabra} style={{borderRadius:15}}
        onChange={(e) => setPalabra(e.target.value)}/>
        <button onClick={analizar} className='hover:text-lime-400'>Analizar</button>
            <div id='res'>
                {resultado && (
                    <div className='m-3 p-4 text-center bg-lime-500' style={{borderRadius:30}}>
                            <p> Resultado: {resultado}</p>
                    </div>)}
            </div>
        </div>
    </div>
    )
}

export default ejercicio01