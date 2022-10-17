var fullName = 'Sam Harris';
var intials = fullName.split(' ').map(name => name[0]).join('.').toUpperCase();
alert(intials);
