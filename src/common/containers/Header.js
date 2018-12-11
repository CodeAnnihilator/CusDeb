import { connect } from 'react-redux'

import Header from '../components/Header/Header'

import { getTotalLounches } from '../selectors/entities'

const mapStateToProps = state => ({
  totalLounches: getTotalLounches(state)
})

export default connect(mapStateToProps, null)(Header)