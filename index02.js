let contendorBuscador = document.querySelector(".contenedorBudcador");
console.log("validar", contendorBuscador);

const botonBuscar = document.getElementById("buscar");
let offset = 0;
let search = "";
let api = `https://api.mercadolibre.com/sites/MLC/search?q=${search}&offset=${offset}`;

const productosMercadoLibre = async () => {
  try {
    // cleanContainer();
    let search = document.getElementById("valor").value;
    const respuesta1 = await fetch(
      `https://api.mercadolibre.com/sites/MLC/search?q=${search}&offset=${offset}`
    );
    const respuesta2 = await respuesta1.json();
    respuesta2.results.forEach((productoMercadoL) => {
      const html = `
    <article>
              <div class="card" style="width: 18rem;">
              <img src=${productoMercadoL.thumbnail} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${productoMercadoL.title}</h5>
                  <p class="card-text">Precio: $${productoMercadoL.price}</p>
                  <p class="card-text">Id: ${productoMercadoL.id}</p>

                  <button 
                    class="carritoAñadir" 
                    type="submit" 
                    id="carritoAñadir1" 
                    onclick="carritoAñadir('${productoMercadoL.thumbnail}','${productoMercadoL.title}', '${productoMercadoL.price}', '${productoMercadoL.id}')" > 
                    añadir al carrito 
                  </button>
                </div>
            </div>
    </article>
  `;
      const main = document.querySelector("main");
      const contenedor = document.createRange().createContextualFragment(html);
      main.append(contenedor);
    });
  } catch (err) {
    console.log(err);
  }
};
botonBuscar.addEventListener("click", productosMercadoLibre);

//EL STATE
const state = {
  todolist: [],
};

//TEMPLATE UI
const template = () => {
  if (state.todolist.length < 1)
    return `<p><em> Lista sin tareas por hacer </em></p>`;

  let todos = state.todolist.map(
    (item) =>
      `
  <article id="articleCarrito" class="articleCarrito">
          <div id="contenedorProductosCarrito" class="div-containerCarrito">
            <img
              class="imgCarrito"
              src="${item.thumbnail}"
              alt="Productos"
            />
            </div>
          <div class="infoCarrito">
            <h3>${item.title}</h3>
            <h3> Precio: $ ${item.price} </h3>
            <p> ID: ${item.id}</p>
            
            </div>
      
             <button class="buttonCarrito" onclick="eliminarItem('${item.id}')"> eliminar </button>
  </article>
  `
  );
  return todos;
};

//Render UI
const render = () => {
  const divCarrito = document.getElementById("divCarrito");
  if (!divCarrito) return;
  divCarrito.innerHTML = template();
  divCarrito.innerHTML = template1();
};

document.addEventListener("DOMContentLoaded", render);

const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }
};

const getState = () => JSON.parse(JSON.stringify(state));

function carritoAñadir(...params) {
  const [thumbnail, title, price, id] = params;
  state.todolist.push({ thumbnail, title, price, id });
  const numeroDeArray = document.getElementById("numeroDeArray");
  numeroDeArray.textContent = `${state.todolist.length}`;
  render();
}
//filtro con el nombre del boton
function eliminarItem(id) {
  const prevent = getState();
  const actualState = prevent.todolist.filter((items) => items.id != id);
  setState({ todolist: actualState });
  render();
}
function botonNext() {
  // cleanContainer();
  offset += 50;
  productosMercadoLibre(api);
}
// boton para hacer desaparecer los productos y hacer aparecer los
function carritoMostrar() {
  let mainCarritoMostrar = document.getElementById("mainCarrito");
  let mainProductos = document.getElementById("main");

  contendorBuscador.classList.add("hidden");
  mainProductos.classList.add("displaynone");
  mainCarritoMostrar.classList.remove("displaynone");
  mainCarritoMostrar.classList.add("displayBlock");
}
//boton para hacer aparecer los productos y seguir agregando
function seguirComprando() {
  let mainCarritoMostrar = document.getElementById("mainCarrito");
  let mainProductos = document.getElementById("main");
  contendorBuscador.classList.remove("hidden");
  mainProductos.classList.remove("displaynone");
  mainProductos.classList.add("main");
  mainCarritoMostrar.classList.remove("displayBlock");
  mainCarritoMostrar.classList.add("displaynone");
  numeroDeArray.textContent = `${state.todolist.length}`;
}
