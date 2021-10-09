function consultar(){

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuesta(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
           //console.log(status);
        }
        
    });

}

function mostrarRespuesta(items){

    let tabla = `<table border="0" width="80%" bgcolor="#FFFFCC" >
                  <tr>
                    <th bgcolor="#0099FF">ID</th>
                    <th bgcolor="#0099FF">NAME</th>
                    <th bgcolor="#0099FF">EMAIL</th>
                    <th bgcolor="#0099FF">AGE</th>
                    <th bgcolor="#0099FF">ACCIONES</th>

                  </tr>`;
                  
    for (let i=0; i < items.length; i++) {
        tabla +=`<tr class="texto" border="0">
                   <td>${items[i].id}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].age}</td>
                   <td>
                        <button onclick="eliminar(${items[i].id})">🗑️ Borrar</button>
                        <a href="detalle.html?id=${items[i].id}">Editar✏️</a>
                   </td> 
                   </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}
