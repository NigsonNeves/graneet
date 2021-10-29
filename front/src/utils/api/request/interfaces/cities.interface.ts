
export interface City {
  codePostal: string
  codeCommune: string
  nomCommune: string
  libelleAcheminement: string
}

export interface FilteredCities {
  metropolitan: City[]
  overseas: City[]
}
