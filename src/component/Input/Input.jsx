import React from 'react'

const Input = (props) => {
  switch (props.type) {
    case 'date':
    case 'email':
    case 'phone':
    case 'text': {
      return (
        <div className={`form-group ${props.id}`}>
          <label for={props.id}>{props.label}</label>
          <input type={props.type} id={props.id} placeholder={props.placeholder} />
        </div>
      )    
    }
    case 'checkbox': {
      return (
        <div className={`form-group ${props.id}`}>
          <input type={props.type} id={props.id} />
          <label for={props.id}>{props.label}</label>   
        </div>
      )    
    }
    case 'select': {
      let options = []
      
      if (props.id === "title") {
        options.push(
          <option value="ms" >女士</option>,
          <option value="mr" >先生</option>
        )  
      } else {
        for (let i=0; i<10; i++) {
          if (props.unit !== "人" && i === 0) continue

          options.push(
            <option value={`${i}${props.unit}`} >{`${i}${props.unit}`}</option>
          )  
        }
      }
 
      return (
        <div className={`form-group ${props.id}`}>
          <label for={props.id}>{props.label}</label>
          <select>
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