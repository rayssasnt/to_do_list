
const button = document.querySelector('.add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.ul-list')


let lista = []



function adicionar(){
    if (input.value==''){
        alerta()
        return;
        
    }

    
    lista.push({
        task: input.value,
        concluida : false
    })
    input.value = ''

    mostrar()

   
}

function alerta(){
    swal("Oops...", "Digite algo válido", "error");
}

function mostrar(){
     let novoIntem = ''

    lista.forEach((tarefa , index) => {
        novoIntem = novoIntem + `
            <li class="li-task ${tarefa.concluida && "done"}">
                <i class="fa-solid fa-check" style="color: #07f223;" onclick = "concluir(${index});"></i>
                <p>${tarefa.task}</p>
                <i class="fa-solid fa-trash" style="color: #f40606;" onclick = "delet(${index})"></i>
            </li> 
             `

    })


    listaCompleta.innerHTML=novoIntem

    localStorage.setItem("lista",JSON.stringify(lista))
}


function concluir(index){
    lista[index].concluida = !lista[index].concluida

    mostrar()

}


function delet(index){
   
    lista.splice(index,1)

    mostrar()
   

}

function loading_task(){
    const taskstorage = localStorage.getItem("lista")


    if (taskstorage){
        lista = JSON.parse(taskstorage) 
    }
    

   
    
    mostrar()
}

loading_task()
button.addEventListener("click",adicionar)