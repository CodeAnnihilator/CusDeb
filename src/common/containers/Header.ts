import { connect } from 'react-redux'

import Header from '../components/Header/Header'

import {
  getTotalLounches,
  getTotalSuccededLaunches,
  getTotalUpcomingLaunches
} from '../selectors/entities'

const mapStateToProps = state => ({
  totalLounches: getTotalLounches(state),
  totalSuccededLaunches: getTotalSuccededLaunches(state),
  totalUpcomingLaunches: getTotalUpcomingLaunches(state)
})

export default connect(mapStateToProps, null)(Header)