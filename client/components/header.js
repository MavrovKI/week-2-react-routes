import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <nav className="flex items-center justyfy-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div id="repository-name">{repositoryName || userName || 'Repository Finder'}</div>
      </div>
      {userName && (
        <div id="go-back" className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">Back to Search</Link>
        </div>
      )}
      {repositoryName && (
        <div id="go-repository-list" className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to={`/${userName}`}> Back to the List of Repositories</Link>
        </div>
      )}
    </nav>
  )
}

export default React.memo(Header)
