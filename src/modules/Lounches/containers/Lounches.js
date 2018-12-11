import { connect } from 'react-redux'

import Lounches from '../Lounches'

import { getLounches } from 'common/selectors/entities'
import { requestLounchesSuccess } from 'common/actions/entities'

const mapStateToProps = state => ({
  lounches: getLounches(state)
})

const mapDispatchToProps = dispatch => ({
  requestLounchesSuccess: data => dispatch(requestLounchesSuccess(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Lounches)