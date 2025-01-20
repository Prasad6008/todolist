import React from 'react'
import List from './List'

const UnList = ({items,handleCheck,handleDelete}) => {
  return (
    <div>
        <List
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
    </div>
  )
}

export default UnList