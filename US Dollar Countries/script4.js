var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  const usDollarCountries = countryData.filter((country) =>
    country.currencies.hasOwnProperty("USD")
  );
  console.log("Countries using US Dollars:", usDollarCountries);
};
