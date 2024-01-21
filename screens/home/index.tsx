'use client'
import { RootState } from '@/lib/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Index = () => {
  //const { HandleSetName } = useSetName()
  const todoList = useSelector((state: RootState) => state.setName.name)
  console.log(name)
  useEffect(() => {
    // HandleSetName()
  }, [])

  return (
    <div>
      <h1>Aboutsssss</h1>
    </div>
  )
}

export default Index
