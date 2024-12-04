// const nums = {1, 2, 3, 4}
// const {a, ...b}
//                          //1
// console.log(a)
// console.log(b)


// const num1 {1, 2}
// const num2 {...num1, 3, 4}
//                          //2
// console.log(num2)


// students = [
//     {id: 1, name: "A"},
//     {id: 2, name: "B"},
//     {id: 3, name: "C"},                  //3
//     {id: 4, name: "D"},
//     {id: 5, name: "E"},
// ]


// if (students % 2 == 0) {
//     console.log(students + "1-ші топ")
// } else {
//     console.log(students + "2-ші топ")
// }



const library = {
name: 'Alatau HUB',
books: [
{ name: 'book A', pages: 300 },
{ name: 'book B', pages: 100 },         //4
{ name: 'book C', pages: 340 },
{ name: 'book D', pages: 1000 },
],
};

function findBook(Book) {
    return students.filter((object) => object.name == Book)
}

const bookBet = findBook(name)[0].score


const ortaBet =
    bookBet.reduce((result, number) => result + number, 0) 
    bookBet.length;

console.log(ortaBet)