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

