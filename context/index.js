import React, { useState, useContext, useEffect } from 'react'
import { useProgress } from '@react-three/drei'
// import { useRouter } from 'next/router'

const ReadyContext = React.createContext({
  isReady: false,
  activeLinkOffsets: {
    left: 0,
    width: 0,
  },
  setActiveLinkOffset: () => {},
})

function ReadyProvider({ children }) {
  const [isReady, setReady] = useState(false)
  const [activeLinkOffsets, setActiveLinkOffset] = useState({
    left: 0,
    width: 0,
  })

  const { progress } = useProgress()
  useEffect(() => {
    if (progress === 100) setTimeout(() => setReady(true), 1000)
  }, [progress])

  //   const router = useRouter()
  //   useEffect(() => {
  //     const handleRouteChange = () => {}
  //     router.events.on('routeChangeStart', handleRouteChange)
  //     router.events.on('routeChangeComplete', handleRouteChange)
  //     return () => {
  //       router.events.off('routeChangeStart', handleRouteChange)
  //       router.events.off('routeChangeComplete', handleRouteChange)
  //       router.events.off('routeChangeError', handleRouteChange)
  //     }
  //   }, [router.events])

  const value = { isReady, activeLinkOffsets, setActiveLinkOffset }

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
