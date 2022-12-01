
const apiKey = "40VuG9YmZJQVbE6aAwVC94674qybaGVD";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


// peticion.then( resp => {
//     // esta devolviendo un valor rato entoncs hacemos un json
//    resp.json().then ( data => {
//     console.log(data);
//    })
// })

// codigo mas limpio y con el mismo resultado
// esto se conoce como promesa en cadena
peticion
    .then( resp => resp.json())
    // ({data})  para traer exactamente esta parte
    .then( ({data}) => {
        // para practica con desesctructuracion
        const { url } =  data.images.original;
       

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch(console.warn);