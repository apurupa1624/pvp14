function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
  })
}
var newFile=loadJSON("prg.json");
newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
})
var childTwo=document.querySelector(".childtwo")
function career(careerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerObj.info;
  childTwo.appendChild(careerP);
}
function education(edu){
  var educationHeading=document.createElement("h2");
  educationHeading.textContent="Academic Qualifications";
  childTwo.appendChild(educationHeading);
  var hr=document.createElement("hr");
  educationHeading.appendChild(hr);
  for(var i=0;i<edu.length;i++){
    eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childTwo.appendChild(eduH3);
    var eduU1=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduU1.appendChild(eduLi);
    childTwo.appendChild(eduU1);
    var eduU2=document.createElement("ul");
    var eduLi1=document.createElement("li");
    eduLi1.textContent=edu[i].Year;
    eduU2.appendChild(eduLi1);
    childTwo.appendChild(eduU2);
    var eduU3=document.createElement("ul");
    var eduLi2=document.createElement("li");
    eduLi2.textContent=edu[i].percentage;
    eduU3.appendChild(eduLi2);
    childTwo.appendChild(eduU3);
  }
}