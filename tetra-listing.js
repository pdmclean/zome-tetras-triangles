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

  // t column
  td = tr.insertCell();
  const tTd = td; // populate later
  tTd.className = "t";
  tTd.innerHTML = tetra.t;
    
  // Sides column
  td = tr.insertCell();
  const sidesTd = td; // populate later
  sidesTd.className = "sides";
  sidesTd.innerHTML = tetra.sides;
    
  // Angles column
  td = tr.insertCell();
  const anglesTd = td; // populate later
  anglesTd.className = "angles";
  anglesTd.innerHTML = tetra.angles;
    

  // Plane column
  td = tr.insertCell();
  const planeTd = td; // populate later
  planeTd.className = "plane";
  planeTd.innerHTML = tetra.plane;
    

  // Angle column
  td = tr.insertCell();
  const angleTd = td; // populate later
  angleTd.className = "angle";
  angleTd.innerHTML = tetra.angle;
}

function switchModel( url ) {
  const viewer = document.getElementById( "viewer" );
  viewer.src = url;
}
