import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
   padding:1.5rem;
   border-radius: .5rem;
   background-color: #fff;
   max-width: 800px;

   h1 {
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      position: relative;
      padding-left: 2rem;
      font-size: 1rem;

      &::before {
         content: open-quote;
         font-size: 4rem;
         color: black;
         position: absolute;
         left: -1rem;
         top: -2rem;
      }
   }
`

export const Frase = ({frase}) => {
   return (
         <ContenedorFrase>
            <h1>{frase}</h1>
         </ContenedorFrase>
   )
}
