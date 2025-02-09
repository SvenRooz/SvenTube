/* Configuration for requesting the data */
const config = {
  cUrl: 'https://api.countrystatecity.in/v1/countries',
  ckey: ''
}


/* Requests the data from the API and returns it */
function loadCountries() {
  let apiEndPoint = config.cUrl;

  fetch(apiEndPoint, { headers: { "X-CSCAPI-KEY": config.ckey } })
    .then(Response => Response.json())
    .then(data => {
      return data;
    });
}


// Export variable
export const countryList = loadCountries();