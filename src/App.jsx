import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/Landing/NavBar';

const App = () => {
  const Path = window.location.pathname
  const [headerData,setHeaderData]=useState("")
  useEffect(() => {
    setHeaderData("");
  },[Path])
  return (
    <div>
      <Helmet>
        <title>Portfolio - {headerData}</title>
      </Helmet>
      <Navbar/>
    </div>
  );
}

export default App
