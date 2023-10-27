import React, { useState } from 'react';
import './App.css';

import logo from './imagem/logo.svg';

import ciclope from './imagem/card-ciclope.jpg';
import jean from './imagem/card-jean-grey.jpg';
import linceNegra from './imagem/card-lince-negra.jpg';
import magneto from './imagem/card-magneto.jpg';
import noturno from './imagem/card-noturno.jpg';
import tempestade from './imagem/card-tempestade.jpg';
import vampira from './imagem/card-vampira.jpg';
import wolverine from './imagem/card-wolverine.jpg';

import ciclopePng from './imagem/card-ciclope.png';
import jeanPng from './imagem/card-jean-grey.png';
import linceNegraPng from './imagem/card-lince-negra.png';
import magnetoPng from './imagem/card-magneto.png';
import noturnoPng from './imagem/card-noturno.png';
import tempestadePng from './imagem/card-tempestade.png';
import vampiraPng from './imagem/card-vampira.png';
import wolverinePng from './imagem/card-wolverine.png';



function App() {
    const [selectedCharacter, setSelectedCharacter] = useState(0);

    const cards = [ciclope, jean, linceNegra, magneto, noturno, tempestade, vampira, wolverine];


    const personagensJpg = [
   
        {
            img: ciclopePng ,
            nome: "Ciclope",
            descricao: "Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue contolá-los"
    
        },
    
        {
            img: jeanPng ,
            nome:  "Jean Grey",
            descricao: "È uma mutante nivel ômega e o principal avatar da força fênix, no qual manifesta poderes cósmicos. A telepatia e telecinese "
    
        },
    
        {
            img: linceNegraPng ,
            nome: "Lince Negra",
            descricao: "Ela tem poder de atravessar matéria sólida, campos de energia, rajadas ópticas, continuando intacta e também tem o poder de andar no ar"
    
        },
    
        {
            img: magnetoPng ,
            nome: "Magneto",
            descricao: "Ele tem o poder de magnetocinese, ou seja, controla objetos de metal e criar campos magnéticos"
    
        },
    
        {
            img: noturnoPng ,
            nome: "Noturno",
            descricao: "Ele é um mutante que nasceu com cauda,  orelhas pontudas e com o poder de teletransportar "
    
        },
    
        {
            img: tempestadePng ,
            nome: "Tempestade",
            descricao: "Tem o poder de controlar as forças da natureza, muito poderosa ela pode produzir raios, chuvas, gelos, ventos, neblinas, entre outros efeitos"
    
        },
    
        {
            img: vampiraPng ,
            nome: "Vampira",
            descricao: "Ela tem o poder de absorver a vitalidade e memória das pessoas que toca ou no caso dos mutantes os poderes e a memória, mas só temporariamente"
    
        },
    
        {
            img: wolverinePng ,
            nome: "Wolverine",
            descricao: "Poderes. Garras Metálicas. Fator de Cura Regenerativa, Super Agilidade"
    
        },
    ];

    const handleMouseOver = (characterIndex) => {
        setSelectedCharacter(characterIndex);
    };

    return (
        <div className='corpo'>
            <header className="cabecalho">
                <img className="logo" src={logo} alt="Logo X-men" />
            </header>

            <main className="selecao-de-personagens">
                <section className="personagens">
                    <h1 className="titulo">Selecione um personagem</h1>
                    <ul className="lista-de-personagens">
                        {personagensJpg.map((personagem, index) => (
                            <li
                                key={index}
                                className={`personagem ${selectedCharacter === index ? "selecionado" : ""}`}
                                onMouseOver={() => handleMouseOver(index)}
                                data-name={personagem.nome}
                                data-description={personagem.descricao}
                            >
                                <img src={cards[index]} alt={`personagem ${personagem.nome}`} />
                               
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="personagem-selecionado">
                    <img
                        className="personagem-grande"
                        src={selectedCharacter !== null ? personagensJpg[selectedCharacter].img : ''}
                        alt="personagem selecionado"
                    />

                    <div className="informacoes-personagem">
                        <h2 className="nome-personagem" id="nome-personagem">
                            {selectedCharacter !== null ? personagensJpg[selectedCharacter].nome : ''}
                        </h2>
                        <p className="descricao-personagem" id="descricao-personagem">
                            {selectedCharacter !== null ? personagensJpg[selectedCharacter].descricao : ''}
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;