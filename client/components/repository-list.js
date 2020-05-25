import React from 'react'
import { Link } from 'react-router-dom'

const RepositoryList = (props) => {
  return (
    <div>
      {props.repo.map((it) => (
        <div>
          <Link to={`/${props.userName}/${it}`}>{it}</Link>
        </div>
      ))}
    </div>
  )
}

RepositoryList.propTypes = {}
export default RepositoryList
