import React from 'react';
import { useRefRender } from './useRefRender';

export const Hello = ({increment}) => {
   {useRefRender} 
   return (
     <button onClick={increment}>Click me</button>
   )
};
