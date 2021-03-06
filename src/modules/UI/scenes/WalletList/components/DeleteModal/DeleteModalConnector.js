// @flow

import { connect } from 'react-redux'

import * as Constants from '../../../../../../constants/indexConstants.js'
import type { Dispatch, State } from '../../../../../ReduxTypes'
import { CLOSE_MODAL_VALUE, VISIBLE_MODAL_NAME } from '../WalletOptions/action'
import DeleteModal from './DeleteModal.ui'

const mapStateToProps = (state: State) => ({
  visibilityBoolean: state.ui.scenes.walletList[VISIBLE_MODAL_NAME(Constants.DELETE_VALUE)]
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onExitButtonFxn: () => dispatch({ type: CLOSE_MODAL_VALUE(Constants.DELETE_VALUE) })
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal)
