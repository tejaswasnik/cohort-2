import React from 'react'
import { useParams } from 'react-router-dom'
const CourseDetail = () => {
    const parems = useParams()
  return (
    <div>
      <h1>{parems.courseId} Detail Page</h1>
    </div>
  )
}

export default CourseDetail
