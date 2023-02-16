
let fName: string = "Idan"
let age: number = 50
let teaching: boolean = true

let classes: string[] = ["typescript", "c#", "presenting"]

// console.log(fName, age, teaching)
// console.table(classes)

enum taxesForms {
  standardTaxes= "1040",
  childCredit= "677",
  cryptCredit= "2055a"
}

// console.log(taxesForms.cryptCredit)

let code: string | number = "11"

code = 11

// console.log(code)

let cars: string[] = ["mustang", "tesla", "truck"]

// returns the value of the element in the array at position index
function findIndex(index: number, array: string[]): string {
  return array[index]

}

// doesn't return anything (hence "void")
function findIndex2(index: number, array: string[]): void {
  console.log(array[index])

}

// console.log(findIndex(1, cars))
// findIndex2(2, cars)

// let classroom: any = {
//   name: "typescript",
//   duration: "6 hours",
//   boring: false
// } 

interface classroom {
  name:string,
  duration: number, 
  boring: boolean,
  room?: string // the ? makes it optional
}

let thisClassroom: classroom = {
  name: "typescript",
  duration: 6,
  boring: false,
  room: "big classroom"
} 

console.log(thisClassroom)

let thatClassroom: classroom = {
  name: "javascript 2.0",
  duration: 2,
  boring: true,
}

console.log(thatClassroom)