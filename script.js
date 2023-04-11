// Search valur from array
// let arr=[23,12,45,21,76];
// let i=0;
// function search(j){
//     if(i < "5"){
//         if(j===arr[i]){
//              console.log ("true")
   
//         }
//         // else{
//         //    return false
//         // }
//     i++;
    
//     //  console.log(i) 
//     search(j);
// }
// else{
//     console.log("false")
// }
// }
// let NUM=search(76)

//Question no 3 write a para in bottom of HTML document

// function paragraph(para){
//     document.write(para)
// }

//question No 4 Add new list item in un ordered list in HTML document

// function listItem(){
//     let item=prompt("enter item")
//     document.getElementById("item").innerHTML=item;
// }

//question no 5 take information as argument and print it on dom
// function backgroundPara(content,color){
//         let ggg=document.querySelector("#text");
//         ggg.innerHTML=content;
//         ggg.style.backgroundColor=color;
// }
// backgroundPara("hello" ,"yellow")

// question no 6:make local storge of object by using parameter of key

// let studentss=[]
// function studentData(key){
//         let stud={
//             name:prompt("enter name"),
//             className:prompt("enter class name"),
//             rollNo:prompt("enter roll number"),
//         };
//         studentss.push(stud)
//         console.log(studentss)
       
//         let stringify=JSON.stringify(studentss);
//         localStorage.setItem(key,stringify)

// }

//question 7 :enter object and retrieve by parameter

let prevStudents=localStorage.getItem("student")
let studentss =prevStudents?JSON.parse(prevStudents):[];
function studentData(key){
        let stud={
            name:prompt("enter name"),
            className:prompt("enter class name"),
            rollNo:prompt("enter roll number"),
        };
        studentss.push(stud)
        console.log(studentss)
       
        let stringify=JSON.stringify(studentss);
        localStorage.setItem(key,stringify)

}