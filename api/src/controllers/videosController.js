const VideosService = require("../services/VideosService")

const Video = require("../models/Video");

class videosController {
  index(req, res) {
    try {
      const videos = VideosService.encontrarTodos();
      if (videos.length > 0) {
        res.status(200).json(videos);
      } else {
        res.status(404).json({ mensagem: "Nenhum vídeo encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao buscar vídeos", detalhes: erro.message });
    }
  }

  show(req, res) {
    try {
      const id = parseInt(req.params.id);

      if(!Id) {
        throw new error("o ID não foi passado");
      }
      const video = videosService.buscarPeloId(Id)

      if (video) {
        res.status(200).json(video);
      } else {
        res.status(404).json({ mensagem: "Vídeo não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao buscar vídeo", detalhes: erro.message });
    }
  }

  store(req, res) {
    try {
      const { titulo, descricao, image, canalID } = req.body;

      const novoVideo = new Video (
        titulo,
        descricao,
        image,
        canalID
      );

      videosService.adicionar(novoVideo);
      res.status(201).json(novoVideo);
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao criar vídeo", detalhes: erro.message });
    }
  }

  update(req, res) {
    try {
      const { titulo, descricao, quantidadeViews, canalID } = req.body;
      const id = parseInt(req.params.id);
      const video = videos.find((v) => v.id === id);
      if(!Id) {
        throw new error("o ID não foi passado");
      }
      const Video = videosService.atualizar(Id, body)



      if (!video) {
        return res.status(404).json({ mensagem: "Vídeo não encontrado" });
      }

      video.titulo = titulo;
      video.descricao = descricao;
      video.quantidadeViews = quantidadeViews;
      video.canalID = canalID;

      res.status(200).json(video);
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao editar vídeo", detalhes: erro.message });
    }
  }

  delete(req, res) {
    try {
      const id = parseInt(req.params.id);
      const indiceDoVideo = videos.findIndex((v) => v.id === id);

      if (indiceDoVideo !== -1) {
        const videoRemovido = videos.splice(indiceDoVideo, 1);
        res
          .status(200)
          .json({
            mensagem: `Vídeo id:${id} removido com sucesso!`,
            videoRemovido
          });
      } else {
        res.status(404).json({ mensagem: "Vídeo não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao remover vídeo", detalhes: erro.message });
    }
  }
}

module.exports = new videosController();
