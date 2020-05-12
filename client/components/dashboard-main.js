import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/b7df2f70-6d20-4bd8-9eb7-521664ed95f3"> Go To Profile </Link>
      <Link to="/dashboard/main"> Go To Root </Link>
    </div>
  )
}

DashboardMain.propTypes = {}
export default DashboardMain