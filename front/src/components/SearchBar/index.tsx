import { FC } from "react"
import Input from "../Form/Input"
import Title from "../Title"
import { SearchBarProps } from "./interfaces/types"

import './styles/search-bar.css'

const SearchBar: FC<SearchBarProps> = ({value, onSearchFunction, onChangeFunction}) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-title">
        <Title title="Je recherche..." />
      </div>
      <div className="search-bar-input">
        <Input onChange={(e) => onChangeFunction(e)} onKeyPress={(e) => onSearchFunction(e)} type='text' placeholder="...une ville, un code postal" value={value} />
      </div>
    </div>
  )
}

export default SearchBar