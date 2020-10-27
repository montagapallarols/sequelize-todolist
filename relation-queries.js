const { user, todoItem, todoList } = require("./models");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
    // include: [{ model: user, attributes: ["name"] }],
  });

  return lists.map((list) => list.get({ plain: true }));
}

listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
    const allUsers = await user.findAll({
      include: { model: todoList, attributes: ["name"] },
    });
    return allUsers.map((user) => user.get({ plain: true }));
  }
  
  getUsers().then((users) => console.log(users));