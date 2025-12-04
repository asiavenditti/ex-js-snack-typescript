import './style.css'

// Snack 1
// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

// Se è una stringa: stampala in maiuscolo

// Se è un numero: moltiplicalo per due e stampalo

// Se è un booleano: stampa “Sì” o “No” in base al suo valore

// In tutti gli altri casi: stampa “Tipo non supportato”

// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.

let data: unknown = ['test', 'test2', 'test3']

if (typeof data === 'string') {
  console.log(data.toUpperCase())
}

else if (typeof data === 'number') {
  let result = data * 2
  console.log(result)
} else if (typeof data === 'boolean') {
  if (data === true) {
    console.log('sì')
  } else { console.log('no') }
}

else if (Array.isArray(data)) {
  console.log(data.length);

} else if (data instanceof Promise) {

  data.then(res => console.log(res))
    .catch(error => console.error(error))

}

else {
  console.log('Il dato è vuoto')
}

// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
// emailAziendale → Email assegnata al dipendente (non si può modificare)
// contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiservizio: number[],
  readonly emailAziendale: string,
  tipoContratto: 'indeterminato' | 'freelance' | 'determinato'
}

const dipendente: Dipendente = {
  nome: 'Alessio',
  cognome: 'Rossi',
  annoNascita: 1997,
  sesso: 'm',
  anniDiservizio: [2019, 2020],
  emailAziendale: 'alessio@gmail.com',
  tipoContratto: 'freelance'
}


console.log(dipendente)


