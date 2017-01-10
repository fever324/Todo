import { SET_VISIBILITY_FILTERS, VisibilityFilters } from '../actions/actionTypes'

export default function visibilityFilter (state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTERS:
      return action.filter
    default:
      return state
  }
}