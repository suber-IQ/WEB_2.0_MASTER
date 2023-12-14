interface User{
      name: string;
      email: string;
}


const users: User[] = [];

const form = document.getElementById('crud-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLFormElement;
const userList = document.getElementById('userList') as HTMLUListElement;


form.addEventListener('submit', (e) => {
     e.preventDefault();
     const newUser: User = {
        name: nameInput.value,
        email: emailInput.value,
     }

     users.push(newUser);
     displayUsers();
     form.reset();
     
});

function displayUsers(){
      userList.innerHTML = '';
      users.forEach((user,index) => {
            console.log(users);
            const li = document.createElement('li');
            li.innerHTML = `
               <strong>Name:</strong> ${user.name} | <strong>Email:</strong> ${user.email}
               <button onclick="editUser(${index})">Edit </button>
               <button onclick="deleteUser(${index})">Delete </button>
            `
            userList.appendChild(li);
            
      })
};


function editUser(index: number){
      const user = users[index];
      const updatedName = prompt('Enter updated name:', user.name);
      const updatedEmail = prompt('Enter updated email:', user.email);

      if(updatedName && updatedEmail){
            users[index] = { name: updatedName , email: updatedEmail};
            displayUsers();
      }
}

function deleteUser(index: number){
      const user = users[index];
        if(confirm(`Are you sure you want to delete this user? ${user.email}`)){
            users.splice(index,1);
            displayUsers();
        }
}

// Initial display of users
displayUsers();