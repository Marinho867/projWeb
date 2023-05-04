//Variáveis e função para exibir ou ocultar tabelas de grade curricular.
let table1 = document.getElementById("container-table1");
let table2 = document.getElementById("container-table2");
let select = document.getElementById("select-modulo");
function mostrarTabela(ele) {
    if (ele.value == "m1") {
        table1.style.display = 'block';
        table2.style.display = 'none';
    } else if (ele.value == "m2") {
        table2.style.display = 'block';
        table1.style.display = 'none';
    } else {
        table1.style.display = 'none';
        table2.style.display = 'none';
    }
}

//função para exibir calendário importado.
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true
    });
    calendar.render();
});

//Funções para aumento/diminuição da fonte 
tamanho = 16;
function diminuir(){
  tamanho--;
  document.body.style.fontSize = tamanho+"px";
}
function aumentar(){
  tamanho++;
  document.body.style.fontSize = tamanho+"px";
}

//Funções para contraste
function contrasteBlack(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
function contrasteWhite(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}