let UserId = 1000;
let CourseId = 2000;

class Registrations {
    UserId: number;
    age: number;
    phonenumber: number;
    username: string;
    constructor(username: string, age: number, phonenumber: number) {
        UserId++;
        this.UserId = UserId;
        this.username = username;
        this.age = age;
        this.phonenumber = phonenumber;
    }
}
let UserList = new Array<Registrations>();
UserList.push(new Registrations("anusha", 21, 9025562529));

class EnrolledDetails {
    CourseId: number;
    CourseName: string;
    RequiredDays: number;
    UserId: number;
    constructor(CourseName: string, RequiredDays: number) {
        CourseId++;
        this.UserId = UserId;
        this.CourseId = CourseId;
        this.CourseName = CourseName;
        this.RequiredDays = RequiredDays;
    }
}

let EnrolledList = new Array<EnrolledDetails>();
EnrolledList.push(new EnrolledDetails("HTML", 5));

function UserRegistration() {
    let maindiv = (document.getElementById("maindiv") as HTMLElement);
    let registration = (document.getElementById("registration") as HTMLElement);
    let login = (document.getElementById("login") as HTMLElement);
    let course = (document.getElementById("course") as HTMLElement);
    let enroll = (document.getElementById("enroll") as HTMLElement);
    let enrolledcourse = (document.getElementById("enrolledcourse") as HTMLElement);
    maindiv.style.display = "none";
    registration.style.display = "block";

}
function LoginUser() {
    let maindiv = (document.getElementById("maindiv") as HTMLElement);
    let login = (document.getElementById("login") as HTMLElement);

    maindiv.style.display = "none";
    login.style.display = "block";


}
function AddUserDetails() {
    let maindiv = (document.getElementById("maindiv") as HTMLElement);
    let registration = (document.getElementById("registration") as HTMLElement);
    let login = (document.getElementById("login") as HTMLElement);
    let enrolledusers = (document.getElementById("enrolledusers") as HTMLElement);


    registration.style.display = "none";
    login.style.display = "block";
    let username = (document.getElementById("name") as HTMLInputElement).value;
    let age = (document.getElementById("age") as HTMLInputElement).value;
    let phonenumber = (document.getElementById("phonenumber") as HTMLInputElement).value;
    if (username != "" && age != "" && phonenumber != "") {
        UserList.push(new Registrations(username, +parseInt(age), +parseInt(phonenumber)));
        alert(`${UserId} added successfully`);
        
    }
    else {
        alert("please fill all the details");
        registration.style.display="block";
        login.style.display="none";
    }
    for (let i = 0; i < UserList.length; i++) {
        enrolledusers.innerHTML += ` userid : ${UserList[i].UserId} <br>\n username : ${UserList[i].username}<br> \n age : ${UserList[i].age} <br>\n phonenumber : ${UserList[i].phonenumber}<br>---------------------------------------------------------------------------------------------------<br>`;
    }
    // confirm("add one more username");
    // if (confirm) {
    //     registration.style.display = "block";
    //     login.style.display="none";
    // }
    // else if(!confirm){
    //     registration.style.display = "none";
    //     login.style.display = "block";
    // }
}
function Login() {
    let course = (document.getElementById("course") as HTMLElement);
    let login = (document.getElementById("login") as HTMLElement);

    let userid = (document.getElementById("userid") as HTMLInputElement).value;
    login.style.display = "none";
    course.style.display = "block";
    let flag = true;
    for (let i = 0; i < UserList.length; i++) {
        if (parseInt(userid) == UserList[i].UserId) {
            flag = false;
        }
        else {
            alert("successful");
            course.style.display = "block";
        }
    }
    if (flag) {
        alert("invalid userid");
        login.style.display = "block";
        course.style.display = "none";

    }
}
function AvailableCourses() {

    let enroll = (document.getElementById("enroll") as HTMLElement);
    let course = (document.getElementById("course") as HTMLElement);
    let details = (document.getElementById("details") as HTMLLabelElement);
    let data = (document.getElementById("data") as HTMLLabelElement);
    let enrolledcourse = (document.getElementById("enrolledcourse") as HTMLElement);
    enrolledcourse.style.display="none";
    course.style.display = "none";
    enroll.style.display = "block";
    
}

function EnrolledCourse() {
    let enrolledcourse = (document.getElementById("enrolledcourse") as HTMLElement);
    let course = (document.getElementById("course") as HTMLElement);
    let enroll = (document.getElementById("enroll") as HTMLElement);
    let data = (document.getElementById("data") as HTMLLabelElement);
    let userid = (document.getElementById("userid") as HTMLInputElement).value;

    course.style.display="none";
    enroll.style.display = "none";
    enrolledcourse.style.display = "block";
    for (let i = 0; i < EnrolledList.length; i++) {
        data.innerHTML += `The userid ${EnrolledList[i].UserId} whose Course id is ${EnrolledList[i].CourseId} <br>\n enrolled in ${EnrolledList[i].CourseName} <br>\n who requires ${EnrolledList[i].RequiredDays} to complete <br> ---------------------------------------------------------------------------------------------------------------<br>`;
      

    }
    if(UserId == parseInt(userid)){
        data.innerHTML += `The complete duration is ${EnrolledList[0].RequiredDays+EnrolledList[1].RequiredDays+EnrolledList[2].RequiredDays}`;
    }
  
}
function Enroll() {
    let course = (document.getElementById("course") as HTMLElement);
    let enroll = (document.getElementById("enroll") as HTMLElement);
    let courses = (document.getElementById("coursename") as HTMLOptionElement);
    let days = (document.getElementById("days") as HTMLInputElement).value;

    course.style.display = "block";
    enroll.style.display = "none";
    if (courses.value != "" && days) {
        EnrolledList.push(new EnrolledDetails(courses.value, +parseInt(days)));
        alert("enrolled successfully");

    }
    else {
        alert("please select one option");
        course.style.display="block";
    }
}
