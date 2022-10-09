import React from "react";
import NavBar from "../navbar/nav";
import "./personagens.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";

export default function Emilia() {
  return (
    <div className="background">
      <NavBar />
      <div className="page page-emilia">
        <h1>Apresentação</h1>
        <p>
          Emilia é a protagonista da série e a personagem feminina principal.
          Ela é uma Meia-Elfa, que é candidata a ser 42° rainha de Lugnica.
          Emilia é uma garota relativamente fofa, sendo sempre reconhecida por
          sua beleza com comentários de Subaru. Os fãs da obra também a
          reconhecem como extremamente bela. Emilia é uma garota de longos e
          brilhantes cabelos brancos, com uma pele sedosa e clara, olhos roxos.
          Suas vestimentas são versáteis, com um vestido totalmente branco com
          vários detalhes roxos-claros ao redor.
        </p>
        <h1>Historia</h1>
        <p>
          Emilia vive seus dias isolada na Floresta de Eriole, tendo apenas Puck
          para conversar, sobrevivendo mineirando cristais e vendendo numa vila
          por perto, a vila tem medo dela por sua aparência similar a da Bruxa e
          eles tem o mínimo de contato possível. Um homem chamado Chap
          eventualmente tenta capturar Emilia na floresta para a vender como
          escrava, sua ambição falha quando tanto Emilia lutando quanto um
          ataque surpresa de uma Praga da Neve incapacita seus lacaios. Mais
          Tarde, ela é obrigada a lutar contra o veneno da Serpente Negra que
          estava descongelando na floresta de Eriole, numa trama causado por
          Melakuera na tentativa de elimina-lá. Eventualmente ela destrói tanto
          o veneno que se alastrava, quanto mata Melakuera numa luta ajudada por
          Pack.
        </p>
        &nbsp;
        <p>
          Um ano antes de Subaru chegar, ela e Puck encontraram Roswaal, o
          primeiro humano que não reagiu negativamente à sua aparência. Ele
          então a convidou para a Seleção Real depois de ser escolhida pelo
          Dragão, dando-lhe uma maneira de salvar os cidadãos da Floresta
          Eriole, usando o sangue do dragão. Embora agora depois de experimentar
          o estado severo pelo qual ela e outros demi-humanos tenham passado,
          ela também espera se tornar uma governante que pode consertar as
          relações entre eles e os humanos que a Bruxa da Inveja destruiu com
          seu reinado de terror há muito tempo.
        </p>
        <div className="apresen">
          <img
            src="https://images7.alphacoders.com/695/695212.png"
            alt="emilia"
          />
          <img
            src="https://images.alphacoders.com/730/730622.png"
            alt="emilia"
          />
        </div>
        <h1>Personalidade</h1>
        <p>
          Emilia é bem-humorada e gosta de cuidar dos outros, embora ela mesma
          se recuse a admitir, ao invés disso, pensa nisso como seu próprio
          egoísmo. Como resultado, Emilia costuma evitar se abrir para os outros
          e compartilhar seus encargos em um grau muito teimoso. Ela é
          indiferente à sua própria aparência, deixando Puck cuidar de suas
          roupas e cabelos. Como sua aparência é semelhante à Bruxa da Inveja,
          ela recebeu discriminação severa de outras pessoas.
        </p>
        <div className="t-max">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img
                src="https://images5.alphacoders.com/738/738629.jpg"
                alt="Rem.album"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images2.alphacoders.com/773/773238.jpg"
                alt="Rem.album"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images7.alphacoders.com/718/718483.jpg"
                alt="Rem.album"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images2.alphacoders.com/733/733079.png"
                alt="Rem.album"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images6.alphacoders.com/813/813042.png"
                alt="Rem.album"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images6.alphacoders.com/733/733335.png"
                alt="Rem.album"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images3.alphacoders.com/731/731388.png"
                alt="Rem.album"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images6.alphacoders.com/756/756515.png"
                alt="Rem.album"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p>
          Ela tem a tendência de usar muitas palavras antiquadas que você só
          ouviria de uma pessoa idosa. Em raras ocasiões, Emilia deixará escapar
          seu lado infantil quando se deparar com algo muito desconhecido para
          ela, porque até alguns anos atrás ela não conhecia as normas sociais
          do mundo exterior, além dos bosques em que costumava morar ao lado de
          outros elfos. Apesar disso, ela se adapta rapidamente e ainda trabalha
          duro para se tornar uma rainha.
        </p>
        <iframe width="1160" height="615" src="https://www.youtube.com/embed/5c_jTxvutlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}
