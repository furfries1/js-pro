const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

// TASK 1

function getSubjects(obj) {
  let keys = Object.keys(obj);
  return keys.join();
}

console.log(getSubjects(subjects));

// TASK 2

function countPeople(obj) {
  let students = 0;
  let teachers = 0;
  for (let i in obj) {
    students += obj[i].students;
    teachers += obj[i].teachers;
  }
  return students + teachers;
}

console.log(countPeople(subjects));

// TASK 3

function countStudents(obj) {
  let students = 0;
  let count = 0;
  for (let i in obj) {
    count++;
    students += obj[i].students;
  }
  return students / count;
}

console.log(countStudents(subjects));

// TASK 4

function createArr(obj) {
  let subectsArr = Object.values(obj);
  return subectsArr;
}

console.log(createArr(subjects));

// TASK 5

function sortArr(obj) {
  let sortedArr = [];
  let arr = Object.entries(obj);
  arr.sort((a, b) => (a[1].teachers > b[1].teachers ? -1 : 1));
  for (let i of arr) {
    sortedArr.push(i[0]);
  }
  return sortedArr;
}

console.log(sortArr(subjects));
