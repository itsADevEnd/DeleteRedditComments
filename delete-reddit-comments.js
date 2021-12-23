// Declaration of the variable that will store the interval ID.
var refreshIntervalId = -1;

// refreshIntervalId stores the ID of the setInterval function so it can be stopped when there are no more comments left to be deleted. 
refreshIntervalId = setInterval(function() {
    // Getting the context menu button for the comments by class name which contains the delete button.
    var elements = document.getElementsByClassName("_2pFdCpgBihIaYh9DSMWBIu _11rZyhzMB3OOh_i10q1kGT uMPgOFYlCc5uvpa2Lbteu");

    // If there is no context menu button, it is implied that there are no more comments, therefore stop the function from repeating itself.
    if (elements.length = 0) {
        clearInterval(refreshIntervalId);
    }

    // Clicking the first context menu button in the returned collection of context menu button elements.
    elements[0].click()
    // After 1000 milliseconds, find the delete button for the comment and click it.
    setTimeout(function() {
        var deleteButton = document.getElementsByClassName("_10K5i7NW6qcm-UoCtpB3aK _3LwUIE7yX7CZQKmD2L87vf _2LNy1r5iuFMrf0PLh4UdV- _1oYEKCssGFjqxQ9jJMNj5G");
        deleteButton[2].click();
        // After 1000 milliseconds, find the delete button which permanently deletes the comment and click it.
        setTimeout(function() {
            var permanentDeleteButton = document.getElementsByClassName("_17UyTSs2atqnKg9dIq5ERg ogOEj4x-0BpDZWeccJwxx _2iuoyPiKHN3kfOoeIQalDT _10BQ7pjWbeYP63SAPNS8Ts HNozj_dKjQZ59ZsfEegz8 _2nelDm85zKKmuD94NequP0");
            permanentDeleteButton[0].click();
        }, 1000);
    }, 1000);
}, 1000);