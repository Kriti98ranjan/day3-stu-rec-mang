const students = [];
console.log("Student Record Manager - Admin Panel");
//add student 
function addStudent(name) {
  students.push(name);
}

//display students
function displayStudents() {
  console.log(students);
}

//remove student
function removeStudent(name) {
  const index = students.indexOf(name);

  if (index !== -1) {
    students.splice(index, 1);
  }
}

//search student
function searchStudent(name) {
  return students.includes(name);
}

//count students
function totalStudents() {
  return students.length;
}
console.log("Student Record Manager Started");