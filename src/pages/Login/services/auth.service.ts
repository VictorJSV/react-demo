import { FormValues } from "../interfaces";
import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/";
const characterUrl = baseUrl + "character/";

export const login = (data: FormValues) => {
  //return fetch(characterUrl + "2").then((res) => res.json());
  return axios.get(characterUrl + "2").then((res) => res.data);
};
