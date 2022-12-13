//creating an object

/*
const jonas = {     //object literal syntax

    firstName: 'jonas',
    lastName: 'sunny',
    age: 2037 - 1993,
    job: 'teacher',
    friends: ['mike', 'peter', 'steve']




};
console.log(jonas);

// using dot notation to add properties to objects

jonas.location = 'india';
console.log(jonas.lastName);//disadvantage with dot notation is it displays only values or properties that are present in object else it displays undefined


// using bracket notation add properties to objects

jonas['instagram'] = 'deepcodes';
console.log(jonas['lastName']);  //advantage with bracket notation is it displays  values or properties that are present in object or not


//we can keep expression in bracket notation tooo like below
//both firstname and lastname have common thing name so we write as follow

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


console.log(jonas);



//challenge ....jonas has 3 friends,and his best friend is mike 

console.log(`${jonas.firstName} has ${jonas.friends.length} friends,, and his best friend is ${jonas.friends[0]}`);



*/

//OBJECT-METHODS


const jonas = {

    firstName: 'jonas',
    lastName: 'sunny',
    birthYear: 1993,
    job: 'teacher',
    friends: ['mike', 'peter', 'steve'],
    hasDriverLicense: true,

    //TYPE-1

    // calcAge: function (birthYear) // any function that is attached to object is called method....here we are attaching function to object as an property (function expresion) instead of declaration...it acts as property
    //{
    //  return 2037 - birthYear;
    //}
    //   console.log(jonas.calcAge(1993));   //dot
    //console.log(jonas['calcAge'](1993));  //bracket


    //type-2 .....using this property in function




    // calcAge: function () {
    //console.log(this);
    // return 2037 - this.birthYear;
    //}

    //console.log(jonas.calcAge());   //dot
    //console.log(jonas['calcAge'](1993));  //bracket


    // TYPE-3 (ADVANCED) IF WE WANT TO PRINT AGE MULTIPLE TIMES 


    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);





