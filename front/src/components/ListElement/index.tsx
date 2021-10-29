import { FC } from "react"

import { ListElementProps } from "./interfaces/types"

import './styles/list-element.css'

const ListElement: FC<ListElementProps> = ({text, backgroundColor, postalCode}) => {
  return (
    <div style={{backgroundColor: backgroundColor ? backgroundColor : '#161C29'}} className="list-element-wrapper">
      {
        postalCode ?
          <div className="list-element-flex">
            <div className="list-element-flex-content">
              <p>{text}</p>
            </div>
            <p id="postalCode">{postalCode}</p>
          </div>
        :
        <p>{text}</p>
      }
    </div>
  )
}

export default ListElement