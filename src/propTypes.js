import { PropTypes } from 'react'

export default {
  model: PropTypes.object.isRequired,
  setModel: PropTypes.func.isRequired,
  setProperty: PropTypes.func.isRequired,
  bindInput: PropTypes.func.isRequired,
  bindToChangeEvent: PropTypes.func.isRequired,
}
