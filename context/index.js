import React, { useState, useContext, useEffect } from 'react'
import { useProgress } from '@react-three/drei'

const ReadyContext = React.createContext({})

function ReadyProvider({ children }) {
  const [isReady, setReady] = useState(false)

  const { progress } = useProgress()
  useEffect(() => {
    if (progress === 100) setTimeout(() => setReady(true), 1000)
  }, [progress])

  const value = { isReady, progress }

  return <ReadyContext.Provider value={value}>{children}</ReadyContext.Provider>
}

function useReady() {
  const context = useContext(ReadyContext)
  if (context === undefined) {
    throw new Error('useReady must be used within a ReadyProvider')
  }
  return context
}

export { ReadyProvider, useReady }
