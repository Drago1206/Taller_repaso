addEventListener("DOMContentLoaded", (e)=>{
    const form= document.querySelector(".form")
    form.addEventListener("submit",(e)=>{
    e.preventDefault
    let datainput=Object.fromEntries(new FormData(e.target));

    let horas = document.querySelector(".horas")
    horas.contains(".horas")
    let trab= querySelector(".trab")
    if (trab==true){
        for(let i=0; i<trab; i++){
        let nomina= (5080*horas)
            let tabla= document.querySelector("tbody")
            tabla.innerHTML="";
            tabla.appendChild("beforeend",`
            <tr>
            <td>${data[trab]} </td>
            <td>${data[horas]} </td>
            <td>${data[nomina]} </td>
            </tr>
            `)

            
        }
    }      
    })

})