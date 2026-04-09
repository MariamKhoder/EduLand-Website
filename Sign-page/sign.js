
  let signUpButton = document.getElementById('register');
  let signInButton = document.getElementById('login');
  let container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
    container.classList.add('active');
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove('active');
  });


  let users = JSON.parse(localStorage.getItem('users')) || [];

  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('regName').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;

    let existingUser = users.find(function(user) {
  return user.email === email;
}
);
    if (existingUser) {
      alert("User already exists!");
      return;
    }

    let newUser = { name, email, password };
    users.push(newUser);

    
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registered successfully!');
    document.getElementById('registerForm').reset();
  });

  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    users = JSON.parse(localStorage.getItem('users')) || [];
let user = users.find(function(user) {
  return user.email === email && user.password === password;
});


    if (user) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password.');
    }
  });