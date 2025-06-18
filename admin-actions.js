document.addEventListener("DOMContentLoaded", () => {
    // Handle "Add New Movie" button
    const addMovieBtn = document.getElementById("add-movie-btn");
    if (addMovieBtn) {
        addMovieBtn.addEventListener("click", () => {
            const title = prompt("Enter movie title:");
            const year = prompt("Enter release year:");

            if (title && year) {
                const tbody = document.querySelector(".admin-movies tbody");

                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${title}</td>
                    <td>${year}</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                `;

                tbody.appendChild(row);
                attachMovieButtonEvents(row);
            }
        });
    }

    // Function to attach Edit/Delete button events to a movie row
    function attachMovieButtonEvents(row) {
        const editBtn = row.querySelector(".edit-btn");
        const deleteBtn = row.querySelector(".delete-btn");

        editBtn.addEventListener("click", () => {
            const newTitle = prompt("Edit movie title:", row.cells[0].textContent);
            const newYear = prompt("Edit release year:", row.cells[1].textContent);
            if (newTitle && newYear) {
                row.cells[0].textContent = newTitle;
                row.cells[1].textContent = newYear;
            }
        });

        deleteBtn.addEventListener("click", () => {
            const confirmDelete = confirm(`Delete "${row.cells[0].textContent}"?`);
            if (confirmDelete) {
                row.remove();
            }
        });
    }

    // Attach events to existing movie rows
    const movieRows = document.querySelectorAll(".admin-movies tbody tr");
    movieRows.forEach(attachMovieButtonEvents);

    // Handle user actions (Block/Delete)
    const userRows = document.querySelectorAll(".admin-users tbody tr");

userRows.forEach((row) => {
    const blockBtn = row.querySelector(".block-btn");
    const deleteBtn = row.querySelector(".delete-btn");

    blockBtn.addEventListener("click", () => {
        const name = row.cells[0].textContent;
        alert(`User "${name}" has been blocked.`);
        row.style.opacity = "0.5";
        blockBtn.disabled = true;
    });

    deleteBtn.addEventListener("click", () => {
        const name = row.cells[0].textContent;
        const confirmDelete = confirm(`Are you sure you want to delete user "${name}"?`);
        if (confirmDelete) {
            row.remove();
        }
    });
});
});
