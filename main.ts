import inquirer from "inquirer";

let todos: string[] = []
let condition = true;
while(condition){

    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select an option",
            choices: ["Add", "Update", "View", "Delete", "Exit",],
        }
    ]);
    if (ans.select === "Add"){
    
        let AddTodo = await inquirer.prompt([{
            name:"todo",
            type:"input",
            message:"Add items in the list"
        },
    ])
    
         todos.push(AddTodo.todo);
         console.log(todos);   
    }

    if (ans.select === "Update"){

        let UpdateTodo = await inquirer.prompt([{
            name:"todo",
            type:"input",
            message:"Update items",
            choice: todos.map(item => item)
        },
    ])
    let AddTodo = await inquirer.prompt([{
        name:"todo",
        type:"input",
        message:"Add items in the list"
    },
])   
let newTodo = todos.filter(val => val !== UpdateTodo.todos)
todos = [...newTodo, AddTodo.todo]
console.log(todos);
}
    if (ans.select === "View"){
        console.log("******TO-DO LIST******"); 
        console.log(todos);   
    }

    if (ans.select === "Delete"){
        let DeleteTodo = await inquirer.prompt([{
            name:"todo",
            type:"list",
            message:"Select items to delete",
            choices: todos.map(item => item)
        }
    ])
    let newTodo = todos.filter(val => val !== DeleteTodo.todo);
    todos = [...newTodo];
    console.log(todos);
}
 
       if (ans.select === "Exit"){
        console.log("Exiting program...");
        condition = false;
       }
}
