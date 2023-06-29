import getFullResponseFromAPI from "./getFullResponseFromAPI.js";

const successResponsePromise = getFullResponseFromAPI(true);
successResponsePromise
  .then((response) => {
    console.log(response);
    // Handle success case here
  })
  .catch((error) => {
    console.error(error);
    // Handle error case here
  });
	  
const failureResponsePromise = getFullResponseFromAPI(false);
failureResponsePromise
  .then((response) => {
    console.log(response);
    // Handle success case here (won't be executed in this case)
  })
  .catch((error) => {
    console.error(error);
    // Handle error case here
  });
