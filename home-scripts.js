document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("studentModal");

    // Get the button that opens the modal
    var btn = document.getElementById("addStudentButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle the form submission
    document.getElementById('studentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = document.getElementById('studentName').value;
        var admissionNumber = document.getElementById('admissionNumber').value;

        if (name && admissionNumber) {
            // Get the table body
            var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

            // Check if the first row is empty
            var firstRow = table.rows[0];
            var isFirstRowEmpty = !firstRow.cells[0].textContent && !firstRow.cells[1].textContent;

            if (isFirstRowEmpty) {
                // Populate the first row if it's empty
                firstRow.cells[0].textContent = name;
                firstRow.cells[1].textContent = admissionNumber;
                for (let i = 2; i < 8; i++) {
                    var checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    firstRow.cells[i].appendChild(checkbox);
                }
            } else {
                // Add a new row if the first row is not empty
                var newRow = table.insertRow();
                newRow.insertCell(0).textContent = name;
                newRow.insertCell(1).textContent = admissionNumber;
                for (let i = 2; i < 8; i++) {
                    var checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    newRow.insertCell(i).appendChild(checkbox);
                }
            }

            // Clear the form
            document.getElementById('studentForm').reset();

            // Close the modal
            modal.style.display = "none";
        }
    });
});
