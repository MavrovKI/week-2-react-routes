import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import MainInput from './main-input'
import RepositoryList from './repository-list'
import RepositoryName from './repository-name'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repo, setRepo] = useState([])
  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
        const namesArr = it.data.map((res) => res.name)
        setRepo(namesArr)
      })
    }
  }, [userName])

  const [text, setText] = useState('')

  useEffect(() => {
    if (typeof userName !== 'undefined' && typeof repositoryName !== 'undefined') {
      const headers = { Accept: 'application/vnd.github.VERSION.raw' }
      axios
        .get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
          param: {},
          headers
        })
        .then((it) => setText(it.data))
    }
    return () => {}
  }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <div className="font-bold rounded-lgborder shadow-lg">
        <Switch>
          <Route exact path="/" component={() => <MainInput />} />
          <Route
            exact
            path="/:userName"
            component={() => <RepositoryList repo={repo} userName={userName} />}
          />
          <Route
            exact
            path="/:userName/:repositoryName"
            component={() => <RepositoryName text={text} />}
          />
        </Switch>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
