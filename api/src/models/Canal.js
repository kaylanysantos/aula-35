const { Usuario } = require("./Usuario");

class Canal extends Usuario {
  constructor(id, nome, imagem, email, papel) {
    super(id, nome, imagem, email, papel.USUARIO_DONO);
    this.videos = [];
    this.inscrito = []; 
  }

  // Adicionar um novo vídeo
  static postarVideo(video) {
    const novoVideo = new Video(video)
    this.videos.push(video);
    return novoVideo;
    // Lógica
  }

  // Editar um vídeo por ID
  static editarVideo(idVideo, corpo) {
   const video = this.videos.find((video) =>  video.id === idVideo);

   video.nome  = corpo.nome;
   video.imagem  = corpo.imagem;
   video.email = corpo.email;

   return video;
    // Lógica
  }

  // Remover um vídeo por ID
  static excluirVideo(idVideo) {
    const index = this.videos.findIndex((video) => video.id === idvideo);
    
    return this.videos.splice(index, 1);
    // Lógica
  }

  //Gerenciar inscritos no canal
  static listarInscritos() {
    return this.inscrito;
    // Lógica
  }
}

module.exports = { Canal };
