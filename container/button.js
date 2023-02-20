import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ label, onClick, disabled,type }) => {
  return (
    <button
      // className="bg-[#8BC940] text-white active:bg-gray-700 text-sm font-bold uppercase
      //                  px-6 py-5 rounded absolute right-0 shadow hover:shadow-lg outline-none focus:outline-none mr-1 -mb-1 w-[100px]
      //                  bottom-0 "
      className="bg-[#8BC940] hover:bg-[#5AB025] text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      style={{ transition: 'all .15s ease' }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

export default Button