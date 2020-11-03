


const getNombreAsync = async(idPost) => {
    try{
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        const post = await resPost.json();
        console.log(post.userId);

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await resUser.json();
        console.log(user.name);
    } catch (error) {//Manejo de errores. La información del error queda almacenada en la variable error.
        console.log(error);
    }
    
        // console.log(post.title);
        // console.log(post.body);
    //     fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    //     .then(res =>{
    //         return res.json()
    //     })
    //     .then(user => {
    //         console.log(user.name);
    //     })
    // })
}


getNombreAsync(15);