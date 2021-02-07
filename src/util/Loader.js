import React from 'react'
import loader from './loading.gif'

const style = { display: 'block', margin: 'auto' }

const Loader = () => {
  return <img src={loader} style={style} height="128" alt="Loading..."/>
}

export default Loader
