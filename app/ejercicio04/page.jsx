'use client';
import { Island_Moments } from 'next/font/google';
import React, { useState } from 'react'

const ejercicio04 = () => {
    const [Palabra,setPalabra] = useState('')
    const [resultado, setresultado] = useState('')

    const matriz = [
        [1,1,200],
        [1,0,200]
    ];

    const analizar = () =>{

        let c = Palabra.split('');
        let i =0
        let estado =0
        let caracter=2

        const isLetter = new RegExp('[aA]')
        const isLetterb = new RegExp('[bB]')

        while(i < Palabra.length){
            if (isLetter.test(c[i])){
                caracter=1
            }else if(isLetterb.test(c[i])){
                caracter=1
            }else{
                caracter = 2
                setresultado('Se Encontró Un Error')
                return

            }
            i++
        }


            if(isLetter.test(c[0])){
                if(isLetter.test(c[c.length-1])){
                    caracter=1
                }
                else{
                    caracter=2
                }
            }else if (isLetterb.test(c[0])){
                if(isLetterb.test(c[c.length-1])){
                    caracter=1
                }else{
                    caracter=2
                }
            }

            estado = matriz[estado][caracter];
            if(estado=== 200){
                setresultado('Se Encontró Un Error')
                console.log(estado)
                return
            }
        
        if (estado== 1){
            setresultado('Cadena Aceptada')
            
        } else{
            setresultado('Cadena No Aceptada')
            
        }
    

    };

    const borrar=()=>{

        setresultado('');
        setPalabra('');
        
    };
    return (
        <div className='text-center text-3xl m-4 bg-cyan-500 p-3' style={{borderRadius:15}}>Ejercicio 04
            <h1 className='text-xl m-6 hover:text-2xl'>Automata Finitos Derminista: Identificador de cadenas de A,B que empieze y termine con la misma letra</h1>
            <div className='justify-evenly uppercase text-xl'>
            <input type='text' className=' text-stone-950 p-2 m-1 w-280 bg-stone-400 hover:bg-purple-300' placeholder='Escribe tu entrada' id='valor'  value={Palabra} style={{borderRadius:15}}
            onChange={(e) => setPalabra(e.target.value)}/>
            <button onClick={analizar} className='hover:text-lime-400 m-3'>Analizar</button>
            <button onClick={borrar} className=' hover:text-lime-400 m-3'>Borrar</button>
            </div>
            {resultado && (
                    <div className='m-3 p-4 text-center bg-lime-500' style={{borderRadius:30}}>
                        <p>Resultado: {resultado}</p>
                    </div>)}
        </div>
        )

}
export default ejercicio04