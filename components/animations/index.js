import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const DELAY = 0.5

// THIS ANIMATION NEEDS TO BE REMOVED AND
// SHOULD ONY BE USED AS A REFERENCE
export const introText = (elements) => {
  const fromOpts = {
    scale: 0.2,
    opacity: 0,
  }

  const toOpts = {
    duration: 1.2,
    scale: 1,
    opacity: 1,
    xPercent: 0,
    ease: 'sine',
  }

  const t1 = gsap.timeline()
  const t2 = gsap.timeline()
  const t3 = gsap.timeline()

  t1.set(elements[0], { xPercent: -100, ...fromOpts })
  t2.set(elements[1], { xPercent: 100, ...fromOpts })
  t3.set(elements[2], { xPercent: -100, ...fromOpts })

  // This animation has an issue of showing
  // the elements in their inititial state before
  // the animation starts playing. To solve this you
  // have 2 options:
  // (1) Apply the init state in CSS e.g. if an element goes from opacity: 0 -> 1, use opacity: 0 in its CSS [BEST SOLUTION]
  // (2) Use gsap.set() to set the init state and then use gsap.to() to run the animation
  const animate = () => {
    t1.to(elements[0], {
      delay: 0,
      ...toOpts,
    })
    t2.to(elements[1], {
      delay: 0.1,
      ...toOpts,
    })
    t3.to(elements[2], {
      delay: 0.5,
      duration: 1,
      ...toOpts,
    })
  }
  // Always apply a delayed call for best results
  // Animations that start on scroll may not need this, however,
  // please test this yourself before updating the code.
  gsap.delayedCall(DELAY, animate)
}

// NOT USED
export const rotating = (elements, opts) => {
  gsap.from(elements, {
    duration: 2,
    x: -50,
    rotate: -360,
    ease: 'power4.out',
    ...opts,
  })
}

export const slideLeftFadeIn = (elements, opts) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      x: 50,
    },
    {
      duration: 0.5,
      opacity: 1,
      x: 0,
      ...opts,
    }
  )
}

export const fadeIn = (elements, opts) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
    },
    {
      duration: 0.5,
      opacity: 1,
      ...opts,
    }
  )
}

export const fadeOut = (elements, opts) => {
  gsap.fromTo(
    elements,
    {
      opacity: 1,
    },
    {
      duration: 0.5,
      opacity: 0,
      ...opts,
    }
  )
}

export const zoomIn = (element, opts) => {
  gsap.from(element, {
    duration: 1,
    scale: 0,
    opacity: 0,
    ...opts,
  })
}

export const staggerLines = (elements, opts) => {
  gsap.set(elements, { yPercent: 100, opacity: 0, ...opts })

  ScrollTrigger.batch(elements, {
    interval: 0.1, // time window (in seconds) for batching to occur.
    onEnter: (batch) =>
      gsap.to(batch, {
        duration: 0.7,
        y: 0,
        yPercent: 0,
        opacity: 1,
        ease: 'power2',
        stagger: 0.1,
        overwrite: true,
      }),
  })
}
