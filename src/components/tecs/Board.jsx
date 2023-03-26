import React, { useEffect, useState } from "react";

import Card from "@/components/tecs/Card";

const imgs = [
  {
    id: 1,
    img: "/img/figma.svg",
    alt: "Facebook",
  },
  {
    id: 2,
    img: "/img/firebase.svg",
    alt: "Discord",
  },
  {
    id: 3,
    img: "/img/illustrator.svg",
    alt: "Instagram",
  },
  {
    id: 4,
    img: "/img/motion.svg",
    alt: "WhatsApp",
  },
  {
    id: 5,
    img: "/img/reactjs.svg",
    alt: "Google",
  },
  {
    id: 6,
    img: "/img/tailwind.svg",
    alt: "Google Duo",
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Board = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const createBoard = () => {
    const duplicatecards = imgs.flatMap((img, i) => {
      const duplicate = {
        ...img,
        id: img.id + imgs.length,
      };
      return [img, duplicate];
    });

    const newCards = shuffleArray(duplicatecards);
    const cards = newCards.map((card) => {
      return {
        ...card,
        flipped: false,
        matched: false,
      };
    });

    setCards(cards);
  };

  useEffect(() => {
    createBoard();
  }, []);

  const handleCardClick = (id) => {
    if (isDisabled) return;

    const [currentCard] = cards.filter((card) => card.id === id);

    if (!currentCard.flipped && !currentCard.matched) {
      currentCard.flipped = true;

      const newFlippedCards = [...flippedCards, currentCard];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setIsDisabled(true);
        const [firstCard, secondCard] = newFlippedCards;

        if (firstCard.img === secondCard.img) {
          firstCard.matched = true;
          secondCard.matched = true;
          setIsDisabled(false);
        } else {
          setTimeout(() => {
            firstCard.flipped = false;
            secondCard.flipped = false;
            setCards(cards);
            setIsDisabled(false);
          }, 1000);
        }

        setFlippedCards([]);
        setMoves(moves + 1);
      }

      setCards(cards);
    }

    if (cards.every((card) => card.matched)) {
      setGameOver(true);
      setIsDisabled(true);
    }
  };

  const handleNewGame = () => {
    setCards([]);
    createBoard();
    setMoves(0);
    setGameOver(false);
    setIsDisabled(false);
  };

  return (
    <>
      <div className="relative  flex items-center ">
        <div className="mx-auto flex flex-col justify-center items-center">
          <div className="grid md:grid-cols-4 grid-cols-3 justify-center items-center mb-10 gap-6">
            {cards.map((card) => (
              <Card
                card={card}
                key={card.id}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
          <button
            className="bg-black font-semibold text-white rounded-md px-5 py-1 hover:bg-yellow-500 hover:text-black transition-all mb-3"
            onClick={handleNewGame}
          >
            Nuevo Juego
          </button>
        </div>
      </div>
    </>
  );
};

export default Board;
