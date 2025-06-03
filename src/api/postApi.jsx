import axios from "axios";

// https://v6.exchangerate-api.com/v6/a63eb67899faa3965fa6bd2d/latest/USD

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/a63eb67899faa3965fa6bd2d",
});

// we need to create a  get request
// to get the current exchange rate
export const currencyConverter = async (fromCurrency, toCurrency, amount) => {
  const res = await api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
  console.log(res);
  return res.data.conversion_result;
};
