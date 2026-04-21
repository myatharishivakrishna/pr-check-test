const users = [1,2,3];

for (let user of users) {
  fetch("https://api.example.com/orders?user=" + user);
}
