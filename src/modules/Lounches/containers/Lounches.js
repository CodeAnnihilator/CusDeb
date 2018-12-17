import { connect } from 'react-redux'

import Lounches from '../Lounches'

import { getLaunches } from 'common/selectors/entities'
import { requestLounches } from 'common/actions/entities'

const mapStateToProps = state => ({
  launches: getLaunches(state)
})

const mapDispatchToProps = dispatch => ({
  requestLounches: () => dispatch(requestLounches())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lounches)