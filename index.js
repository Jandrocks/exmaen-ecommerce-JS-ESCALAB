const mostrarProductos = document.getElementById("button");
const btn = document.getElementById("carritoAñadir");

const contenedorProductos = () => {
  const productos = [
    {
      link: "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/a/g/agua-san-luis-sin-gas-625ml-5024-default-1.jpg",
      id: 1,
      tittle: "agua sin gas 650 ml",
      price: 1.5,
      stock: 50,
    },
    {
      link: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-OV2l28X8.jpg",
      id: 2,
      tittle: "vinos tintos",
      price: 15,
      stock: 30,
    },
    {
      link: "https://plazavea.vteximg.com.br/arquivos/ids/16380945-1000-1000/20111231.jpg",
      id: 3,
      tittle: "gaseosas 1lt",
      price: 4.5,
      stock: 20,
    },
    {
      link: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/9--Uj5mkKd.jpg?wid=1500&hei=1500&qlt=70",
      id: 4,
      tittle: "helados 1lt",
      price: 2,
      stock: 70,
    },
    {
      link: "https://cdn.shopify.com/s/files/1/0006/4510/3652/products/Panetone_1200x1200.jpg?v=1605802636",
      id: 5,
      tittle: "paneton",
      price: 20,
      stock: 100,
    },
    {
      link: "https://vegaperu.vtexassets.com/arquivos/ids/159380/550277.jpg?v=637830387703130000",
      id: 6,
      tittle: "yogurt 1kg",
      price: 6,
      stock: 30,
    },
    {
      link: "https://labodegadeltioani.com/wp-content/uploads/2021/02/28372.jpg",
      id: 7,
      tittle: "aceite 1lt",
      price: 5.5,
      stock: 50,
    },
    {
      link: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40546552_1-Y_Pz1Ew7-large.jpg",
      id: 8,
      tittle: "azucar 1kg",
      price: 6.5,
      stock: "30 kg",
    },
    {
      link: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41278843_1-DJS0Myzf.jpg?wid=1500&hei=1500&qlt=70",
      id: 9,
      tittle: "huevo 1kg",
      price: 5.5,
      stock: "50 kg",
    },
    {
      link: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-8wdZYjfi.jpg?wid=1500&hei=1500&qlt=70",
      id: 10,
      tittle: "arroz 1kg",
      price: 3.5,
      stock: "60 kg",
    },
    {
      link: "https://falabella.scene7.com/is/image/FalabellaPE/18314197_3?wid=1500&hei=1500&qlt=70",
      id: 10,
      tittle: "sal de maracas gruesas",
      price: 3.5,
      stock: "60 kg",
    },
    {
      link: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42187961_2-vdIEWRhr.jpg?wid=1500&hei=1500&qlt=70",
      id: 10,
      tittle: "fideos caracol 250g",
      price: 1.5,
      stock: "60 kg",
    },
  ];
  const isOK = true;
  const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isOK) {
          resolve(task);
        } else {
          reject("error");
        }
      }, time);
    });
  };
  // productos.forEach(producto => console.log(producto))
  productos.forEach((producto) => {
    // cleanContainers();
    const html = `

  <article>
          <div class="card" style="width: 18rem;">
          <img src=${producto.link} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.tittle}</h5>
              <p class="card-text">Precio: $${producto.price}</p>
              <p class="card-text">Stock: ${producto.stock}</p>
              <p class="card-text">Id: ${producto.id}</p>

              <button class="carritoAñadir" type="submit" id="carritoAñadir" onclick="carritoAñadir('${producto.link}','${producto.tittle}','${producto.price}','${producto.id}')" > añadir al carrito </button>
            </div>
        </div>
</article>
`;
    customFetch(2000, producto).then((data) => {
      const main = document.querySelector("main");
      const contenedor = document.createRange().createContextualFragment(html);
      main.append(contenedor);
    });
  });
};
const template1 = () => {
  if (state.todolist.length < 1)
    return `<p><em> Lista sin tareas por hacer </em></p>`;
  let todos = state.todolist.map(
    (item) =>
      `
  <article  id="articleCarrito" class="articleCarrito">
      <div id="contenedorProductosCarrito" class="div-containerCarrito">
        <img class="imgCarrito" src="${item.thumbnail}" alt="Productos"/>
      </div>
      <div class="infoCarrito">
        <h3>${item.title}</h3>
        <h3> Precio: $ ${item.price} </h3>
        <p> ID: ${item.id}</p>
      </div>
    <button class="buttonCarrito" class="button" onclick="eliminarItem('${item.id}')"> eliminar </button>
  </article> 
  `
  );
  return todos;
};
mostrarProductos.addEventListener("click", contenedorProductos);
