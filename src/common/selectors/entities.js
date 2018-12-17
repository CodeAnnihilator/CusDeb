import { createSelector } from 'reselect'

export const getLaunches = state => state.getIn(['entities', 'lounches'])

export const getTotalLounches = state => state.getIn(['entities', 'lounches']).size

export const getTotalSuccededLaunches = createSelector(
  [getLaunches],
  (launches) => {
    const succededLaunches = launches.filter(launch => launch.get('launch_success'))
    return succededLaunches.size
  }
)

export const getTotalUpcomingLaunches = createSelector(
  [getLaunches],
  (launches) => {
    const upcomingLaunches = launches.filter(launch => launch.get('upcoming'))
    return upcomingLaunches.size
  }
)