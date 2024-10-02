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

    video.titulo = videoAtualizado.titulo;
    video.descricao = videoAtualizado.descricao;
    video.quantidadeViews = videoAtualizado.quantidadeViews;
    video.canalID = videoAtualizado.canalID;

    return video;
  }
  excluir(id) {
    const index = videos.findIndex((v) => v.id === id);
    if (index !== -1) {
      videos.splice(index, 1);
      }
    
  }
  }


module.exports = new VideosService();