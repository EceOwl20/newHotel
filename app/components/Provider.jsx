"use client"
import React from 'react'
import NavbarServer from '../api/text/NavbarServer';

const Provider = ({children}) => {
  return (
    <NavbarServer/>
  )
}

export default Provider
