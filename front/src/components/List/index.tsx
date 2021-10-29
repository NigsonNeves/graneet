import { FC } from "react"

import ListElement from "../ListElement"
import Title from "../Title"

import { ListProps } from "./interfaces/types"

import './styles/list.css'

const List: FC<ListProps> = ({ cities, title }) => {
  return (
    <div className="list-wrapper">
      <Title title={title}/>
      <div className="list">
        {
          cities.length > 0 ?
            <>
              <ListElement backgroundColor="#39BB37" text={`${cities.length} villes correspondent au texte saisi`}/>
              <div className='list-scroll'>
                {
                  cities.map((element) => (
                    <div className='list-scroll-element'>
                      <ListElement text={element.nomCommune} postalCode={element.codePostal} />
                    </div>
                  ))
                }
              </div>
            </>
          :
          <>
            <ListElement backgroundColor="#BB3737" text="Aucune ville correspondant au texte saisi" />
          </>
        }
      </div>
    </div>
  )
}

export default List
