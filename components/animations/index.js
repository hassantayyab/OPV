import { gsap } from 'gsap'

export const introText = (elements) => {
  const opts = {
    duration: 1.2,
    scale: 0.2,
    opacity: 0,
    ease: 'sine',
  }

  gsap.from(elements[0], {
    ...opts,
    delay: 0,
    xPercent: -100,
  })
  gsap.from(elements[1], {
    ...opts,
    delay: 0.1,
    xPercent: 100,
  })
  gsap.from(elements[2], {
    ...opts,
    delay: 0.5,
    xPercent: -100,
    duration: 1,
  })
}

export const rotating = (elements, opts) => {
  gsap.from(elements, {
    duration: 2,
    x: -50,
    rotate: -360,
    ease: 'power4.out',
    ...opts,
  })
}

export const fadeIn = (elements, opts) => {
  gsap.from(elements, {
    duration: 1.2,
    opacity: 0,
    ease: 'easInOut',
    ...opts,
  })
}

export const slideUp = (element, opts) => {
  gsap.from(element, {
    scrollTrigger: { trigger: element },
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power4.inOut',
    ...opts,
  })
}

export const slideLeft = (element, opts) => {
  gsap.from(element, {
    scrollTrigger: { trigger: element },
    duration: 1.2,
    xPercent: 100,
    opacity: 0,
    ease: 'easeInOut',
    ...opts,
  })
}

export const zoomIn = (element, opts) => {
  gsap.from(element, {
    duration: 1.2,
    scale: 0,
    opacity: 0,
    ease: 'power4.inOut',
    ...opts,
  })
}

export const staggerLines = (container, elements, scrollOpts, opts) => {
  gsap.from(elements, {
    scrollTrigger: { trigger: container, ...scrollOpts },
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.inOut',
    stagger: {
      amount: 0.2,
    },
    ...opts,
  })
}
