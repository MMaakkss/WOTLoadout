import { Outlet } from 'react-router-dom'
import classes from './AuthLayout.module.scss'

export default function AuthLayout() {
  return (
    <>
      <div className={classes.wrapper}>
        <main className={classes.main}>
          <div className={classes.container}>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}
