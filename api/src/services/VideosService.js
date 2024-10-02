const { videos } = require("../mock/dados.json");

class VideosService { 
encontrarTodos() {
  return videos;
}
  
  buscarPeloId(id) {
   return  videos.find((v) => v.id === id);
  }

  adicionar(video) {
    return videos.push(novoVideo);
  }
  
  atualizar(id, videoAtualizado) {
    const video = videos.find((v) => v.id === id);

    video.titulo = videoAtualizadotitulo;
      video.descricao = videoAtualizadodescricao;
      video.quantidadeViews = videoAtualizadoquantidadeViews;
      video.canalID = videoAtualizadocanalID;
  }

  }

  excluir(id)


module.exports = new VideosService();