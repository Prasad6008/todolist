// //Project 1: """Random Words Generator"""

// import React, { useState } from 'react'

// const App = () => {

//   function random_words() 
//   {
//     let words = ['Spend','Grow','Earn']
//     let random_num = Math.floor(Math.random()*3)

//     setWord(words[random_num])
//   }

//   const [word,setWord] = useState('Earn')
//   return (
//     <div>
//       <p>Let us {word} Money</p>
//       <button
//       onClick={ () => random_words()}
//       >Change</button>
//     </div>
//   )
// }
// export default App
// //--------------------------------------------------------------




// //Project 2:  """Increment and Decrement"""

// import React, { useState } from 'react'

// const App = () => {

//   const [number,setNumber] = useState(99)

//   const dec = (n) =>
//   {
//     setNumber(n-1)
//   }

//   const inc = (n) =>
//   {
//     // setNumber(()=> {return n+1})
//     setNumber(()=> (n+1))
//   }
//   return (
//     <div>
//       <button
//       onClick={() => dec(number)}
//       >-</button>
//       <p>{number}</p>
//       <button
//       onClick={() => inc(number)}
//       >+</button>
//     </div>
//   )
// }
// export default App
// //--------------------------------------------------------------




// //Project 3: """TodoList""" Level 1
// import React from 'react'
// import { FaTrash} from 'react-icons/fa'

// const App = () => {


//   const items = 
//    [
//       {
//         id: 1,
//         check: false,
//         task: "Play Cricket",
//       },
//       {
//         id: 2,
//         check: true,
//         task: "Practice Coding",
//       },
//       {
//         id: 3,
//         check: false,
//         task: "study"
//       }
//     ]

//   return (
//     <div>
//       { (items.length > 0 ?
//         <ul>
//           { items.map( i => (
//             <li key = {i.id}>
//               <input 
//               type="checkbox"
//               checked = {i.check}
//               />
//               <label htmlFor="">{i.task}</label>
//               <button>
//                 <FaTrash/>
//               </button>
//             </li>
//           ))}
//         </ul>:
//         <p>Your List is Empty</p>
//       )}
//     </div>
//   )
// }
// export default App
// //--------------------------------------------------------------




// //Project 3: """TodoList""" Level 2: """Props and drilling"""
// // "" useRef "" , 
// import React, { useState } from 'react'
// import Header from './Header'
// import Content from './Content'
// import Footer from './Footer'
// import Additems from './Additems'

// const App = () => {
//   const title = "Todo list"
//   // const [items,setItem] = useState(
//   //   [
//   //     {
//   //       id: 1,
//   //       check: false,
//   //       task: "Play Cricket",
//   //     },
//   //     {
//   //       id: 2,
//   //       check: true,
//   //       task: "Practice Coding",
//   //     },
//   //     {
//   //       id: 3,
//   //       check: false,
//   //       task: "study"
//   //     }
//   //   ]
//   // )

//   const [items,setItems] = useState(JSON.parse(localStorage.getItem('Tasks')) || [])

//   const handleCheck = (id) =>
//   {
//     const list = items.map(i => 
//       i.id === id ? {id:id,check:!i.check,task:i.task}:i)
//       setItems(list)
//       localStorage.setItem('Tasks',JSON.stringify(list))
//   }

//   const handleDelete = (id) =>
//   {
//     const list = items.filter(i => i.id !== id )
//     setItems(list)
//     localStorage.setItem('Tasks',JSON.stringify(list))
//   }

//   const [newItem,setNewItem] = useState('')

//   const addNewItem  = (newItem) =>
//   {
//     const id = items.length ? items[items.length-1].id + 1 : 1
//     const list = [...items,{id:id,check:false,task:newItem}]
//     setItems(list)
//     localStorage.setItem('Tasks',JSON.stringify(list))
//   }

//   const handleSubmit = (e) =>
//   {
//     e.preventDefault()
//     addNewItem(newItem)
//     setNewItem('')
//   }


//   return (
//     <div>
//       <Header
//       title = {title}
//       />
//       <Additems
//       newItem = {newItem}
//       setNewItem = {setNewItem}
//       handleSubmit = {handleSubmit}
//       />
//       <Content
//       items = {items}
//       handleCheck = {handleCheck}
//       handleDelete = {handleDelete}
//       />
//       <Footer
//       task_count = {items.length}
//       />
//     </div>
//   )
// }
// export default App
////-----------------------------------------------------------------

// //Project 3 Color Changer
// import React, { useState } from 'react'
// import colorNames from 'colornames'

// const App = () => {

//   const [colorName,setColorName] = useState('')
//   const [colorCode,setColorCode] = useState('')
//   const [isBlack  ,setisBlack  ] = useState(true)

//   const handleSubmit = (e) =>
//   {
//     e.preventDefault()
//   }
//   return (
//     <form action="" className="proj3" onSubmit={(e)=>handleSubmit(e)}>
//       <div 
//       className="box"
//       style={
//         {backgroundColor:colorName,
//           color:isBlack?'#FFFFFF':'#000000'
//         }
//       }
//       >
//           <h1>{colorName}</h1>
//           <p>{colorCode}</p>
//       </div>
//       <input
//       value = {colorName}
//       onChange={(e)=> {
//         setColorName(e.target.value)
//         setColorCode(colorNames(e.target.value))
//       }}
//       type="text" 
//       />
//       <button
//       onClick={()=>setisBlack(!isBlack)}
//       >Toggle Color</button>
//     </form>
//   )
// }

// export default App
////----------------------------------------------------------------

//Project 3: """TodoList""" Level 2: """Props and drilling"""
// "" useRef "" ,  DataBase , A{I Fetch....}
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Additems from './Additems'
import apiRequest from './apiRequest'

const App = () => {
  const title = "Todo list"
  // const [items,setItem] = useState(
  //   [
  //     {
  //       id: 1,
  //       check: false,
  //       task: "Play Cricket",
  //     },
  //     {
  //       id: 2,
  //       check: true,
  //       task: "Practice Coding",
  //     },
  //     {
  //       id: 3,
  //       check: false,
  //       task: "study"
  //     }
  //   ]
  // )

  const [items,setItems] = useState([])



  //Read the data:  READ

  const AIP_LINK = 'http://localhost:3500/items'

  const [fetchError,setFetchError] = useState('')

  useEffect( () =>
  {
    const fetchData = async() =>
    {
      try
      {
        const responses = await fetch(AIP_LINK)
        if(!responses.ok) throw Error('Data not found...')
        const jsformat = await responses.json()
        setItems(jsformat)
        setFetchError('')
      }
      catch(err)
      {
        setFetchError(err)
      }
    }
    fetchData()
  },[])

  const handleCheck = async(id) =>
  {
    const list = items.map(i => 
      i.id === id ? {id:id,check:!i.check,task:i.task}:i)
      setItems(list)

    const myItem = items.find(i => i.id === id)
    
    const mode = {
      method : 'PATCH',
      headers : {'Content-Type':'application/json'},
      body : JSON.stringify({check:!myItem.check})
    }

    console.log(mode.body)

    const reqUrl = `${AIP_LINK}/${id}`
    console.log(reqUrl)
    const request = await apiRequest(reqUrl,mode)
    if(request) setFetchError(request)
  }

  const handleDelete = async(id) =>
  {
    const list = items.filter(i => i.id !== id )
    setItems(list)

    const mode = {method : 'DELETE'}

    const reqUrl = `${AIP_LINK}/${id}`
    const request = await apiRequest(reqUrl,mode)
    if(request) setFetchError(request)

  }

  const [newItem,setNewItem] = useState('')

  const addNewItem  = async(newItem) =>
  {
    const id = items.length > 0 ? String(Number(items[items.length-1].id) + 1) : "1"
    let asObj = {id:id,check:false,task:newItem}
    let list = [...items,asObj]
    setItems(list)

    console.log(id)

    const mode = {
      method : 'POST',
      headers : { 'Content-Type' : 'application/json'},
      body : JSON.stringify(asObj)
    }

    const request = await apiRequest(AIP_LINK,mode)
    if(request) setFetchError(request)
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    addNewItem(newItem)
    setNewItem('')
  }


  return (
    <div>
      <Header
      title = {title}
      />
      <Additems
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <main>
        {fetchError && <p>{`${fetchError}`}</p> ||
      <Content
      items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />}
      </main>
      <Footer
      task_count = {items.length}
      />
    </div>
  )
}
export default App