import { connect } from 'react-redux'

import Dashboard from '../Dashboard'

import { getImages } from 'common/selectors/entities'

const mapStateToProps = state => ({
  images: getImages(state)
})

export default connect(mapStateToProps, null)(Dashboard)