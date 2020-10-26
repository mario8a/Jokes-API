import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Frase } from './components/Frase';

const Contenedor = styled.div`
   display: flex;
   align-items: center;
   padding-top: 2.5rem;
   flex-direction: column;
`;

const BotonStyled = styled.button`
   background-color: #5900ff;
   font-family: monospace;
   color: #FFF;
   margin-top: 3rem;
   padding: 1rem 3rem;
   font-size: 2rem;
   border: none;
   border-radius: 12px;

   &:hover {
      cursor: pointer;
   }
`;

export const JokeApp = () => {

   const [frase, setFrase] = useState('')

   
   const consultarAPI = async () => {
      const api = await fetch('https://api.chucknorris.io/jokes/random');
      const joke = await api.json();
      
      setFrase(joke.value)
   }
   
   useEffect(() => {
      consultarAPI();
   }, [])

   return (
      <Contenedor>
         <Frase
            frase={frase}
         />
         <BotonStyled
            onClick={consultarAPI}
         >
            Obtener frase  
         </BotonStyled>
      </Contenedor>
      
   )
}
