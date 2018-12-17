export const getLounches = state => state.getIn(['entities', 'lounches'])
export const getTotalLounches = state => state.getIn(['entities', 'lounches']).size