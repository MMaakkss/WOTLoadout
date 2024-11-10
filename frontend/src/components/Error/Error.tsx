import { CiWarning } from 'react-icons/ci'
import classes from './Error.module.scss'

const Error = () => {
  return (
    <div className={classes.error}>
      <CiWarning className={classes.errorIcon} />
      <p className={classes.errorTitle}>Something went wrong!</p>
      <p className={classes.errorText}>Please try again</p>
    </div>
  )
}

export default Error
