const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  enrrollStudent: "",
  sections: [
    {
      sectionNum: 1,
      roomNum: 'STC 353',
      enrolled: 26,
      days: 'TTh',
      instructor: 'Bro T',
    },
    {
      sectionNum: 2,
      roomNum: 'STC 347',
      enrolled: 28,
      days: 'TTh',
      instructor: 'Sis A',
    },
  ],
};


function dataCourse(information) {
  const courseName = document.getElementById("courseName");
  const courseCode = document.getElementById("courseCode");
  courseName.textContent = information.name;
  courseCode.textContent = information.code;
}

dataCourse("aCourse");

function table(section) {
  return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>`


}

function rendersctions(sections) {
  const html = sections.map(table);
  document.getElementById("sections").innerHTML = html.join("");
}



let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
const namesx = names.filter(word) => word.charAt("B"); //equivocado
console.log(namesB)

let namesB = names.filter(name => name.charAt(0) === 'B');//correcto


let namesLong = names.map(word => word.length)

let prom = names.reduce(acumulator, currentvalue) => { }

const steps = ["one", "two", "three"];


const listTemplate(item) {

  return `<li>${item}</li>`;//the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML




const grade = ["A", "B", "A"];
function gradePoints (letter){
  let points = 0;
  if (letter === "A") {
    points = 4;
  }
  else if(letter === "B"){

    points = 3;
  }
  return points;
}
const gPoints = grade.map(gradePoints);


//reduce

const gpaPoints = grade.map(gradePoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;