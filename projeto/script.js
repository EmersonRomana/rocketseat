function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light') // Essa função resume com toggle tudo que foi escrito em baixo. 
//     if (html.classList.contains('light')) {
//         html.classList.remove('light')
//     } else {
//         html.classList.add('light')
//     }

    //  Pegar a imagem 
    const img = document.querySelector("#profile img")
    
    // Substituir a Imagem
    if (html.classList.contains('light')) {
        // Se tiver light mode, adicionar a imagem 
        img.setAttribute('src','./assets/Eu-roxo.png')

    } else {
        // Se tiver sem o Light mode, manter a image
        img.setAttribute('src', './assets/Eu-amarelo.png')
    }



    //  Pegar a imagem 
    const imgPerfil = document.querySelector("#profile alt")
    
    // Substituir a Imagem
    if (html.classList.contains('light')) {
        // Se tiver light mode, adicionar a imagem 
        img.setAttribute('alt','Foto de perfil com fundo roxo')

    } else {
        // Se tiver sem o Light mode, manter a image
        img.setAttribute('alt', 'Foto de perfil com fundo amarelo')
    }
}