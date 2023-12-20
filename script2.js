async function fetchCountriesName() {
    let countriesName = document.getElementById("countryDropDown");
      const response = await fetch("https://countriesnow.space/api/v0.1/countries");
      const data = await response.json();
      console.log(data.data);

      for (let i = 0; i < data.data.length; i++) {
          countriesName.innerHTML+= `<option> ${data.data[i].country} </option>`;
      }
  }

  fetchCountriesName();

