import React, { useState } from 'react'
import { history } from '../redux'

const MainInput = () => {
  const [userName, setUserName] = useState('')

  const doClick = () => {
    history.push(`/${userName}`)
  }
  const doChange = (e) => {
    setUserName(e.target.value)
  }
  return (
    <div className="bg-teal-500 text-white font-bold rounded-lg border shadow-lg">
      <input
        id="input-field"
        plaseholder="Search"
        type="text"
        value={userName}
        onChange={doChange}
      />
      <button id="search-button" type="button" onClick={doClick}>
        Search
      </button>
    </div>
  )
}

MainInput.propTypes = {}
export default MainInput
