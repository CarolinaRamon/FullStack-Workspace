


const getNombre = (idPost) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)//Le paso un id.
    //fetch(`https://jsonplaceholder.typicode.com/posts/10`)//Esta es una página de prueba de objetos json para desarrolladores
    .then(res =>{
        return res.json()//Una vez que lo recibo lo transformo a formato json
    })
    .then(post => {
        console.log(post.userId);
        // console.log(post.title);
        // console.log(post.body);
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res =>{
            return res.json()
        })
        .then(user => {
            console.log(user.name);
        })
    })
}

//El problema es que esta comunicación puede ir y venir varias veces y se va formando una cadena engorrosa y poco práctica.

getNombre(15);