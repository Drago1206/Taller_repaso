addEventListener("DOMContentLoaded", (e)=>{
    const form= document.querySelector("#form")
    form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let datainput=Object.fromEntries(new FormData(e.target));
    let horas = datainput.horas
    let nombre = datainput.nombre
 //   let horas = document.querySelector("#horas")
    //horas.contains(".horas")
    //let trab= querySelector("#nombre")
    let nomina= (5,208.33*horas)
    if (nombre!=''){
            let tabla= document.querySelector("tbody")
            tabla.insertAdjacentHTML("beforeend",`
            <tr>
            <td>${nombre} </td>
            <td>${horas} </td>
            <td>${nomina} </td>
            </tr>
            `)

            
        }    
    })

})