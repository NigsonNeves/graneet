import React, { ChangeEvent, FC, useEffect, useState } from "react"
import List from "../../components/List"
import SearchBar from "../../components/SearchBar"
import { getFilteredCitiesRequest } from "../../utils/api/request/cities"
import { FilteredCities } from "../../utils/api/request/interfaces/cities.interface"

import './styles/home.css'

const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<null | any>(null)
  const [filteredCities, setFilteredCities] = useState<FilteredCities>({
    metropolitan: [],
    overseas: []
  })

  const handleOnchange = (event : ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleOnSearch();
  }

  const handleOnSearch = async () => {
    try {
      let request = await getFilteredCitiesRequest(inputValue)

      setFilteredCities(request)
    } catch(error: unknown) {
      setError(error)
    }
  }

  useEffect(() => {
  }, [filteredCities])

  return (
    <div className="home-wrapper">
      <SearchBar onChangeFunction={(e) => handleOnchange(e)} onSearchFunction={(e) => handlePressEnter(e)} value={inputValue}/>
      <div className="home-list">
        <List title="Villes de métropole" cities={filteredCities.metropolitan}/>
        <List title="Villes d'outre-mer" cities={filteredCities.overseas}/>
      </div>
    </div>
  )
}

export default Home