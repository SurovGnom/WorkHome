function Student(name, surname, birthDate, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;
    this.attedance = Array(25).fill(null);
}
Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthDate;
}
Student.prototype.getAverage = function () {
  return Math.floor(this.assessments.reduce((a,b) => a+b,0)/this.assessments.length);
}
Student.prototype.present = function () {
    const index = this.attedance.indexOf(null);
    if (index !== -1) {
       this.attedance[index] = true;
    }else{
        console.log("Всі місця у масиві відвідуваності вже заповнені.");
    }
    return this;

}
Student.prototype.absent = function () {
    const index = this.attedance.indexOf(null);
    if (index !== -1) {
       this.attedance[index] = false;
    }else{
        console.log("Всі місця у масиві відвідуваності вже заповнені.");
    }
    return this;

}
Student.prototype.summary = function () {
    const averageGrade = this.getAverage();
    const totalLesson = this.attedance.filter(item => item !== null).length;
    const attendedLesson = this.attedance.filter(item => item === true).length;
    const attendedRate = totalLesson > 0 ? attendedLesson / totalLesson : 0;

    if(averageGrade > 90 && attendedRate > 0.9) {
       return `Молодець`
    }else if(averageGrade > 90 || attendedRate > 0.9) {
       return `Добре , але можна краще `
    }else{
       return `Редиска`
    }
}
const student1 = new Student('exampleName1', 'exampleSurname1', 1999, [100, 99, 80, 1]);
const student2 = new Student('exampleName2', 'exampleSurname2', 1998, [0, 2]);

const student3 = new Student('Jonh', 'Doe', 1996, [95,93,98,100,91,85,92]);
const student4 = new Student('Marie', 'Magdalena', 1991, [95,93,85,82,98,100,91,87,85,92,96,99]);
const student5 = new Student('Chuck', 'Palagnuk', 1995, [95,93,85,100,100,]);

student1.present().absent().present()
student2.absent().present();
student3.present().present().present().present().present().present();
student4.absent().present().absent().absent().present();
student5.present().present().present().present().present().present().absent();

console.log(student1.summary())
console.log(student2.summary())
console.log(student3.summary())
console.log(student4.summary())
console.log(student5.summary())

console.log(student4.getAverage())