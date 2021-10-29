
export const getFilteredCitiesURL = (query: string): string => {
  return `http://localhost:4000/cities/findByFilter?query=${query}`
}