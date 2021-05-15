import { useEffect } from 'react'

export function useFixTimeout() {
  useEffect(() => {
    Array.from(
      document.querySelectorAll('link[rel=stylesheet], style:not([media=x])')
    ).forEach((node) => {
      node.removeAttribute('data-n-p')
      node.removeAttribute('data-n-href')
    })
    const mutationHandler = (mutations) => {
      mutations.forEach(({ target }) => {
        if (target.nodeName === 'STYLE') {
          if (target.getAttribute('media') === 'x') {
            target.removeAttribute('media')
          }
        }
      })
    }
    const observer = new MutationObserver(mutationHandler)
    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ['media'],
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  return true
}
