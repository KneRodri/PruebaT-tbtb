document.addEventListener("DOMContentLoaded", () => {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => {
            if (!res.ok) {
                throw new Error (`Error in the app: ${res.status}`);
            } 
            return res.json();
       })
       .then(data => {
            fillTable(data);
       })
       .catch(err => {
        console.error('There was a problem with the app:', err);
       });

    const fillTable = (filteredData) => {
        const tableBody = document.querySelector('#myTable tbody');
        const searchInput = document.getElementById('#searchInput');

        const renderTable = (filteredData) => {
            tableBody.innerHTML = '';

            filteredData.forEach(user => {
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
        }
        renderTable(filteredData);

        searchInput.addEventListener('keyup', () => {
            const searchItem = searchInput.value;
            const filteredData = data.filter(user => {
                const userData = `${user.name} ${user.email} ${user.address.city}`;
                return userData.includes(searchItem);
            });
    
        renderTable(filteredData);
    });
    }
});

// const fillTable = (data) => {
//     const tableBody = document.querySelector('#myTable tbody');

//     data.forEach(user => {

//     });
//     $('#myTable').DataTable();
