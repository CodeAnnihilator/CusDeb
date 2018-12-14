import { connect } from 'react-redux'

import Lounches from '../Lounches'

import { getLounches } from 'common/selectors/entities'
import { requestLounches } from 'common/actions/entities'

const mapStateToProps = state => ({
  lounches: getLounches(state)
})

const mapDispatchToProps = dispatch => ({
  requestLounches: () => dispatch(requestLounches())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lounches)