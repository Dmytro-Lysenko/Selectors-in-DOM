"use strict";
//Examine THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.url);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[11]);
// console.log(document.forms);

//GETELEMENTBYID//
// console.log(document.getElementById("header-title"));
// const headerTitle = document.getElementById("header-title");
// const header = document.getElementById("main-header");
// // console.log(headerTitle);
// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Good bye";
// // console.log(headerTitle.textContent);
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px #000";

//GETELEMENTBYCLASSSNAME//
// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";
// //TThis dosnt work gives error
// // items.style.backgroundColor = "#f4f4f4";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }
//GETELEMENTBYTAGNAME//
// const li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[2]);
// li[1].textContent = "hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";
// //TThis dosnt work gives error
// // items.style.backgroundColor = "#f4f4f4";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

//QUERYSELECTOR//
// const header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// const input = document.querySelector("input");
// input.value = "Paste it here";

// const submit = document.querySelector('input[type = "submit"]');
// submit.value = "Testing";

// const item = document.querySelector(".list-group-item");
// item.style.color = "red";
// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";
// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";

//QUERYSELECTORALL//
const titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Hello!!";

const odd = document.querySelectorAll("li:nth-child(odd)");
const even = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}
