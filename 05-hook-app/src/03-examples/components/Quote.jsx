import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({title}) => {
  const pRef = useRef();
  const [boxSize, SetBoxSize] = useState({ width: 0, height: 0 })
  
  useLayoutEffect(() => {
    const {height, width } = pRef.current.getBoundingClientRect();
    SetBoxSize({ height, width });
  }, [title])
  
  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p className="mb-1" ref={pRef}>{title}</p>
          <footer className="blockquote-footer">https://jsonplaceholder.typicode.com/</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
