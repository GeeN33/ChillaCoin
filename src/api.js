import { cryptoAssets, cryptoData } from './data'
import axios   from "axios";

export function fakeFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 2000)
  })
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 2000)
  })
}

export const fetchPortfolio = async () =>{
  try {

    var resposne = await axios.get("https://api.chillacoin.ru/portfolios?format=json")

    return resposne.data

  }
  catch (error) {

    console.error(error)

  }

};