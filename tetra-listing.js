import models from './zometriangles.json' assert { type: 'json' };

const table = document.getElementById( "partsTable" );
const tbody = table.createTBody();
for (const tetra of models) {
    const id = tetra.id;
    const url = tetra.url;
    const tr = tbody.insertRow();
    fillRow(tr, tetra);
    tr.addEventListener("click",
        function (event) { 
            if(url) {
                switchModel(url);
            } else {
                alert("Triangle #" + id + " is not available.\n\nPlease help us collect the full set.");
            }
            const currentTr = document.getElementById( "current" );
            currentTr.innerHTML = "";
            fillRow(currentTr, tetra);
        }
    );
}

function fillRow(tr, tetra) {
  const id = tetra.id;
  const url = tetra.url;
  if(!tr.id) {
    tr.id = "tetra-" + id;
  }
  tr.setAttribute("data-id", id);
  // Id column
  let td = tr.insertCell();
  td.className = url ? "ident done" : "ident todo";
  td.innerHTML = id;
  // Balls column
  td = tr.insertCell();
  td.className = "Name";
}

function switchModel( url ) {
  const viewer = document.getElementById( "viewer" );
  viewer.src = url;
}
