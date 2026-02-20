import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {


    const parems = useParams()
    console.log(parems.courseId)


  return (
    <div>
      <h1>{parems.courseId} Course Page</h1>
    </div>
  )
}

export default AnyCourse
