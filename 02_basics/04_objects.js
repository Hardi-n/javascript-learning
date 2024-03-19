// const tinderUser = new Object() //singleton
const tinderUser = {}; //non singleton

tinderUser.id = "123abc";
tinderUser.name = "SAMMY";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstName: "subhagya",
      lastName: "Chhabra",
    },
  },
};
// console.log(regularUser.fullname?.userfullname.firstName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};
// const obj3 = {obj1 ,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3)

const users = [
  { id: 1, email: "subhagya.chhabra@gmail.com" },
  { id: 1, email: "subhagya.chhabra@gmail.com" },
  { id: 1, email: "subhagya.chhabra@gmail.com" },
];

users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
  coursename : 'JAVASCRIPT',
  price : 999,
  courseInstructor : 'Subhagya'
}

// course.courseInstructor
const {courseInstructor : instructor} = course
// console.log(courseInstructor)
console.log(instructor)

// json = javascript object notation
// {
//   "name":"Subhagya",
//   "Course":"Javascript fundamentals",
//   "Price":"free of cost"
// }

[
  {},
  {},
  {}
]