import React from 'react'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal(props) {
  if (props.open=="0") return null

  return(
    <div>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <div class="modal-body">
      Add new contact
      </div>
      <div><input></input>  
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" onClick={props.onClose}>Add</button>
      </div>
      </div>
    </div>
  )
}

