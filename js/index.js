// a -masala
// try-catch  bu bizning dasturimiz uchun juda kerakli.Chunki agar foydalanuvchi dasturga xato malumot kiritb quysa
// dasturimiz yeqilishi mumkin agar biz try-catchdan foydalansak xatolik kelanda dasturimiz uzini qanday tutishini aytamiz
// va dasturga xatolik kelayotgnda biz aytganday qiladi va dasturni tuxtatadi
// 1

// try {
//     console.log("Salom");
//     console.log(a);
// } catch (error) {
//     console.log("hato");
// }

// throw - bu dasturimizda biz kutmagan yerdan biz  kutnmagan va dasturimizni yiqitishi mumkin bulgan malumot
// kelsa biz bunu uzimiz hatolik qilib ham chiqariishimiz mumkin
// 3
// function divide(a,b) {
//     if (b==0) {
//         throw new Error("nol kiritnma")
//     }
//     return a/b
// }
// console.log(divide(10,2));



// 4
// let a = +prompt()
// function divide(a) {
//     if (a < 0) {
//         throw new Error("manfiy son kiritnma")
//     }
//     return a
// }
// console.log(divide(a));














// 1-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// function change(students) {
//     return students.map(function (value) {
//         return {name:value.name, age:value.age}
//     })
//     }
// console.log(change(students));



// 2-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// const bigScore =(students) =>{
//     let hight = 0;
//     students.map(function (value) {
//         if (value.score > hight) {
//             return hight = value.score;
//         }
//     })
//     return hight
// }
// console.log(bigScore(students));



// 3-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];
// const filtereName =(students) => {
//     let res = [];
//     students.forEach(function (value) {
//         if (value.name[0] == "A") {
//             res.push(value)
//         }} );
//     return res
// }
// console.log(filtereName(students));





// 4-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];
// const filtereName =(students) => {
//     let res = 0;
//     let sana = 0;
//     students.forEach(function (value) {
//         res += value.score
//         sana ++

//     });
//     return res/sana
// }
// console.log(filtereName(students));



// 5-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];
// const findJohn =(students) => {
//     return students.find(function (value) {
//         return value.name=="John"
//     })
// }
// console.log(findJohn(students));



// 6-masala
// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];
// const findHightScore =(students) => {
//     return students.findIndex(function (value) {
//         return value.score > 85
//     })
// }
// console.log(findHightScore(students));



// 7-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//   const findActive =(students) => {
//         let res = [];
//         students.forEach(function (value) {
//             if (value.status == "active") {
//                 res.push(value)
//             }} );
//         return res
//     }
//     console.log(findActive(students))




// 8-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];
// function bigger(students) {
//     return students.every(function (value) {
//         return value.age > 18
//     })
// }
// console.log(bigger(students));





// 9-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function bigScore(students) {
//     return students.some(function (value) {
//         return value.score > 90
//     })
// }
// console.log(bigScore(students));


// 13-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// const takeScore = (students) => {
//     let res = [];
//      students.forEach(value => {
//         return res.push(value.score)
//     });
//     return res
// }
// console.log(takeScore(students));



// 14-masala
// const students = [
//     { name: 'Alice',age: 20, score: 85, status: 'active' }
//   ];
// function replyKeys(students) {
//     let res =[];
//     students.forEach(element => {
//         res.push(Object.keys(element)) ;
//     });
//     return res
// }
// console.log(replyKeys(students));



// 15-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };
// const addElement =(students,newStudent) => {
//      students.push(newStudent)
//      return students
// }
// console.log(addElement(students,newStudent));




// 16-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// const deleteName = (students,element) => {
//     let res =[];
//      students.forEach(value => {
//         if (value.name != element) {
//             res.push(value)
//         }
//     });
//     return res
// }
// console.log(deleteName(students,"Alice"));




// 17-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
// const checkAge =(students) => {
//     return students.every(function (value) {
//         return value.age > 20
//     })
// }
// console.log(checkAge(students));



// 18-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function showStatus(students) {
//     let res = []
//      students.forEach(element => {
//         res.push("status:" + element.status)
//     });
//     return res.join("  ")
// }
// console.log(showStatus(students));




// 19-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// const updatedStudent = { name: 'Alice', age: 21, score: 90, status: 'active' };
// function addNewElement(students) {
//      students.forEach(value => {
//         if (value.name == updatedStudent.name) {
//              return students.splice(students.indexOf[value],1,updatedStudent)
//         }
//     });
//     return students
// }
// console.log(addNewElement(students));





// 20-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
// const minAge = (students) => {
//     let min = 150;
//     students.forEach(value => {
//         if (value.age < min) {
//             return min = value.age
//         }
//     });
//     return min
// }
// console.log(minAge(students));









// String metodlariga oid masalalar.
// 1-masala
// let str = "hello world";
// function addStr(str) {
//     let str3 = str.substring(8);
//     let str2 = str.substring(0,3)
//     return str2.concat(str3)
// }
// console.log(addStr(str));



// 2-masala!!!
// let str = 'Hello, WORLD!';
// const change =(str) => {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] ) {
            
//         }
//     }
// }



// 3-masala
// let str = "Hello world from JavaScript";
// function madeMassive(str) {
//     let res = str.split(" ");
//     return res
// }
// console.log(madeMassive(str));



// 4-masala
// let arr = ["Hello", "world", "from", "JavaScript"];
// function madeString(arr) {
//     return arr.join(", ")
// }
// console.log(madeString(arr));



// 5-masala
// let str = "JavaScript";
// const changeElement = (str) => {
//     return str.replaceAll("a",'@')
// }
// console.log(changeElement(str));


// 6-masala
// let str = "   Hello, world!   ";
// function deletSpece(params) {
//     return str.trim()
// }
// console.log(deletSpece(str));



// 7-masala
// let str = "hello43";
// function showElement(str,index) {
//     return str.charAt(index)
// }
// console.log(showElement(str,4));



// 8-masala
// let str = "Hello, world!";
// function showElement(str,element) {
//     return str.includes(element)
// }
// console.log(showElement(str,"world"));




// 9-masala
// let str = "Hello, world!";
// function showElement(str,element) {
//     return str.startsWith(element)
// }
// console.log(showElement(str,"Hello"));




// 10-masala
// let str = "Hello, world!";
// function showElement(str,element) {
//     return str.endsWith(element)
// }
// console.log(showElement(str,"world!"));
