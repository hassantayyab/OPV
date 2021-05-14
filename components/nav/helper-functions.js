export const updateIndicator = (left, width, nav) => {
  nav.current.style.setProperty('--indicator-left', `${left}px`)
  nav.current.style.setProperty('--indicator-width', `${width}px`)
}

export const resetIndicator = (left, width, nav) => {
  nav.current.style.setProperty('--indicator-left', left)
  nav.current.style.setProperty('--indicator-width', width)
}
