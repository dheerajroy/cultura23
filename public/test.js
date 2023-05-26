const fs = require('fs');

fs.readFile('events.json', (err, data) => {
  if (err) throw err;
  
  const eventsData = JSON.parse(data);
  const filteredData = eventsData.filter(event => event.field1 !== "");
  const jsonData = JSON.stringify(filteredData);

  fs.writeFile('finalEvents.json', jsonData, (err) => {
    if (err) throw err;
    console.log('Filtered events data saved to finalEvents.json');
  });
});
