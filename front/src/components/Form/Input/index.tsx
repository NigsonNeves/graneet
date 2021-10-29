import { FC } from "react"
import { InputProps } from "./interfaces/types"

import './styles/input.css'

const Input: FC<InputProps> = ({...rest}) => {
  return (
    <div className="input">
      <input {...rest}/>
    </div>
  )
}

export default Input