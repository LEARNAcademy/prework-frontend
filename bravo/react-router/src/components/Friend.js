import React from 'react'

const Friend = (props) => {
  return (
    <>
      { props.friendList.map((friend, index) => {
        return (
          <li key={ index }>{ friend }</li>
        )
      })}
    </>
  )
}
export default Friend
