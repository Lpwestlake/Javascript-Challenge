// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData)

// create a variable for the selection of the table body using D3
var tbody = d3.select("tbody");

// loop through `tableData` (data.js)
// use d3 to append one table row `tr` for each object
tableData.forEach((tableRender) => {
    var row = tbody.append("tr");

    // use `Object.entries` to log each value
    Object.entries(tableRender).forEach(([key, value]) => {

        // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// date input field code:

// define the filter button
var button = d3.select("#filter-btn");

button.on("click", (click) => {
    // select the input element and get the html id
    var inputDate = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputDate.property("value");
    console.log(inputValue);

    // filter the table data by datetime to match input date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    // remove any previous listed items within the table body
    tbody.html("");

    filteredData.forEach((tableRender) => {
        var row = tbody.append("tr");

        // use `Object.entries` to log each value
        Object.entries(tableRender).forEach(([key, value]) => {

            // append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

