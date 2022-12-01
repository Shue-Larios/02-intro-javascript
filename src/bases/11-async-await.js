// Async / Await 

const getImagen = async () => {

    try {
        const apiKey = "40VuG9YmZJQVbE6aAwVC94674qybaGVD";
    // la unica condicion para trabajar con el await esque tiene q star dentro de un async
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json()

    const { url } = data.images.original;
    console.log(url);

    const img = document.createElement("img")
    img.src = url;

    document.body.append(img);
    } catch (error) {
        // manejo del error
    }
}

getImagen();


