import { gsap } from 'gsap'

const DELAY = 0.5

// THIS ANIMATION NEEDS TO BE REMOVED AND
// SHOULD ONY BE USED AS A REFERENCE
export const introText = (elements) => {
  const opts = {
    duration: 1.2,
    scale: 0.2,
    opacity: 0,
    ease: 'sine',
  }

  // This animation has an issue of showing
  // the elements in their inititial state before
  // the animation starts playing. To solve this you
  // have 2 options:
  // (1) Apply the init state in CSS e.g. if an element goes from opacity: 0 -> 1, use opacity: 0 in its CSS [BEST SOLUTION]
  // (2) Use gsap.set() to set the init state and then use gsap.to() to run the animation
  const animate = () => {
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
  // Always apply a delayed call for best results
  // Animations that start on scroll may not need this, however,
  // please test this yourself before updating the code.
  gsap.delayedCall(DELAY, animate)
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
  const animate = () =>
    gsap.from(element, {
      scrollTrigger: { trigger: element },
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: 'power4.inOut',
      ...opts,
    })
  gsap.delayedCall(DELAY, animate)
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
