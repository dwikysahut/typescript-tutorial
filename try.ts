
type Person={
    name:string,
    alamat:string
}


function printPerson(person: Person):Person{
    return {name:person.name,alamat:person.alamat}

}
console.log(printPerson({name:'dwiky',alamat:'sentani'}))