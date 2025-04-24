import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = {x, y}
      console.log(coords);
    }

    window.addEventListener('mousemove', onMouseMove);
    // useffect unmount - Cleanup deja de lanzar el listener
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);
  return (
    <>
     <h6>Usuario ya existe</h6>
    </>
  )
}
