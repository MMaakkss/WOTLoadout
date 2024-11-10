import classes from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.loader}>
        <div className={classes.center}></div>
        <div className={classes.second}></div>
        <div className={classes.main}></div>
      </div>
    </div>
  )
}

export default Loading
