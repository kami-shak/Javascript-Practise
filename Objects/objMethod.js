var user = {
    firstName : "Kamran",
    lastName : "Shakil",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList :[],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total ${this.courseList.length} courses`
    },
    userInfo : function () {
        return `
                FirstName : ${this.firstName}
                LastName : ${this.lastName}
                Role : ${this.role}
                Login Count : ${this.loginCount}
                FacebookSignedIn : ${this.facebookSignedIn}
                Course List : ${this.courseList.length}`
    }
};

console.log(user.getCourseCount());
user.buyCourse("Java");
console.log(user.getCourseCount());
console.table(user.userInfo());
