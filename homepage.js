// Sample data (replace with actual data)
const sampleData = [
    { admissionNumber: "001", name: "John Doe", days: ["P", "P", "P", "P", "P", "A"] },
    { admissionNumber: "002", name: "Jane Smith", days: ["P", "P", "A", "P", "P", "A"] }
];

// Function to display table rows
function displayTableRows() {
    const tableBody = document.querySelector('#dataTable tbody');
    sampleData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.admissionNumber}</td>
            <td>${data.name}</td>
            <td>${data.days[0]}</td>
            <td>${data.days[1]}</td>
            <td>${data.days[2]}</td>
            <td>${data.days[3]}</td>
            <td>${data.days[4]}</td>
            <td>${data.days[5]}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the function to display table rows when the page loads
window.onload = displayTableRows;
