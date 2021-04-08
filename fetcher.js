const request = require('request');
const fs = require('fs');
const chalk = require('chalk');

const args = process.argv.slice(2);

const fetch = (args) => {

  if (args) {
    request(args[0], (error, response, body) => {
      if (!error) {
        if (response && response.statusCode < 400) {
          console.log(`👍 ${chalk.green("Successfully fetched data. Now writing to file...")}`);
          fs.writeFile(args[1], body, (err) => {
            if (err) {
              console.log(`😢 ${chalk.red("There was an error fetching your data. Please try again.\n Error msg: \n") + err}`);
            } else {
              console.log(`🔥🔥💯💯💯 ${chalk.green("Succesfully wrote data to ") + chalk.bold(args[1]) } 💯💯💯🔥🔥`);
            }
          });
        }
      }
    });
  } else {
    console.log(`${chalk.red("✋ HALT: Please provide a URL to fetch data from and a filepath to output data to.\n")}`);
  }
};

fetch(args);

