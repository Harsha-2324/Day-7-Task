fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Get all the countries from the Asia continent/region using the Filter function
    const asiaCountries = data.filter((country) => country.region === "Asia");
    console.log("Countries in Asia:", asiaCountries);
  });
