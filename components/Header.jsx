import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <header className='bg-lime-500 p-8 space-y-5 ' >
      <h1 className='text-3xl font-bold text-center'>Automatas Finitos Deterministas</h1>
      <nav>
        <ul className='flex justify-evenly uppercase'>        
        <Link href={'/'} className='m-2 p-4 text-center hover:bg-green-400' style={{borderRadius:30}}>INICIO</Link>
        <Link href={'/ejercicio01'} className='m-2 p-4 text-center hover:bg-green-400' style={{borderRadius:30}}>Ejercicio 01</Link>
        <Link href={'/ejercicio02'} className='m-2 p-4 text-center hover:bg-green-400' style={{borderRadius:30}}>Ejercicio 02</Link>
        <Link href={'/ejercicio03'} className='m-2 p-4 text-center hover:bg-green-400' style={{borderRadius:30}}>Ejercicio 03</Link>
        <Link href={'/ejercicio04'} className='m-2 p-4 text-center hover:bg-green-400' style={{borderRadius:30}}>Ejercicio 04</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header