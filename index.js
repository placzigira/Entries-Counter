 // document.getElementById("count-el").innerText=1
 // let myAge=19;
 // let humanDogRation= 7
 // let dogAge= myAge * humanDogRation
 // const myName = () =>{
 //     console.log("ZIGIRA Placide")
 // }
 // let lapsCompleted=0;

// const IncrementLaps = () =>{
//     lapsCompleted= lapsCompleted +1;
// }
// IncrementLaps();
// IncrementLaps();
// IncrementLaps();

let count= 0;
let countEl= document.getElementById("count-el");
const increment = () =>{
    count += 1;
    countEl.textContent= count;
}
let saveEl=document.getElementById('save-el');

const save = () => {
    let countStr= count + " - ";
    saveEl.textContent+=countStr;
    countEl.textContent=0;
    count=0;
}

