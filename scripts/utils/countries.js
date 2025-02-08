const config = {
  cUrl: 'https://api.countrystatecity.in/v1/countries',
  ckey: ''
}

export const countryList = loadCountries();

function loadCountries() {
  let apiEndPoint = config.cUrl;

  fetch(apiEndPoint, { headers: { "X-CSCAPI-KEY": config.ckey } })
    .then(Response => Response.json())
    .then(data => {
      return data;
    });
}