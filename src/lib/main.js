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

                const idCell = row.insertCell();
                const nameCell = row.insertCell();
                const usernameCell = row.insertCell();
                const emailCell = row.insertCell();
                const addressCell = row.insertCell();
                const phoneCell = row.insertCell();
                const websiteCell = row.insertCell();
                const companyCell = row.insertCell();

                idCell.textContent = user.id;
                nameCell.textContent = user.name;
                usernameCell.textContent = user.username;
                emailCell.textContent = user.email;
                addressCell.textContent = `${user.address.city}, ${user.address.street}, ${user.address.suite}`;
                phoneCell.textContent = user.phone;
                websiteCell.textContent = user.website;
                companyCell.textContent = user.company.name;

                idCell.classList.add('col');
                nameCell.classList.add('col', 'name');
                usernameCell.classList.add('col');
                emailCell.classList.add('col');
                addressCell.classList.add('col');
                phoneCell.classList.add('col');
                websiteCell.classList.add('col');
                companyCell.classList.add('col');
    });
};
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
