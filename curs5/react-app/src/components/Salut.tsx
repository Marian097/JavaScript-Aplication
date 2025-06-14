// interface SalutInfo{
//     nume?:string,
//     curs?:string
// }

import { useState } from "react";

//scriem rfc (react function component) pentru a crea componenta.

type SalutInfo = {
  nume: string;
  curs?: string;
  varsta?: number,
};

const initialMessage = {
    mesaj: ""
}

export default function Salut(props: SalutInfo) { // => props folosim doar pe baza unei Interfete sau unui Type. Sunt definite in interiorul componentei parinte, in cazul nostru App.tsx
    const [count, setCount] = useState(0); // => useState se foloseste cand vrem sa definim o variabila globala.
    const [state, setState] = useState(initialMessage) // => cand declaram o variabila ex ,,state'' sau orice al nume, folosim useState() sau useOriceNume() si sunt definite in interiorul functiei
    const inscris = () => {
        setState({
            mesaj: "M-am inscris la curs"
        });
    }
  if (props.curs != undefined) {
    return (
    <>
      <div>
        Salut {props.nume} sunt la cursul de {props.curs} si am {props.varsta} ani
      </div>
      <button onClick={() => setCount((count => count + 2))}>
       {props.nume} adauga stelute {count}
      </button>
      </>
    );
  } else {
    return(
    <> 
    <div>Salut {props.nume} si am {props.varsta} ani</div>
    <button onClick={inscris}>Ma inscriu la un curs</button>
    <p>{state.mesaj}</p>
    </>
    )
  }
}
