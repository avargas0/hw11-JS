// from data.js
var tableData = data;
console.log(tableData);

//Initiate variables
var tbody = d3.select('tbody');
var filterTable = d3.select('#filter-btn');

//Create load table function
function loadTable(data) {
    //Clear data
    tbody.html("");

//Step1. Loop through 'data' and console.log each UFO sighting object
    data.forEach(function(ufoSighting) {
    console.log(ufoSighting);

    //Step2. Use d3 to append one table row 'tr' for each UFO sighting object
    var row = tbody.append('tr');

    //Step3. Use 'Object.entries' to console.log each UFO sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        //console.log(key, value);

        //Step4. Use d3 to append one cell per UFO sighting value
        //(datetime, city, state, country, shape, durationMinutes, comments)
        var cell = row.append('td');
        
        //Step5. Use d3 to update each cell's text with UFO sighting values
        cell.text(value);
    });
}); 
};

loadTable(tableData); 

//Select the 'Filter Table' button
filterTable.on('click', function() {
    d3.event.preventDefault();

    //Select the input element, 'datetime', & get raw HTML node
    var inputElement = d3.select('#datetime');
    var inputState = d3.select("#state");
    
    //Get the value property of the input element
    var inputValue = inputElement.property('value');
    var stateValue = inputState.property('value');
    
    console.log("Date value" + inputValue);
    console.log("State value" + stateValue);
    //console.log(tableData);
    
    var filteredData = tableData.filter(sightings => ((sightings.datetime == inputValue) && (sightings.state == stateValue)) );
    console.log(filteredData);

    loadTable(filteredData);
}); 