// 1. 
// ● Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
// ● Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
// ● Given the array, implement a function to calculate the total value of the items.
const itemsObject= [
    {quantity:1, price:200},
    {quantity:3, price:350},
    {quantity:5, price:400},
];

// Function to double the quantity and price of each item
const doubleItems=(itemsObject)=>{
    return itemsObject.map(item=>({
        quantity:item.quantity*2,
        price:item.price*2
    }));
};

// Function to filter items with quantity>2 and price>300
const filterItems=(itemsObject)=>{
    return itemsObject.filter(item=>item.quantity>2 && item.price>300);
};

// Function to calculate the total value of the items
const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);
  };

const doubledItems = doubleItems(itemsObject);
console.log(doubledItems);

const filteredItems = filterItems(itemsObject);
console.log(filteredItems);

const totalValue = calculateTotal(itemsObject);
console.log(totalValue);


// 2.
// Given the string, implement a function to remove all the non-alphabet characters
// and extra space in the string and convert the string to all lowercase
const string=' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array   ';

const cleanString = (str) => {
    // Remove non-alphabetic characters and extra spaces

    // The first replace method uses a regular expression /[^a-zA-Z ]/g to match any character that is not a letter (a-z or A-Z) or a space.
    // The ^ character inside the square brackets means "not"
    // so the regular expression matches any character that is not in the range of a-z or A-Z or a space. 
    // The g flag at the end of the regular expression means "global"
    // so it replaces all occurrences of the matched characters in the string with an empty string ('').

    // The second replace method uses a regular expression /\s+/g to match one or more whitespace characters (spaces, tabs, line breaks, etc.). 
    // The + character after the \s means "one or more occurrences". 
    // The g flag again means "global", so it replaces all occurrences of one or more whitespace characters with a single space (' '). 
    const cleaned = str.replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, ' ');

    // Convert to lowercase
    return cleaned.toLowerCase();
  };

  const cleanedString=cleanString(string);
  console.log(cleanedString);


  // 3.
  // Implement a function to merge two arrays of objects on uuid
  // but first has uuid and name
  // second has uuid and role. With the not existing property, fill with null. 
  // Sort according to uuid after merge.
  const first=[
    {uuid:2, name: 'test'},
    {uuid:5, name: 'test5'},
    {uuid:3, name: 'test3'}
  ];
  const second=[
    {uuid:6, role:'pm'},
    {uuid:4, role:'engineer'},
    {uuid:1, role:'manager'},
    {uuid:2, role:'associate'}
  ];

  const mergeArrays = (arr1, arr2) => {
    const merged = [];

    // The function first iterates over the objects in the first array arr1 using forEach.
    // For each object in arr1, 
    // it looks for a matching object in the second array arr2 based on the uuid property using the find method. 
    // If a matching object is found, it creates a new object with properties from both objects, 
    // using the name property from the first object and the role property from the second object. 
    // If a matching object is not found, it creates a new object with a role property set to null. 
    // It then pushes the new object to the merged array.
    arr1.forEach(obj1 => {
      const obj2 = arr2.find(obj2 => obj2.uuid === obj1.uuid) || { role: null };
      merged.push({ uuid: obj1.uuid, name: obj1.name || null, role: obj2.role });
    });

    // The function then iterates over the objects in the second array arr2 using forEach. 
    // For each object in arr2, 
    // it looks for a matching object in the first array arr1 based on the uuid property using the find method. 
    // If a matching object is not found, 
    // it creates a new object with a name property set to null and a role property from the second object, 
    // and then pushes it to the merged array.
    arr2.forEach(obj2 => {
      const obj1 = arr1.find(obj1 => obj1.uuid === obj2.uuid);
      if (!obj1) {
        merged.push({ uuid: obj2.uuid, name: null, role: obj2.role });
      }
    });

    merged.sort((a, b) => a.uuid - b.uuid);
    return merged;
  };
  
  const mergedArrays = mergeArrays(first, second);
  console.log(mergedArrays);
  