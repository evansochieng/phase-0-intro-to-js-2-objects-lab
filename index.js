// Write your solution in this file!
const employee = {
    "name": "Evans",
    "streetAddress": "Kinoo"
};

// Update object (Undestructive)
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee}
    newObject[key] = value

    return newObject;
    // return {
    //     ...employee,
    //     [key]: value
    // }
};

// Destructively updating object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
};

// Delete property from object
function deleteFromEmployeeByKey(employee, key){
    const newObj = { ...employee}

    delete newObj[key] 

    return newObj
}


// Destructively delete key from object
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]

    return employee;
};