// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.
// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);
// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.
// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.


// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

let numberArr = [1, 5, 7, 8, 9, 0, -5, -55, 105, 0, 5, 299, 6, 7];
let maxValue = Math.max(...numberArr);
console.log(maxValue);

// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.

let someArr = [`test`, 12, undefined, null, -5, `javascript`, `1`, false, true, 0, `!`];

let onlyStringArr = someArr.filter(i => typeof i === `string` && i !== '');
console.log(onlyStringArr)

// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);

let users = [
    {
        name: "Yura",
        age: 55,
        hobby: ["football", "ski", "hiking"],
        type: "Admin"
    },
    {
        name: "Yulian",
        age: 28,
        hobby: ["films", "games", "hiking"],
        type: "user"
    },
    {
        name: "Taras",
        age: 38,
        hobby: ["hunting", "TV", "javascript"],
        type: "user"
    }
]


console.log(`Юзери з типом user`)
for (let i = 0; i < users.length; i++) {
    if (users[i].hasOwnProperty(`type`) && users[i].type === `user`) {
        console.log(users[i]);
    }
}

console.log(`Юзери які мають хоббі hiking`);
for (let i = 0; i < users.length; i++) {
    if (users[i].hasOwnProperty(`hobby`) && Array.isArray(users[i].hobby)) {
        let hobbyArr = users[i].hobby
        for (let j = 0; j < hobbyArr.length; j++) {
            if (hobbyArr[j] === `hiking`) {
                console.log(users[i]);
            }
        }
    }
}


if (confirm(`Влаштувати юзерів на роботу?`)) {
    console.log(`Юзери на роботі`)

    for (let i = 0; i < users.length; i++) {
        if (confirm(`Влаштувати юзера ${users[i].name} на роботу?`)) {
            users[i].job = true;
        } else {
            users[i].job = false;
        }
        console.log(users[i]);
    }
} else {
    console.log(`Юзери не на роботі`)
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}



// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.



let myText = document.getElementById(`myText`);
document.addEventListener(`copy`, (event) => {
    alert(`Its not your`);
})



// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.

let node = null;

window.onload = () => {
    node = fetch(`https://restcountries.eu/rest/v2/all`) 
    .then(response => response.json())
    .then(result => node = result)
}


let list = document.getElementById(`country`)

let showCounty = () => {
    console.log(node)
    for(let i = 0; i < node.length; i++) {
        let nameCountry = node[i].name;
        nameCountry = nameCountry.toUpperCase();
        let li = document.createElement(`li`);
        li.innerText = `${nameCountry}, ${node[i].capital}`
        list.appendChild(li);
    }

}

