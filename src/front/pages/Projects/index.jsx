import React from 'react'
import { useParams } from 'react-router-dom'

const Projects = () => {
  const { id } = useParams()

  return (
    <div className="container">
      <main>Hello world! ID: {id}</main>
    </div>
  )
}

export default Projects
