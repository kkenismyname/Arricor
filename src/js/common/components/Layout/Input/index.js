import React from 'react'

import './style.scss'

export default ({
  type,
  value,
  placeholder,
  onChange,
  onClick,
  options,
  label,
  checked,
}) => {
  if (type === 'text') {
    return <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
  }
  if (type === 'email') {
    return <input type="email" value={value} placeholder={placeholder} onChange={onChange} />
  }
  if (type === 'tel') {
    return <input type="tel" value={value} placeholder={placeholder} onChange={onChange} />
  }
  if (type === 'button') {
    return <input type="button" value={value} onClick={onClick} />
  }
  if (type === 'select') {
    return (
      <select onChange={onChange} value={value}>
        {
          placeholder && <option value="" disabled>{placeholder}</option>
        }
        {
          options && options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))
        }
      </select>
    )
  }
  if (type === 'radio') {
    return (
      <label htmlFor={label} className="radio-button">
        <input type="radio" id={label} name={label} value={value} checked={checked} onChange={onChange} />
        <span className="checkmark" />
        {label}
      </label>
    )
  }
  return null
}
