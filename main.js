"use strict";
function city(cityName, country = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
}
// Result
city('Karachi', 'Pakistan');
city('delhi', 'India');
city('bangladesh');
