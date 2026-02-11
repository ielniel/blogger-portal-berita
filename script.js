// script.js

// Function to get current date and time in UTC format
function getCurrentDateTime() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

// Log the current date and time to the console
console.log('Current Date and Time (UTC):', getCurrentDateTime());

// Additional functionality can be added below this comment