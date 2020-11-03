const getNombreAxios = async(idPost) => {
    try{
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        console.log(resPost.data.userId);

        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
        console.log(resUser.data.name);//Tengo que acceder pirmero a data, que es una propiedad propia la respuesta que retorna la librería de Axios. Y luego accedo al atributo name.
    } catch (error) {
        console.log(error);
    } 
}


getNombreAxios(12);