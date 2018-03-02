const tasks = []
const taskLogic = {

    create(text){

        const task = {
            id:new Date().getTime().toString(),
            text:text,
            done:false
        }

        tasks.push(task)
        return task

    },

    markDone(id){
        const index = tasks.findIndex((taskelement) => taskelement.id === id)

        if(tasks.length===0){
            throw Error("No task in database")
        }else{
            tasks[index].done = true
            return tasks[index]
        }

    },

    remove(id){

        const index = tasks.findIndex((taskElement) => taskElement.id === id)
        if(index<0){
            throw Error("There are no task to delete")
        }else{
            tasks.splice(index,1)
            return tasks
        }


    },

    listDone(){
        const done = tasks.filter(element => element.done===true)
        return done
    },

    listTodo(){
        return tasks
    },

    removeAll(){
        tasks.splice(0,tasks.length)
        return tasks
    },

    update(id,text){
        const index = tasks.findIndex(element => element.id === id)

        if(index<0){
            throw Error("There is no task")
        }else{
            tasks[index].text=text
            return tasks[index]
        }
    }

}
module.exports = taskLogic