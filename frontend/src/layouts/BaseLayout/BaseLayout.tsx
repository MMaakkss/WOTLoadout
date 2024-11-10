import { Outlet } from 'react-router-dom'
import classes from './BaseLayout.module.scss'

export default function BaseLayout() {
  return (
    <>
      <div className={classes.wrapper}>
        <header>Header</header>
        <main className={classes.main}>
          <div className={classes.container}>
            <Outlet />
          </div>
        </main>
        <footer>Footer</footer>
      </div>
    </>
  )
}
