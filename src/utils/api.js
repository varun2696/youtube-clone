import axios from "axios";

const base_url = "https://youtube138.p.rapidapi.com"

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YT_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  
export const fetchApiData = async (path)=>{
    const res = await axios.get(`${base_url}/${path}`, options);
    return res.data
}