const tableInfo = {
    tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
    tableContent: [
      {
        'Student Name': 'John',
        Age: 19,
        Phone: '455 - 983 - 0903',
        Address: '123 Ave, San Francisco, CA, 94011',
      },
      {
        'Student Name': 'Alex',
        Age: 21,
        Phone: '455 - 983 - 0912',
        Address: '456 Rd, San Francisco, CA, 94012',
      }
    ]
  };

  const table = document.querySelector('#myTable');
  const tbody = table.querySelector('tbody');

  // Create table rows
  tableInfo.tableContent.forEach(rowData => {
    const row = document.createElement('tr');
    tableInfo.tableHeader.forEach(header => {
      const cell = document.createElement('td');
      cell.textContent = rowData[header];
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  // Add form submission listener
  const form = document.querySelector('#myForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const newRow = document.createElement('tr');
    tableInfo.tableHeader.forEach(header => {
      const cell = document.createElement('td');
      cell.textContent = formData.get(header.toLowerCase());
      newRow.appendChild(cell);
    });
    tbody.appendChild(newRow);
    form.reset();
  });


const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];

const orderedListElement = document.getElementById('ordered-list');
const unorderedListElement = document.getElementById('unordered-list');

// Generate ordered list
list.forEach((item, index) => {
const listItem = document.createElement('li');
listItem.textContent = `${item}`;
orderedListElement.appendChild(listItem);
});

// Generate unordered list
list.forEach(item => {
const listItem = document.createElement('li');
listItem.textContent = `${item}`;
unorderedListElement.appendChild(listItem);
});


const dropDownList = [
    { value: 'newark', content: 'Newark' },
    { value: 'santaClara', content: 'Santa Clara' },
    { value: 'unionCity', content: 'Union City' },
    { value: 'albany', content: 'Albany' },
    { value: 'dalyCity', content: 'Daly City' },
    { value: 'sanJose', content: 'San Jose' },
  ];

  const selectElement = document.getElementById('cities');

  // Populate dropdown list
  dropDownList.forEach(item => {
    const optionElement = document.createElement('option');
    optionElement.value = item.value;
    optionElement.textContent = item.content;
    selectElement.appendChild(optionElement);
  });

  // Handle selection
  function handleSelection() {
    const selectedValue = selectElement.value;
    console.log(selectedValue);
  }