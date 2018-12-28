import { connect } from 'react-redux'

import Dashboard from '../Dashboard'

import { getImages } from 'common/selectors/entities'
import { requestImages } from 'common/actions/entities'

const mapStateToProps = state => ({
  images: getImages(state)
})

const mapDispatchToProps = (dispatch) => ({
  requestImages: () => dispatch(requestImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)