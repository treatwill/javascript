// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...
        function tekCamp() {
            for (var x = 1; x <= 100; x++) {
                if ( x%3 === 0 && x%5 === 0) {
                    console.log(x + "TEKcamp");
                }
                else if (x%3 === 0) {
                    console.log(x + "TEK");
                }
                else if (x%5 === 0) {
                    console.log(x + "camp");
                }
                else {
                    console.log(x)
                }
             }
         }
         tekCamp();



        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
        

    function fahrenheitCelsius(fahrenheit) {
        return Math.round((fahrenheit - 32) * (5 / 9));
     }



        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFahrenheit(celsius) {
            return Math.round(celsius * (9 / 5) + 32);
         }



        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            if (age >= 18) {
                return true;
            }
            else {
             return false;
            }
        }
        canVote()







        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        function strToArr() {
            var string = "hi";
            var array = string.split("");
            console.log([array]);
         }
         strToArr()







        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            return String(number).split("").reverse().join("");
         }
         
         console.log(reversePhone(8476442480));


        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...
   
           
          function showCar(make, model, year, color) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.color = color;
          }
         
         const Jaleel = new showCar('Jeep', 'wrangler', 2012, 'silver');
         
         console.log(Jaleel.make);






        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...
        function numbers(val) {

            switch(val) {
                case 10:
                    console.log("10: even");
                    break;
                case 23:
                    console.log("23: odd");
                    break;
                case 3:
                    console.log("3: odd");
                    break;
                case 4:
                    console.log("4: even");
                    break;
            }
          }
         
          numbers(10)
         
          




        /************************************************************************************/
      
       {

        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        //your code...
        for(let i = 0; i < numbers.length; i += 3) {
            if (i % 3 === 0) {
                console.log(i);
            }
        }

    }
      
        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

          let school = foodArray[foodArray.length - 1].program;
          console.log(school);




        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".




       /* let i = 0;
                let food ="";
                function printSent(foodArray,adjectiveArray){
                    for(i = 0; i <= foodArray.length; i++){
                        if(typeof foodArray[i] === 'object')
                            console.log(foodArray[i].program, 'is', adjectiveArray[i]);
                        else {
                            let newFood = foodArray[i].String(foodArray[i].length - 1);
                                if(newFood == 's'){
                                    console.log(foodArray[i]," are ", adjectiveArray[i]);
                                } 
                                else{
                                    console.log(foodArray[i]," is ",adjectiveArray[i]);
                                }
                            }
                    }
                }
        printSent(foodArray,adjectiveArray);




        /************************************************************* */
        // Refactor the for() loop to be a while loop.
{

        for(let i=0; i<10; i++) {
            // console.log(" the value of i in the loop is : " + i);
        }


        //your code...

        
        var h = 0;

        while(h < 10) {
           console.log(h++);
        }

    }
        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...
       function math() {
            let a = 2;
            let b = 30;
            let c = a + b;
            let d = c / 10 ** 2;
            console.log(d);
       }
       math()



        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        // 20
        // 0
        // "zero";
        // const zero = 20;
        // null
        // "0"
        // !""
        // {}
        // () => {console.log("hello TEKcamp!");
        // 125
        // undefined
        // ""

        function tOrF(val) {
            var a = "Because a truthy value is a value that is considered true when encountered in a Boolean context";
            var b = "Because a falsy value is a value that is considered false when encountered in a Boolean context";
            
              if (val) {
                 console.log('truthy ' + a + '.');
              }
              else {
                 console.log('falsey ' + b + '.');
              }
            }
        tOrF()


        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "friday";

        switch(day) {
            case "monday":
                console.log("we got a long week ahead of us...");
                break;
            case "tuesday":
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                break;
            case "wednesday":
                console.log("We are smack dab in the middle of the week");
                break;
            case "thursday":
                console.log("Thursday night... the mood is right");
                break;
            case "friday":
                console.log("TGIF.  Friday truly is the best day of the week!")
                break;
            default:   
                console.log("It's a weekend!");
        }



        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 10;
        var legalAge = (age >= 21) ? "adult" : "minor";
            console.log("minor");
        

        var kidOrTeen = (age > 13 && age < 19) ? "teen" : "not a teenager";
            console.log("not a teenager");
        

        var old = (age > 65) ? "retired" : "still working...";
            console.log("still working...");
        


        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...
        var myLife = {
            name: 'Jaleel',
            age: 26,
            gender: 'male',
            healthy: 'yes',
            hobbies: 'games and sports',
            profession: 'developer',
            education: 'some college',
    

             learn : function() {
                console.log(this.name + " is learning Javascript");
        },

            work : function() {
                console.log("I am grateful for the chance to become a " + this.profession + " with Teksystems!");
            }

    };
    console.log(myLife.learn());
    console.log(myLife.work());

        /************************************************************* */

        {
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            // 1.
            var century = (year > 2000) && (year < 2100) ? "welcome to 21st century" : "you're lost dude!";
                console.log("welcome to the 21st century");
            
            
            // 2.
            for(let i=0; i<nums.length; i++) {
                sum += nums[i];
            }
            console.log(sum);
            
            
            // 3.
            while(i < nums.length) {
                doubled.push(nums[i]*2);
                i++;
            }
            
            console.log(doubled);
        }


        /************************************************************* */
        // Use array methods to solve the following problems.
        {
        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        //your code...
        const result = nums.map(x => x ** 2);
        console.log(result);
        }


{
        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        //your code...


        const fiveBelow = fivePlus.filter(n => n < 5);
            console.log(fiveBelow);

}

        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...





{

        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.

        console.log(showNums.map(x => x/2));
}
   
{
/************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
       let chessPieces = {
           Pawn: 1,
           Rook: 5,
           Bishop: 3,
           Knight: 3,
           Queen: 9,
       }

        function chessCalc(pieces) {
    
            let total = 0;
            for(let i of pieces) {
                for(let j in chessPieces){
                    if(i == j){
                        total += chessPieces[i];
                    }
                    if(j == 0) {
                        return null;
                    }
                }
            }
            return total;
        }

    }


{
        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.
        
        const reversed = ones.reverse();

        console.log('ones', ones);

}
        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.
{
        function performer(cb, performance) {
            console.log("callback");
            cb();
        }

        function performance() {
            console.log("function");
        }

        performer(performance);
    }
        /************************************************************* */
        // For the given list of developers : 

    {
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24

        //your code here...

        const overAge= devs.filter(dev => dev.age > 24)
        console.log(overAge);

    

        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        //your code here...
        const notDevs = devs.filter(dev => !dev['tech_stack'])
        console.log(notDevs);

        /************************** */  
        // Calculate the total age of all the devs

        //your code here...
        
        //GET HELP!!!

        /************************** */  
        // Find all female devs

        //your code here...
        const femaleCode = devs.filter(({gender}) => gender == 'f');
        console.log(femaleCode);
    

        /************************** */  
        // lowercase the genders of every dev

        //your code here...
      // GET HELP FROM AMIR!!!1!
    


        /************************** */  
        // Sort the developers by name

        //your code here
        const devName = devs.sort((a,b) => a.name - b.name);
        console.log(devName);
    

        /************************** */  
        // Sort the devs by age in descending order

        //your code here
        const descendingDev = devs.sort((a,b) => b.age - a.age);
        console.log(descendingDev);
    


        /************************** */  
        // Sort the male coders by age

        //your code here

        const maleCode = devs.filter(({gender}) => gender == 'm').sort((a,b) => a.age - b.age);
        console.log(maleCode);


        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here

        devs.forEach( dev => {
            let sentence = dev.name;
            if (dev['tech_stack']) {
                sentence += ' specializes in ' + dev['tech_stack'].join(', ') + '.';
            }
            else sentence += ' is not a developer.';
            console.log(sentence);
        });
    }

        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        function maxNumber(numbers) {
            //your code...
        }

        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            //your code...
        };



        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


            //your code...
        {
          const x = (x, y) => x * y;
        }

        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.
{
        const mapObj = new Map();
        mapObj.set({company : "TEKsystems"},"object");
        mapObj.set(1, 'integer');
        mapObj.set("String", "string");
        mapObj.set(true, "boolean");
        mapObj.set(.5, 'float');

        console.log(mapObj.has({company : "TEKsystems"}));

        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        //your code...
        console.log(mapObj.has(1, "integer"));

        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
        let arr = [];

            for(let [key, value] of mapObj) {
                arr.push([value]);
            }
            
            console.log(arr[0],arr[1]);
}

        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
         //your code...
        {
        const operations = [
            function add(x,y) {
                return x + y;
            },
            function sub(x,y) {
                return x - y;
            },
            function mul(x,y) {
                return x * y;
            },
            function div(x,y) {
                return x / y;
            }
        ];
        function doMath(x,y) {
            return (operations[(Math.floor(Math.random()* 3)+ 1)](2,3));
            return arr[x,y];
        };
            console.log(doMath());
    }



        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        //your code...
        const multiple = x => y => x * y;
        console.log(multiple(3)(2));


        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        //your code

        const futureValue = function stockGain(basis) {
            var  message = "is how much the stock has increased";
            return function(yrs) {
                var r = 0.05;
                return basis * (yrs + r) + message;
            }
        }




        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        //your code...

        console.log(futureValue(15)(5));

// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */



