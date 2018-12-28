import { connect } from 'react-redux'

import Dashboard from '../Dashboard'

import { getImages } from 'common/selectors/entities'
import { requestImages } from 'common/actions/entities'
import { selectImage } from '../actions/dashboard'

const mapStateToProps = state => ({
  images: getImages(state)
})

const mapDispatchToProps = (dispatch) => ({
  requestImages: () => dispatch(requestImages()),
  selectImage: (name) => dispatch(selectImage(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)