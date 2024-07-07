let san ={
    name:"sanjay1",
    class:"9am",
}
// console.log(san.name)
// console.log(san["class"])

san["name"]="Mothilal"
san["name"]="Sanjay"
san["name1"]="Mothilal Sanjay"

// Object.freeze(san)

Object.freeze(san)

san["name"]="Keerthilal"
san["name1"]="Keerthilal Sanjay "

console.log(san)

console.log(Object.keys(san))
console.log(Object.values(san))
console.log(Object.entries(san))