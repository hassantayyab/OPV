// import Router from 'next/router'

// export const fixTimeoutTransition = (timeout) => {
//   Router.events.on('beforeHistoryChange', () => {
//     // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
//     // if Next.js is going to remove them or not since we are going to remove the copies ourselves
//     // later on when the transition finishes.
//     const nodes = document.querySelectorAll(
//       'link[rel=stylesheet], style:not([media=x])'
//     )
//     const copies = [...nodes].map((el) => el.cloneNode(true))

//     for (const copy of copies) {
//       // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
//       // change process.
//       copy.removeAttribute('data-n-p')
//       copy.removeAttribute('data-n-href')

//       // Add duplicated nodes to the DOM.
//       document.head.appendChild(copy)
//     }

//     const handler = () => {
//       // Emulate a `.once` method using `.on` and `.off`
//       Router.events.off('routeChangeComplete', handler)

//       window.setTimeout(() => {
//         for (const copy of copies) {
//           // Remove previous page's styles after the transition has finalized.
//           document.head.removeChild(copy)
//         }
//       }, timeout)
//     }

//     Router.events.on('routeChangeComplete', handler)
//   })
// }

import { useEffect } from 'react'

export function FixTimeoutTransition() {
  useEffect(() => {
    Array.from(
      document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
    ).forEach((node) => {
      node.removeAttribute('data-n-p')
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
  return null
}
