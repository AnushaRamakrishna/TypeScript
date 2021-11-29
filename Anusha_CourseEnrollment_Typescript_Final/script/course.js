var UserId = 1000;
var CourseId = 2000;
var Registrations = /** @class */ (function () {
    function Registrations(username, age, phonenumber) {
        UserId++;
        this.UserId = UserId;
        this.username = username;
        this.age = age;
        this.phonenumber = phonenumber;
    }
    return Registrations;
}());
var UserList = new Array();
UserList.push(new Registrations("anusha", 21, 9025562529));
var EnrolledDetails = /** @class */ (function () {
    function EnrolledDetails(CourseName, RequiredDays) {
        CourseId++;
        this.UserId = UserId;
        this.CourseId = CourseId;
        this.CourseName = CourseName;
        this.RequiredDays = RequiredDays;
    }
    return EnrolledDetails;
}());
var EnrolledList = new Array();
EnrolledList.push(new EnrolledDetails("HTML", 5));
function UserRegistration() {
    var maindiv = document.getElementById("maindiv");
    var registration = document.getElementById("registration");
    var login = document.getElementById("login");
    var course = document.getElementById("course");
    var enroll = document.getElementById("enroll");
    var enrolledcourse = document.getElementById("enrolledcourse");
    maindiv.style.display = "none";
    registration.style.display = "block";
}
function LoginUser() {
    var maindiv = document.getElementById("maindiv");
    var login = document.getElementById("login");
    maindiv.style.display = "none";
    login.style.display = "block";
}
function AddUserDetails() {
    var maindiv = document.getElementById("maindiv");
    var registration = document.getElementById("registration");
    var login = document.getElementById("login");
    var enrolledusers = document.getElementById("enrolledusers");
    registration.style.display = "none";
    login.style.display = "block";
    var username = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phonenumber = document.getElementById("phonenumber").value;
    if (username != "" && age != "" && phonenumber != "") {
        UserList.push(new Registrations(username, +parseInt(age), +parseInt(phonenumber)));
        alert("".concat(UserId, " added successfully"));
    }
    else {
        alert("please fill all the details");
        registration.style.display = "block";
        login.style.display = "none";
    }
    for (var i = 0; i < UserList.length; i++) {
        enrolledusers.innerHTML += " userid : ".concat(UserList[i].UserId, " <br>\n username : ").concat(UserList[i].username, "<br> \n age : ").concat(UserList[i].age, " <br>\n phonenumber : ").concat(UserList[i].phonenumber, "<br>---------------------------------------------------------------------------------------------------<br>");
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
    var course = document.getElementById("course");
    var login = document.getElementById("login");
    var userid = document.getElementById("userid").value;
    login.style.display = "none";
    course.style.display = "block";
    var flag = true;
    for (var i = 0; i < UserList.length; i++) {
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
    var enroll = document.getElementById("enroll");
    var course = document.getElementById("course");
    var details = document.getElementById("details");
    var data = document.getElementById("data");
    var enrolledcourse = document.getElementById("enrolledcourse");
    enrolledcourse.style.display = "none";
    course.style.display = "none";
    enroll.style.display = "block";
}
function EnrolledCourse() {
    var enrolledcourse = document.getElementById("enrolledcourse");
    var course = document.getElementById("course");
    var enroll = document.getElementById("enroll");
    var data = document.getElementById("data");
    var userid = document.getElementById("userid").value;
    course.style.display = "none";
    enroll.style.display = "none";
    enrolledcourse.style.display = "block";
    for (var i = 0; i < EnrolledList.length; i++) {
        data.innerHTML += "The userid ".concat(EnrolledList[i].UserId, " whose Course id is ").concat(EnrolledList[i].CourseId, " <br>\n enrolled in ").concat(EnrolledList[i].CourseName, " <br>\n who requires ").concat(EnrolledList[i].RequiredDays, " to complete <br> ---------------------------------------------------------------------------------------------------------------<br>");
    }
    if (UserId == parseInt(userid)) {
        data.innerHTML += "The complete duration is ".concat(EnrolledList[0].RequiredDays + EnrolledList[1].RequiredDays + EnrolledList[2].RequiredDays);
    }
}
function Enroll() {
    var course = document.getElementById("course");
    var enroll = document.getElementById("enroll");
    var courses = document.getElementById("coursename");
    var days = document.getElementById("days").value;
    course.style.display = "block";
    enroll.style.display = "none";
    if (courses.value != "" && days) {
        EnrolledList.push(new EnrolledDetails(courses.value, +parseInt(days)));
        alert("enrolled successfully");
    }
    else {
        alert("please select one option");
        course.style.display = "block";
    }
}
