# ESERCIZIO:
// 1 - scrivere nella console tutti i numeri  da 0 a 100 specificando se è Fizz, Buzz, FizzBuzz o un normale numero
// 2 - scrivere tutti i numeri nella pagina
// 3 - coloriamo diversamente fizz, buzz, fizzbuzz e numeri normali

# SOLUZIONE
1. Stampare i numeri tramite ciclo for nella console

2. Creare la griglia di numeri nel DOM

3.  Se il numero è divisibile per 3
        creo la classe "fizz"
    Altrimenti se il numero è divisibile per 5
        creo la classe "buzz"
    Altrimenti se il numero è divisibile sia per 3 che per 5
        creo la classe "fizzbuzz"
    Altrimenti se è un normaler numero
        creo la classe "normal-number"
    Quando creo l'elemento aggiungo anche la classe dinamica