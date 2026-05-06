
//User type
type User = {
    id: string
    firstname: string
    lastname: string
    telephone: string
    email: string
    password: string
    displayName: string
    imageUrl?: string
}

//breed type
type Breed = {
    id: string
    name: string
    code: string
}

//cage type
type Case = {
    id: string
    typeid: string
    isAvailable: bool
}

//cage type
type CageType = {
    id: string
    type: string
}

//Gender type
type Gender = {
    id: string
    description: string
}

//generation type
type Generation = {
    id: string
    count: number
}


//history type
type History = {
    id: string
    rabbitid: string
    cageid: string
    matewith: string
    datemate: Date
    datelittered: Date
    littercount: number
    kittendeadcount: number
    milecount: number
    femalecount: number
    dateadded: Date
    dateupdated: Date
}

//rabbit type
// type Rabbit = {
//     Id: string
//     code: string
//     cageid: string
//     genderid: string
//     dob: Date
//     imported: boolean
//     generationid: string
//     dateadded: Date
//     dateupdated: Date
//     addedby: string
//     updatedby: string
// }