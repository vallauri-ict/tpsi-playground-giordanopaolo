Esercizio sulla creazione di un giochino denominato goco del 15.
In questo esercizio si va a creare nel caricamento della pagina i div che fungeranno da pedine.
Poi andiamo ad assegnare i valori tramite una funzione secondaria, tramite un vettore che andiamo ad accorciare tramite la funzione splice.
//DELEGATE EVETS soluzione migliore e più funzionale
    wr.on("click", "div", move);
utilizzado i delegate evets aggiungiamo la funzione move al click di una pedina.
non utilizziamo : //$(ref).on("click",move); perchè può dare errori come il trigger 2 volte
invece ///wr.children("div").on("click",move); non funziona sempre.
