function city(cityName: string, country: string = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
  }
  
  // Result
  city('Karachi', 'Pakistan');
  city('delhi', 'India');
  city('bangladesh');