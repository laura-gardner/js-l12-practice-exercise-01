const randomFolks = document.querySelector(".random-peeps");
const selectUserElement = document.querySelector("#users");

const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data.results;
    displayUsers(userResults);
};

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    for (let user of userResults) {
        const country = user.location.country;
        const name = `${user.name.first} ${user.name.last}`;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
        randomFolks.append(userDiv);
    }
}


selectUserElement.addEventListener("change", function () {
    const numUsers = selectUserElement.value;
    getData(numUsers);
})

getData(1);