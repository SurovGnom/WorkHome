function User(name,surname,way,hobbies ) {
    this.name = name;
    this.surname = surname;
    this.way = way;
    this.hobbies = hobbies
}


User.prototype.getInfo = function () {
    return {
      name:this.name,
        surname:this.surname,
        way:this.way,
        hobbies:this.hobbies,
    };
}


const user = new User("Jack","Pumpkin-head","London","shooting");
console.log(user.getInfo(user));
