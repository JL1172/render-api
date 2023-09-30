let id = 0;
const genId= () => {
    return id++
};

const data = [
    {
      id : genId(),
      name: "Louis Lang",
      email: "louis@email.com",
      address: "234 Street Road",
      occupation: "Bus Driver",
      age: 21
    },
    {
      id : genId(),
      name: "Sarah Smith",
      email: "sarah@email.com",
      address: "123 Park Avenue",
      occupation: "Teacher",
      age: 30
    },
    {
      id : genId(),
      name: "John Johnson",
      email: "john@email.com",
      address: "456 Oak Street",
      occupation: "Engineer",
      age: 35
    },
    {
      id : genId(),
      name: "Emily Davis",
      email: "emily@email.com",
      address: "789 Elm Lane",
      occupation: "Doctor",
      age: 28
    },
    {
      id : genId(),
      name: "Michael Brown",
      email: "michael@email.com",
      address: "567 Maple Drive",
      occupation: "Lawyer",
      age: 40
    },
    {
      id : genId(),
      name: "Anna Martinez",
      email: "anna@email.com",
      address: "321 Birch Court",
      occupation: "Artist",
      age: 24
    },
    {
      id : genId(),
      name: "David Wilson",
      email: "david@email.com",
      address: "876 Cedar Street",
      occupation: "Accountant",
      age: 32
    },
    {
      id : genId(),
      name: "Olivia Lee",
      email: "olivia@email.com",
      address: "543 Pine Avenue",
      occupation: "Nurse",
      age: 27
    },
    {
      id : genId(),
      name: "James Taylor",
      email: "james@email.com",
      address: "654 Redwood Road",
      occupation: "Software Developer",
      age: 29
    },
    {
      id : genId(),
      name: "Emma Rodriguez",
      email: "emma@email.com",
      address: "2345 Willow Lane",
      occupation: "Chef",
      age: 31
    },
    {
      id : genId(),
      name: "Daniel Hernandez",
      email: "daniel@email.com",
      address: "9876 Laurel Court",
      occupation: "Police Officer",
      age: 26
    },
    {
      id : genId(),
      name: "Ava Anderson",
      email: "ava@email.com",
      address: "876 Oakwood Drive",
      occupation: "Marketing Manager",
      age: 33
    },
    {
      id : genId(),
      name: "William Moore",
      email: "william@email.com",
      address: "345 Cedar Lane",
      occupation: "Architect",
      age: 34
    },
    {
      id : genId(),
      name: "Sophia White",
      email: "sophia@email.com",
      address: "6543 Elm Street",
      occupation: "Dentist",
      age: 37
    },
    {
      id : genId(),
      name: "Liam Clark",
      email: "liam@email.com",
      address: "234 Birch Road",
      occupation: "Graphic Designer",
      age: 25
    },
    {
      id : genId(),
      name: "Mia Lewis",
      email: "mia@email.com",
      address: "123 Willow Avenue",
      occupation: "Writer",
      age: 30
    },
    {
      id : genId(),
      name: "Benjamin Turner",
      email: "benjamin@email.com",
      address: "876 Pine Court",
      occupation: "Financial Analyst",
      age: 28
    },
    {
      id : genId(),
      name: "Harper Harris",
      email: "harper@email.com",
      address: "567 Maple Lane",
      occupation: "Pharmacist",
      age: 29
    },
    {
      id : genId(),
      name: "Ethan King",
      email: "ethan@email.com",
      address: "432 Oak Drive",
      occupation: "Mechanic",
      age: 26
    },
    {
      id : genId(),
      name: "Charlotte Scott",
      email: "charlotte@email.com",
      address: "987 Birch Avenue",
      occupation: "Teacher",
      age: 31
    }
  ];

module.exports = {
    data, 
    genId,
}