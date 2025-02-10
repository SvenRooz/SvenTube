/* Configuration for requesting the data */
const config = {
  cUrl: 'https://api.countrystatecity.in/v1/countries',
  ckey: 'Mjg3RlVXS1V1aU5ZYUsxRUt6YmtSNk9Vd0xNYWNxNHRKaDNZSXp0Qw=='
}


/* Requests the data from the API and returns it */
export async function loadCountryList() {
  let apiEndPoint = config.cUrl;

  const response = await fetch(apiEndPoint, { headers: { "X-CSCAPI-KEY": config.ckey } });

  if (!response.ok) {
    throw new Error('');
  }

  const data = await response.json();
  return data;
}