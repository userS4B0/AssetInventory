function addAsset() {
  // Prompting user to input information for the new active
  var name = prompt("Enter the name of the asset:");
  var implementation_state = prompt("Enter the implementation state:");
  var version = prompt("Enter the version:");
  var internal_ip = prompt("Enter the internal IP address:");
  var external_ip = prompt("Enter the external IP address:");
  var impact_lvl = prompt("Enter the impact level:");
  var monitoring_status = prompt("Enter the monitoring status:");
  var siem_status = prompt("Enter the SIEM status:");

  // Getting reference to the table and inserting a new row
  var table = document.getElementById("asset-table");
  var newRow = table.insertRow();

  // Populating the new row with data and buttons for editing and deleting
  newRow.innerHTML = "<td>" + name + "</td>" +
                     "<td>" + implementation_state + "</td>" +
                     "<td>" + version + "</td>" +
                     "<td>" + internal_ip + "</td>" +
                     "<td>" + external_ip + "</td>" +
                     "<td>" + impact_lvl + "</td>" +
                     "<td>" + monitoring_status + "</td>" +
                     "<td>" + siem_status + "</td>" +
                     "<td><button class='edit-asset-btn'>Editar</button> <button class='delete-asset-btn'>Borrar</button></td>";
}

function editAsset(button) {
  // Getting the row and cells of the active to be edited
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");

  // Extracting current data of the active
  var name = cells[0].innerText;
  var implementation_state = cells[1].innerText;
  var version = cells[2].innerText;
  var internal_ip = cells[3].innerText;
  var external_ip = cells[4].innerText;
  var impact_lvl = cells[5].innerText;
  var monitoring_status = cells[6].innerText;
  var siem_status = cells[7].innerText;

  // Prompting user to edit the data
  var new_name = prompt("Edit Asset Name:", name);
  if (new_name === null) return; // If canceled, no action is taken

  var new_implementation_state = prompt("Edit Implementation State:", implementation_state);
  var new_version = prompt("Edit Version:", version);
  var new_internal_ip = prompt("Edit Internal IP Address:", internal_ip);
  var new_external_ip = prompt("Edit External IP Address:", external_ip);
  var new_impact_lvl = prompt("Edit Impact Level:", impact_lvl);
  var new_monitoring_status = prompt("Edit Monitoring Status:", monitoring_status);
  var new_siem_status = prompt("Edit SIEM Status:", siem_status);

  // Updating the cells with the edited data
  cells[0].innerText = new_name;
  cells[1].innerText = new_implementation_state;
  cells[2].innerText = new_version;
  cells[3].innerText = new_internal_ip;
  cells[4].innerText = new_external_ip;
  cells[5].innerText = new_impact_lvl;
  cells[6].innerText = new_monitoring_status;
  cells[7].innerText = new_siem_status;
}

function deleteAsset(button) {
  // Getting the row of the active to be deleted and removing it
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Asignación de los manejadores de eventos a los botones
document.addEventListener("click", function(event) {
  var target = event.target;

  if (target.classList.contains("edit-asset-btn")) {
    editAsset(target);
  } else if (target.classList.contains("delete-asset-btn")) {
    deleteAsset(target);
  }
});

// Asignación del manejador de eventos al botón de "Agregar Servidor"
document.getElementById("add-asset-btn").addEventListener("click", addAsset);
