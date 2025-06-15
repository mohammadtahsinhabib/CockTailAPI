let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let large = 0;
let largestName = "";

for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > large) {
        large = friends[i].length;
        largestName = friends[i];
    }
}

console.log(largestName);
