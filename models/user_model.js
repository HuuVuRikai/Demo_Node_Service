function User(name, age) {       // Accept name and age in the constructor
    this.name = name || null;
    this.age  = age  || null;
}

User.prototype.getAge = function() {
    return this.age;
}

User.prototype.setAge = function(age) {
    this.age = age;
}

User.prototype.getName = function() {
    return this.name;
}

User.prototype.setName = function(name) {
    this.name = name;
}

User.prototype.equals = function(otherUser) {
    return otherUser.getName() == this.getName()
        && otherUser.getAge() == this.getAge();
}

User.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports = User;    