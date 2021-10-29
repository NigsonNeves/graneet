import { FC } from "react"
import { TitleProps } from "./interfaces/types"

import './styles/title.css'

const Title: FC<TitleProps> = ({title}) => {
  return (
    <div className="title-wrapper">
      <h1>{title}</h1>
    </div>
  )
}

export default Title