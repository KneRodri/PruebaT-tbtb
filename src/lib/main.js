document.addEventListener("DOMContentLoaded", () => {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => {
            if (!res.ok) {
                throw new Error (`Error in the app: ${res.status}`);
            } 
            return res.json();
       })
       .then(data => {
            console.log(data);
            fillTable(data);
       })
       .catch(err => {
        console.error('There was a problem with the app:', err);
       });
       const fillTable = (data) => {
        const tableBody = document.querySelector('#myTable tbody');
    
        data.forEach(user => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td
                <td>${user.username}</td>
                <td>${user.email}<td>
                <td>${user.address.city}, ${user.address.street}, ${user.address.suite}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.company.name}</td>
            `;
        });
        $('#myTable').DataTable();
    }
});


