import React, {Fragment} from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
   <Fragment>
     <header className={classes.header}>
       <h1>Reastaurant's Meal Variety</h1>
      <HeaderCartButton onClick={props.onShowCart}/>
     </header>
     <div className={classes['main-image']}>
       <img src="https://www.dailynews.com/wp-content/uploads/2020/12/SGT-L-DINE-SUSHIROLLS-1204-4-1.jpg?w=1020" alt="Sushi table"/>
     </div>
   </Fragment>
  )
}

export default Header