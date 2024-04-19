function addActive() {
  var name = prompt("Ingrese el nombre del activo:");
  var implementation_state = prompt("Ingrese el estado de implementación:");
  var version = prompt("Ingrese la versión:");
  var internal_ip = prompt("Ingrese el direccionamiento interno:");
  var external_ip = prompt("Ingrese el direccionamiento externo:");
  var impact_lvl = prompt("Ingrese la criticidad:");
  var monitoring_status = prompt("Ingrese la monitorización:");
  var siem_status = prompt("Ingrese la infra seguridad:");

  var table = document.getElementById("active-table");
  var newRow = table.insertRow();

  newRow.innerHTML = "<td>" + name + "</td>" +
                     "<td>" + implementation_state + "</td>" +
                     "<td>" + version + "</td>" +
                     "<td>" + internal_ip + "</td>" +
                     "<td>" + external_ip + "</td>" +
                     "<td>" + impact_lvl + "</td>" +
                     "<td>" + monitoring_status + "</td>" +
                     "<td>" + siem_status + "</td>" +
                     "<td><button onclick='editActive(this)'>Editar</button> <button onclick='deleteActive(this)'>Borrar</button></td>";
}

function editActive(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");
  var name = cells[0].innerText;
  var implementation_state = cells[1].innerText;
  var version = cells[2].innerText;
  var internal_ip = cells[3].innerText;
  var external_ip = cells[4].innerText;
  var impact_lvl = cells[5].innerText;
  var monitoring_status = cells[6].innerText;
  var siem_status = cells[7].innerText;

  var new_name = prompt("Editar Nombre Activo:", name);
  if (new_name === null) return; // Si se cancela, no se realiza ninguna acción

  var new_implementation_state = prompt("Editar Estado Implementación:", implementation_state);
  var new_version = prompt("Editar Versión:", version);
  var new_internal_ip = prompt("Editar Direccionamiento Interno:", internal_ip);
  var new_external_ip = prompt("Editar Direccionamiento Externo:", external_ip);
  var new_impact_lvl = prompt("Editar Criticidad:", impact_lvl);
  var new_monitoring_status = prompt("Editar Monitorización:", monitoring_status);
  var new_siem_status = prompt("Editar Infra Seguridad:", siem_status);

  cells[0].innerText = new_name;
  cells[1].innerText = new_implementation_state;
  cells[2].innerText = new_version;
  cells[3].innerText = new_internal_ip;
  cells[4].innerText = new_external_ip;
  cells[5].innerText = new_impact_lvl;
  cells[6].innerText = new_monitoring_status;
  cells[7].innerText = new_siem_status;
}

function deleteActive(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
