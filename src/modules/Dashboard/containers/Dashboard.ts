import { connect } from 'react-redux'

import Dashboard from '../Dashboard'

// import { getLaunches } from 'common/selectors/entities'
// import { requestLounches } from 'common/actions/entities'

// const mapStateToProps = state => ({
//   launches: getLaunches(state)
// })

// const mapDispatchToProps = dispatch => ({
//   requestLounches: () => dispatch(requestLounches())
// })

export default connect(null, null)(Dashboard)