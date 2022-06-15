import React from 'react'
import classes from './MealSummary.module.css'

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food delivered to you</h2>
      <p>Chef Nozomu Abe's vision to create a superlative dining experience – memorable, intimate, elegant, and a feast for the senses – was inspired by childhood memories of extraordinary fish from his grandfather's seafood company in Hokkaido.</p>
      <p>We invite you to think of sushi preparation as a performance, and our counter as the stage. We welcome you as our audience, to watch as our leading actor, Nozomu-Abe, swiftly and expertly prepares each mouth-watering course for you.</p>
    </section>
  )
}



export default MealSummary