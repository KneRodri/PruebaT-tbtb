document.addEventListener("DOMContentLoaded", () => {
    let data;

    fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => {
            if (!res.ok) {
                throw new Error (`Error in the app: ${res.status}`);
            } 
            return res.json();
       })
       .then(users => {
            data = users;
            fillTable(data);
       })
       .catch(err => {
        console.error('There was a problem with the app:', err);
       });

    const fillTable = (users) => {
        const tBody = document.querySelector('#myTable tbody');
        const searchInput = document.getElementById('searchInput');

        const renderTable = (filteredData) => {
            tBody.innerHTML = '';

            filteredData.forEach(user => {
                const row = tBody.insertRow();
                row.innerHTML = `
                    <td class="col hidden-xs hidden-sm">${user.id}</td>
                    <td class="col name">${user.name}</td
                    <td class="col hidden-xs hidden-sm">${user.username}</td>
                    <td class="col hidden-xs hidden-sm">${user.email}<td>
                    <td class="col hidden-xs hidden-sm">${user.address.city}, ${user.address.street}, ${user.address.suite}</td>
                    <td class="col hidden-xs hidden-sm">${user.phone}</td>
                    <td class="col hidden-xs hidden-sm">${user.website}</td>
                    <td class="col hidden-xs hidden-sm hide">${user.company.name}</td>
                `;
            });
        }
        renderTable(users);

        searchInput.addEventListener('keyup', () => {
            const searchTerm = searchInput.value.trim().toLowerCase();

            const filteredData = data.filter(user => {
                const userData = `${user.name} ${user.email} ${user.address.city}`.toLowerCase();
                return userData.includes(searchTerm);
            });
    
            renderTable(filteredData);
        });
    }
});
