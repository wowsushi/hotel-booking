import React from 'react'

const Input = (props) => {
  const { handleValueChange, type} = props
  switch (type) {
    case 'date':
    case 'email':
    case 'phone':
    case 'text': {
      return (
        <div className={`form-group ${props.id}`}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            onChange={e => handleValueChange(props.id, e.target.value)}
          />
        </div>
      )
    }
    case 'checkbox': {
      return (
        <div className={`form-group ${props.id}`}>
          <input type={props.type} id={props.id} />
          <label htmlFor={props.id}>{props.label}</label>
        </div>
      )
    }
    case 'select': {
      let options = []

      if (props.id === "title") {
        options.push(
          <option key="ms" value="ms" >女士</option>,
          <option key="mr" value="mr" >先生</option>
        )
      } else {
        for (let i=0; i<10; i++) {
          if (props.unit !== "人" && i === 0) continue

          options.push(
            <option key={i} value={i}>{`${i}${props.unit}`}</option>
            )
          }
        }
        const { handleValueChange } = props

      return (
        <div className={`form-group ${props.id}`}>
          <label htmlFor={props.id}>{props.label}</label>
          <select onChange={handleValueChange}>
            {options}
          </select>
        </div>
      )
    }
    default: {
      console.log('error')
    }
  }
}

export default Input
