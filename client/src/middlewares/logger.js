const logger = store => next => action => {
  if (process.env.NODE_ENV === 'production' || !console.group) {
    return next(action)
  }

  console.group(action.type)
  console.log('%c previous state', 'color: grey', store.getState())
  console.log('%c action', 'color: blue', action)
  let result = next(action)
  console.log('%c next state', 'color: green', store.getState())
  console.groupEnd(action.type)
  return result
}

export default logger
