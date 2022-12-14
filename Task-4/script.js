
// array
console.log("creating Array")
let number=[20,14,35,24,50];
console.log(number);
console.log(`lenght of array is:${number.length}`);
//  1) basic array method
// 1) push 
// eg.1
console.log("push method");
let friends=["sonali","sakshi","komal","dipali"];
console.log(friends);
let newfriends=friends.push("harshada");
console.log(friends);

// eg.2
let fruits=['mango',"banana","apple","cherry"];
console.log(fruits);
let addfruits=fruits.push("orange")
console.log(fruits);
console.log(" ");


// //  2)pop 
// eg .1
console.log("pop method");
let friend=["sonali","sakshi","komal","dipali"];
console.log(friend);
let newfriend=friend.pop();
console.log(friend); 
console.log(`removed element of array: ${newfriend}`);

// eg .2
let num=[10,23,45,67,80];
console.log(num);
let removenum=num.pop();
console.log(num);
console.log(`removed element of array: ${removenum}`);
console.log(" ");

// 3) unshift 
// eg.1
console.log("unshift method");
let color=["pink","orange","black","white"];
console.log(color);
let addcolor=color.unshift("yellow");
console.log(color);

// eg.2
let  favfruit=["mango","banana","cherry","orange"];
console.log(favfruit);
let addfavfruit=favfruit.unshift("apple");
console.log(favfruit);
console.log(" ");

// 3) shift 
// eg.1
console.log("shift method");
let colors=["red","pink","orange","black","white"];
console.log(colors);
let removecolors=colors.shift();
console.log(colors);
console.log(`removed element:${removecolors}`);

// eg.2
let  favfruits=["banana","cherry","orange","mango"];
console.log(favfruits);
let removefavfruits=favfruits.shift();
console.log(favfruits);
console.log(`removed element:${removefavfruits}`);
console.log(" ");

// concatination of Array
console.log("concatination of array");
let besties=["komal","sakshi","dipali","nikita"];
console.log(besties);
let newBesties=["harshu","bhakti","shubhagi"];
console.log(newBesties);
let contcatArray=besties.concat(newBesties);
console.log(contcatArray);
console.log(" ");
// modifying array method 
// 1)splice 
// eg 1
console.log("splice method");
let subject=["science","hindi","marathi","English"];
console.log(subject);
let mysubject=subject.splice(1,0,"maths");
console.log(subject);

// eg 2
let coursesub=["java","php","cpp","html"];
console.log(coursesub);
let mycoursesub=coursesub.splice(2,1,"javascript");
console.log(coursesub);
console.log(" ");

 
// 2)slice 
// eg 1
console.log("slice method");
let subjects=["science","hindi","marathi","English"];
console.log(subjects);
// let mysubjects=subjects.slice();
// console.log(mysubjects);
let mysubjects=subjects.slice(1,3)
console.log(mysubjects);

// eg 2
let subMarks=[60,78,89,55,90,34];
console.log(subMarks);
let mysubMarks=subMarks.slice(2,5);
console.log(mysubMarks);
console.log(" ");

// 3) fill
// eg .1
let Name=["komal","sakshi","dipali","nikita"];
console.log(Name);
console.log(Name.fill("sonali"));

// eg .2
let bestFriend=["harshada","dipali","sakshi","nikita"];
console.log(bestFriend);
console.log(Name.fill("komal"));
console.log(" ");

//  4) toString
// eg .1
console.log("toString method");
let flower=["lotus","rose","jasmin"];
console.log(flower);
console.log(flower.toString());

// eg .2
let clgname=["svery","svipe","icms"];
console.log(clgname);
console.log(clgname.toString());
console.log(" ");

// 5)join 
// eg 1
console.log("join method");
let flowers=["juhi","jai","lotus","rose","jasmin"];
console.log(flower);
console.log(flower.join("-"));

// eg .2
let clgnames=["kbp","svery","svipe","icms"];
console.log(clgname);
console.log(clgname.join("|"));
console.log(" ");

// 3) serching and sorting method
// 1) sort()
// eg 1
console.log("sort method");
let stringValue=["sonali","dipali","komal","sakshi"];
console.log(stringValue);
console.log(stringValue.sort());

// eg 2
let className=["tanu","dipali","komal","sakshi","nitita","rani"];
console.log(className);
console.log(className.sort());
console.log(" ");

// 2)reverse 
// eg 1
console.log("reverse method");
let stringValues=["nisha","sonali","dipali","komal","sakshi"];
console.log(stringValues);
console.log(stringValues.sort());
console.log(stringValues.reverse());
console.log(" ");

// eg 2
let classNames=["sakshi","tanu","dipali","komal","nitita","rani"];
console.log(classNames);
console.log(classNames.sort());
console.log(classNames.reverse());
console.log(" ");

// 3) include
// eg 1
let food=["pavbhaji","roti","chikna","rice"];
console.log(food);
console.log(food.includes("roti"));

// eg 2
console.log(food.includes("chapati"));
console.log(" ");

// 4)indexof
let favFood=["pavbhaji","roti","chikna","rice"];
console.log(favFood);
console.log(favFood.indexOf("rice"));

// eg 2
console.log(favFood.indexOf("bhel"));
console.log(" ");

// 4) Static Array method 
// 1) Array.from 
// eg 1
console.log("Array from method");
let myName=("sonali");
console.log(myName);
console.log(Array.from(myName));

// eg 2
let animal=("dog");
console.log(animal);
console.log(Array.from(animal));
console.log(" ");

// 2)Array.of
console.log("Array of method");
let myNames=Array.of("sonali","dipali","sakshi");
console.log(myNames);

// eg 2
let animals=Array.of("dog","cat","ox","goat",1);
console.log(animals);
console.log(" ");

// 3)Array isArray
// eg 1
console.log("Array isArray method");
console.log(Array.isArray(["sima","komal","dipali"]));
console.log(Array.isArray("nisha"));
console.log(" ");

// 5) Array Iterrator Method 
// 1) every 
console.log("every method");
// eg 1
let price=[100,78,60,80,45,20];
console.log(price);
const checkprice=price.every((currentvalue,index)=>{
      return currentvalue >30;
});
console.log(checkprice);

//  2) some 
console.log("some method");
let prices=[25,78,59,40,98,67];
console.log(prices);
const newprices=prices.some((currentvalue)=>{
    return currentvalue >78;
});
console.log(newprices);
console.log(" ");

// 3) find 
// eg 1
console.log("find method");
let studMark=[45,90,78,56,59,95];
console.log(studMark);
const checkstudMark=studMark.find((currentvalue)=>{
     return currentvalue >70;
});
console.log(checkstudMark);
console.log(" ");

// 4) filter 
// eg 1
console.log("filter mthod");
let studMarks=[45,90,78,56,59,95];
console.log(studMarks);
const checkstudMarks=studMark.filter((currentvalue)=>{
     return currentvalue >70;
});
console.log(checkstudMarks);

const mobile=[
    {
        brand:"vivo",
        model:"vivo 30",
        price:"15000",
    },
    {
        brand:"mi",
        model:"8 pro",
        price:"40000",
    },
    {
        brand:"oppo",
        model:"opp0 30",
        price:"20000",
    },
    {
        brand:"mi",
        model:"6 pro",
        price:"30000",
    },
    {
        brand:"vivo",
        model:"vivo 20",
        price:"8000",
    }
];

const mimobile=mobile.filter((mobile)=>{
    //   console.log(mobile);
         if(mobile.brand === "mi"){
             return true ;
         }
});
console.log(mimobile);
console.log(" ");

// 5) map 
console.log("map method");
let numArray=[30,78,56,98,58];
console.log(numArray);
const mapnum=numArray.map((currentvalue)=>{
         return currentvalue *2;
});
console.log(mapnum);
console.log(" ");

// 6) foreach 
console.log("for each method");
let numArrays=[47,89,30,78,56,98,58];
console.log(numArrays);
const mapnums=numArrays.forEach((currentvalue)=>{
         console.log(currentvalue+2);   
});
console.log(" ");
// eg 2
console.log("reduce method");

let numReduce=[2,4,7,5];
const totalnum=numReduce.reduce((total,number)=>{
     sum=total+number;
     return sum;
});
console.log(totalnum);
