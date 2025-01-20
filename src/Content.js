import React from 'react'
import UnList from './UnList'

const Content = ({items,handleCheck,handleDelete}) => {
  return (
    <>
        { (items.length ? 
            <UnList
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />:
        <p>Your List is Empty</p>)}
    </>
  )
}

export default Content