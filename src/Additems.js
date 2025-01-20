import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additems = ({newItem,handleSubmit,setNewItem}) => {

  const focusArea = useRef()
  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
        type="text" 
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
        ref={focusArea}
        />
        <button
        onClick={() => focusArea.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default Additems