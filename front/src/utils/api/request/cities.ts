
import { getFilteredCitiesURL } from "../url/cities"
import { FilteredCities } from "./interfaces/cities.interface";

export const getFilteredCitiesRequest = async (query: string): Promise<FilteredCities> => {
  try {
    let request: Response = await fetch(getFilteredCitiesURL(query));
    let response: FilteredCities = await request.json();

    return response;
  } catch (error) {
    throw error;
  }
}