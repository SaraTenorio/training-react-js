/* inicio 

A componente tem duas "tarefas":
1- selecionar uma saudacao da lista
2 - definir o title do document

*/

// import React, { useState, useEffect } from "react";

// export default function SayHello() {
//   const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     document.title = greetings[index];
//   }, [index]);

//   function updateGreeting() {
//     setIndex(Math.floor(Math.random() * greetings.length));
//   }

//   return <button onClick={updateGreeting}>Say Hi</button>
// }


/*  2 - Efeito do document title retirado para uma função separada */
/* import React, {useState, useEffect} from "react";
 
function useDocumentTitle (title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
 
export default function SayHello () {
  const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];
  const [index, setIndex] = useState(0);
 
  function updateGreeting () {
    setIndex(Math.floor(Math.random() * greetings.length));
  }
 
  useDocumentTitle(greetings[index]);
 
  return <button onClick={updateGreeting}>Say Hi</button>
} */


/* 3 - com os hooks em ficheiros separados, eo useRandom a chamar o useDocumentTitle */
import React from "react";
import useRandomTitle from "../../hooks/useRandomTitle";

const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];

export default function SayHello() {

  const nextTitle = useRandomTitle(greetings);

  return <button onClick={nextTitle}>Say Hi</button>
}