import React, { useRef } from 'react';

export const UseRefRender = () => {
  const refs = useRef(0);
  console.log('refs renders ', refs.current++);
};
