const User = require("./models").user;
const TodoItem = require("./models").todoItem;

async function findAllUsers() {
    try {
      const allUsers = await User.findAll();
      return allUsers.map(user => user.get({plain: true}))
      
    } catch (e) {
      console.error(e);
    }
  }
  
  findAllUsers().then(allUsers => console.log(allUsers));

  async function findAllTodoItems(){
      try {
        const allTodoItems = await TodoItem.findAll();
        return allTodoItems.map(item => item.get({plain: true}))

      } catch(e) {
          console.error(e);
      }
  }

  findAllTodoItems().then(todos => console.log(todos));


  async function findUserByPk(key){
      try {
        const userByPk = await User.findByPk(key);
        return userByPk ? userByPk.get({ plain: true }) : "Not found!";
      }  catch(e) {
          console.error(e)
      }  
  }

  findUserByPk(1).then(user => console.log(user))


  async function createNewUser(){
      try {
        const newUser = await User.create({
            name: "John Frusciante",
            email: "john@john",
            phone: 54321,
            password: "test"
        });
        return newUser.get({ plain: true });
      } catch(e) {
          console.error(e)
      }
  }

//   createNewUser().then(newUser => console.log(newUser))

async function searchImportantTodoItems(){
    try {
        const importantTodoItems = await TodoItem.findAll({ where: { important: true } });
        return importantTodoItems.map(item => item.get({plain: true}))
    } catch(e) {
        console.error(e)
    }
}

searchImportantTodoItems().then(important => console.log(important))




