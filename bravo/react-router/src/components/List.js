import React from 'react'

const List = (props) => {
  return (
    <>
      { props.groceryList.map((item, index) => {
        return (
          <li key={ index }>{ item }</li>
        )
      })}
    </>
  )
}
export default List
