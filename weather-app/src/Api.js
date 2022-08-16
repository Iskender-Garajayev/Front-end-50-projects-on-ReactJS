export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5a12947e86mshe5876e48e705d92p161626jsnbdced970dd14",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a12947e86mshe5876e48e705d92p161626jsnbdced970dd14',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));