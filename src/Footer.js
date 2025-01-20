import React from 'react'

const Footer = ({task_count}) => {
  return (
    <footer>
        {`You have to Complete ${task_count} ${task_count === 1 ?
            "Task" : "Tasks"
        }`}
    </footer>
  )
}

export default Footer