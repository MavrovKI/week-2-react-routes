import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title"> Dashboard </div>
      <Link to="/dashboard/profile/b7df2f70-6d20-4bd8-9eb7-521664ed95f3"> Go To Profile </Link>
      <Link to="/dashboard/main"> Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}
export default Dashboard