export const updateIndicator = (link, nav) => {
  nav.current.style.setProperty('--indicator-left', `${link.left}px`)
  nav.current.style.setProperty('--indicator-width', `${link.width}px`)
}

export const resetIndicator = (link, nav) => {
  nav.current.style.setProperty('--indicator-left', `${link.left}px`)
  nav.current.style.setProperty('--indicator-width', `${link.width}px`)
}
