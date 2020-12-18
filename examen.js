function ejercicio1(){

}

function ejercicio2(arrayFechas = [...fechas], fechaInicio, fechaFinal){
    fechas = [];
    fechInicio = new Date(fechaInicio);
    fechFinal = new Date(fechaFinal); 
    fechInicio.toLocaleDateString();
    fechFinal.toLocaleDateString();
    for (i=0; i<arrayFechas.length; i++){
        fechas.push(new Date(arrayFechas[i]));
        if (fechas[i]>=fechInicio && fechas[i]<=fechFinal){
            return(fechas[i].toLocaleDateString());
        }
    }
}

function ejercicio3(...numeros){
    return numeros.reduce((previous, current) => {
      return previous * current;
    });
}

function ejercicio4(nFilas, nColumnas, color) {
    var div = document.getElementById("tabla");
  
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < nFilas; i++) {
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < nColumnas; j++) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("EXAMEN");
        celda.appendChild(textoCelda);
        celda.setAttribute("width", "50px");
        celda.setAttribute("height", "50px");
        celda.style.border = "1px solid black";
        if (j%2==1){
            celda.style.backgroundColor = color;
        }
        hilera.appendChild(celda);
      }
  
      tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);
    div.appendChild(tabla);

    tabla.style.border = "1px solid black";
    tabla.style.borderCollapse = "collapse";
  }

// GRÁFICO
google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Año", "Población", { role: "style" } ],
        ["2017", 14252, "green"],
        ["2018", 23360, "green"],
        ["2019", 40421, "green"],
        ["2020", 43500, "green"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Evolución de la población de Navalcarnero",
        width: 700,
        height: 400,
        bar: {groupWidth: "25%"},
        legend: { position: "none" },
        backgroundColor: "#8FCFFF",
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }