import { Outlet } from 'react-router-dom'
import classes from './BaseLayout.module.scss'

export default function BaseLayout() {
  return (
      <>
        <div className={classes.wrapper}>
          <header>Header</header>
          <main className={classes.main}>
            <Outlet />
          </main>
          <footer>Footer</footer>
        </div>
      </>
  )
}
