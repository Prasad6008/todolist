import React from 'react'
import { FaTrash } from 'react-icons/fa'

const List = ({items,handleCheck,handleDelete}) => {
  return (
    <div>
        {items.map( i => (
            <li className='item' key = {i.id}>
                <input 
                type="checkbox"
                checked = {i.check}
                onChange={() => handleCheck(i.id)}
                />
                <label 
                style={i.check ? {textDecoration:'line-through'}:null}
                htmlFor="">{i.task}</label>
                <button
                onClick={() =>handleDelete(i.id)}
                >
                    <FaTrash/>
                </button>
            </li>
        ))}
    </div>
  )
}

export default List