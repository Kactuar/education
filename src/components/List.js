import React from 'react'

const List = ({ collectionMod }) => {
  return (
    <ul>
      {
        collectionMod?.map((elem, ind) => {
          return <li key={ind}>{elem}</li>
        })
      }
    </ul>
  )
}

export default List