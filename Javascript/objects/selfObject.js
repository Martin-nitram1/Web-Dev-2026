let self = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies : ['Reading', 'Traveling', 'Cooking'], 
    Introduction: function() {
        return ` Hi my name is ${this.firstName} ${this.lastName} and my hobbies are ${this.hobbies.join(', ')}.`;
    }
}


Object.keys(self).forEach(key => {
    console.log(key);
});
Object.values(self).forEach(value => {
    console.log(value);
});
Object.entries(self).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});