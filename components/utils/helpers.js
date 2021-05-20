export function clamp(min, value, max) {
  return Math.max(min, Math.min(value, max))
}

export function norm(value, min = 320, max = 1600) {
  return (value - min) / (max - min)
}

export function responsive(size, breakpoint) {
  if (size <= 500) {
    return breakpoint.xs
  }
  if (size <= 768) {
    return breakpoint.sm
  }
  if (size <= 1024) {
    return breakpoint.md
  }
  if (size <= 1440) {
    return breakpoint.lg
  }
  if (size >= 2500 && breakpoint.xxl) {
    return breakpoint.xxl
  }
  return breakpoint.xl
}
