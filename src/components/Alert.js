import React from 'react'

function Alert(props) {
  const convert = (item) => {
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"><strong>{convert(props.alert.type)}</strong>{props.alert.message}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
  )
}

export default Alert
