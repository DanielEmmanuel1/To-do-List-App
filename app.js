const inputArea = document.getElementById('input');
const submitButton = document.getElementById('click');
const taskContainer = document.getElementById('taskContainer'); // Reference to the task container


submitButton.addEventListener('click', ()=>{
    const inputedValue = inputArea.value.trim();
    
    if(inputedValue !== ''){
        const newTaskDiv = document.createElement('div');
        newTaskDiv.style.border = '1px solid grey';
        newTaskDiv.style.borderRadius = '2em';
        newTaskDiv.style.paddingTop = '10px';
        newTaskDiv.style.marginBottom = '10px';
        newTaskDiv.textContent = inputedValue;
        newTaskDiv.style.display = 'flex';
        newTaskDiv.style.justifyContent = 'space-between';
        taskContainer.appendChild(newTaskDiv)


        const deleteButton = document.createElement('img');
        deleteButton.src = 'pic/delete.svg';
        deleteButton.style.marginRight = '20px';
        newTaskDiv.appendChild(deleteButton)

        deleteButton.addEventListener('click', ()=>{
            newTaskDiv.remove()
        })
        inputArea.value = '';
    }else{
        alert('Input a task!!!!!!!')
    }
});