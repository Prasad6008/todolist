import React, { useEffect, useState } from 'react'

const Project4 = () => {

  const APL_LINK = "https://jsonplaceholder.typicode.com"

  const [resource,setResource] = useState('albums')
  const [data,setData] = useState(null)

  const [isLoading,setIsLoading] = useState(true)
  const [fetchError,setFetchError] = useState(null)

  useEffect( () =>
  {
    const fetchData = async() => 
    {
      try 
      {
        const responses = await fetch(`${APL_LINK}/${resource}`)
        if(!responses.ok) throw Error('Data not found...')
        const jsformat = await responses.json()
        setData(jsformat)
      }
      catch(err)
      {
        setFetchError(err)
      }
      finally 
      {
        setIsLoading(false)
      }
    }
    setTimeout( () =>
    {
      fetchData()
    },2000)
  },[resource])

  return (
    <div>

      <div id="button_div">
        <button
        onClick={() => setResource('albums')}
        >albums</button>
        <button
        onClick={() => setResource('photos')}
        >photos</button>
        <button
        onClick={() => setResource('todos')}
        >todos</button>
      </div>

      {isLoading && <p>Loading data...</p>}
      {fetchError && <p>{`${fetchError}`}</p>}
      { !isLoading && !fetchError && 
        <div id="data">
          {(data ? 
            <ul>
              { data.map( i => 
                (
                  <li
                  key={i.id}
                  >{JSON.stringify(i)}</li>
                )
              )}
            </ul>
            : <p>No data no show</p>
          )}
        </div>
      }
      

    </div>
  )
}

export default Project4