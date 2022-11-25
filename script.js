$(function () {
    $('#btnAdd').on('click', function () {
        var nome, nota, id, img;
        id = $("#txtId").val();
        nome = $("#txtNome").val();
        nota = $("#intNota").val();
        img = document.createElement('img');

        var edit = "<a class='edit' href='JavaScript:void(0);' >Edit</a>";
        var del = "<a class='delete' href='JavaScript:void(0);'>Delete</a>";

        if (nome == "" || nota == "" ) {
            alert("Nome e nota são campos obrigatórios!");

        } else if ( nota < 1 || nota > 10) {    
            alert("Nota deve ser de 0 a 10")

        } else {
            var table = "<tr class=card__linha><td class=card__id>" + id + "</td><td class=card__item>" + nome + "</td><td class=card__item>" + nota + "</td><td>" + edit + "</td><td>" + del + "</td></tr>";
            $("#tblCustomers").append(table);

        }
        id = $("#txtId").val("");
        nome = $("#txtNome").val("");
        nota = $("#intNota").val();
        source = document.getElementById('img').value;
        img = document.createElement('img');
        img.setAttribute('src', source);
        Clear();
    });

    $('#btnUpdate').on('click', function () {
        var nome, nota, id;
        id = $("#txtId").val();
        nome = $("#txtNome").val();
        nota = $("#intNota").val();

        $('#tblCustomers tbody tr').eq($('#hfRowIndex').val()).find('td').eq(1).html(nome);
        $('#tblCustomers tbody tr').eq($('#hfRowIndex').val()).find('td').eq(2).html(nota);

        $('#btnAdd').show();
        $('#btnUpdate').hide();
        Clear();
    });

    $("#tblCustomers").on("click", ".delete", function (e) {
        if (confirm("Tem certeza que quer deletar?")) {
            $(this).closest('tr').remove();
        } else {
            e.preventDefault();
        }
    });

    $('#btnClear').on('click', function () {
        Clear();
    });

    $("#tblCustomers").on("click", ".edit", function (e) {
        var row = $(this).closest('tr');
        $('#hfRowIndex').val($(row).index());
        var td = $(row).find("td");
        $('#txtId').val($(td).eq(0).html());
        $('#txtNome').val($(td).eq(1).html());
        $('#intNota').val($(td).eq(2).html());
        $('#btnAdd').hide();
        $('#btnUpdate').show();
    });
});
function Clear() {
    $("#txtId").val("");
    $("#txtNome").val("");
    $("#intNota").val("");
    $("#hfRowIndex").val("");
}