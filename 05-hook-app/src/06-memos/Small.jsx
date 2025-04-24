import React from "react"

// eslint-disable-next-line react/display-name
export const Small = React.memo(({value}) => {

  console.log('me volví a dibujar :(')
  return (
    <small>{value}</small>
  )
})
