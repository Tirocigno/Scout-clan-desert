import React, { Component } from 'react';
import './app.css';
import FedeTonza from './federicazonta.jpeg';

export default class App extends Component {

  /*componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }

   */

  render() {
    return(
      <div className="tot">


        <div className="chiaraporcellini">

          <div className="nome"><p className="chiaraporcellini">Chiara Porcellini</p></div>

          <div className="testo"><p className="chiaraporcellini">Il filosofo Hobbes, intorno al
            1600, interrogandosi sul graduale affermarsi dello Stato Moderno, arrivò a dire che allo
            stato naturale l’uomo non è un animale sociale, ma anzi, si presenta come un lupo
            solitario, avverso a tutti, sempre in continua guerra contro tutti. E la socializzazione
            è dovuta solo all’istinto di sopravvivenza, affinché si possa vivere una vita
            tranquilla. Dice, però, che l’uomo sarà sempre e comunque orientato alla violenza per
            ottenere il controllo di tutto. </p></div>
        </div>

        <div className="caterinalaghi">

          <div className="nome"><p className="caterinalaghi">Caterina Laghi</p></div>

          <div className="testo"><p className="caterinalaghi">In effetti, durante tutta la nostra
            esistenza odio e amore sono sempre stati messi in un rapporto antitetico di
            conflittualità: l’odio identificato come figura che imprigiona la mente e libera il
            cuore; d’altra parte l’amore visto come colui che abita il cuore rendendo irrazionale il
            pensiero umano. Insomma, entrambi non esisterebbero se non esistesse il suo
            opposto. </p></div>
        </div>

        <div className="francescofranco">

          <div className="nome"><p className="francescofranco">Francesco Franco</p></div>

          <div className="testo"><p className="francescofranco">Il simbolo dello yin e yang ci
            dimostra che nel bene, nell’amore, ci sarà sempre un briciolo di cattiveria, odio e
            viceversa.</p></div>

        </div>

        <div className="margheritatura">

          <div className="nome" id="margheritatura"><p className="margheritatura">Margherita
            Tura</p></div>

          <div className="testo" id="margheritatura"><p className="margheritatura">La nostra società
            è figlia dell’individualismo, dall'eccellere nelle cose quotidiane e anche nel pensarsi
            superiori agli altri.</p></div>

        </div>

        <div className="emanuelemigani">

          <div className="nome" id="emanuelemigani"><p className="emanuelemigani">Emanuele
            Migani</p></div>

          <div className="testo" id="emanuelemigani"><p className="emanuelemigani">L’uomo si chiede
            "di chi è la colpa?" E quando non trova risposta, l’uomo dà la colpa, ingiustamente, a
            persone facilmente riconoscibili da tutti e deboli che quindi vengono odiate. </p></div>

        </div>

        <div className="caterinarughi">

          <div className="nome" id="caterinarughi"><p className="caterinarughi">Caterina Rughi</p>
          </div>

          <div className="testo" id="caterinarughi"><p className="caterinarughi">L’odio è la via più
            breve, l’odio è la soluzione perfetta, è la risposta a tutte le domande, che ignora i
            fatti, accusa senza conoscere e analizzare, giudica senza capire e domandare, condanna
            in base alle proprie esigenze, egoisticamente. </p></div>

        </div>

        <div className="giuliascozzoli">

          <div className="nome" id="giuliascozzoli"><p className="giuliascozzoli">Giulia
            Scozzoli</p></div>

          <div className="testo" id="giuliascozzoli"><p className="giuliascozzoli">L’odio è uno
            strumento di cui si servono i deboli, gli insicuri per costruirsi una sorta di corazza
            contro il diverso, il loro più acerrimo nemico che, non si sa come, minaccia la loro
            stabile esistenza.</p></div>

        </div>

        <div className="riccardorossi">

          <div className="nome" id="riccardorossi"><p className="riccardorossi">Riccardo Rossi</p>
          </div>

          <div className="testo" id="riccardorossi"><p className="riccardorossi">Le persone sfogano
            sul diverso le proprie frustrazioni fisicamente, con danni fisici, e si nota come pian
            piano questi ai loro occhi diventi un oggetto, perde la sua umanità. È quello che
            succede tutti i giorni, magari non fisicamente a volte, a volte anche, quando l'odio
            pian piano porta a privare le persone di umanità diventando degli oggetti. </p></div>

        </div>

        <div className="alessandroaldini">

          <div className="nome" id="alessandroaldini"><p className="alessandroaldini">Alessandro
            Aldini</p></div>

          <div className="testo" id="alessandroaldini"><p className="alessandroaldini">Qui si vede
            molto bene la bassezza dell’odio: appena l’oggettificazione viene meno, coloro che
            odiano non riescono nemmeno a guardare in faccia “gli odiati” e l’unica cosa che
            riescono a fare è fuggire.</p></div>

        </div>

        <div className="biancabrunacci">

          <div className="nome" id="biancabrunacci"><p className="biancabrunacci">Bianca
            Brunacci</p></div>

          <div className="testo" id="biancabrunacci"><p className="biancabrunacci"> Il fatto che
            molte persone abbiano perso la vita solo perché qualcuno si è sentito in diritto di
            compiere un atto ingiustificato e insensato come questo è per noi incomprensibile.</p>
          </div>

        </div>

        <div className="costanzagiannini">

          <div className="nome" id="costanzagiannini"><p className="costanzagiannini">Costanza
            Giannini</p></div>

          <div className="testo" id="costanzagiannini"><p className="costanzagiannini">È
            sconvolgente come una persona possa pensare di avere il diritto di portare via la vita
            di
            un’altra persona, soltanto perché ritiene che quell’altra non ne sia degna.
          </p></div>

        </div>

        <div className="simonecarro">

          <div className="nome" id="simonecarro"><p className="simonecarro">Simone Carro</p></div>

          <div className="testo" id="simonecarro"><p className="simonecarro">Ciò fa riflettere su
            chi dovrebbe esserci al di sopra di coloro che vengono odiati senza apparente
            motivo.</p></div>

        </div>

        <div className="chiarabenati">

          <div className="nome" id="chiarabenati"><p className="chiarabenati">Chiara Benati</p>
          </div>

          <div className="testo" id="chiarabenati"><p className="chiarabenati">Conosciamo
            l’assassino, un uomo bianco, seduto su una sedia, che non fa altro che alzare il suo
            fucile e sparare senza neanche alzarsi dalla sedia.</p></div>

        </div>

        <div className="matildebassi">

          <div className="nome" id="matildebassi"><p className="matildebassi">Matilde Bassi</p>
          </div>

          <div className="testo" id="matildebassi"><p className="matildebassi">La sicurezza che ha
            di sé, l’orgoglio che non smette mai di mostrare, le lodi di quanto sia bravo,
            intelligente, innovativo, bello. Il disgusto nei confronti dell‘altro, creato dalla sua
            semplice immagine, non per forza legato ad un certo avvenimento ma solo per
            l’aspetto.</p></div>

        </div>

        <div className="ceciliaspazzoli">

          <div className="nome" id="ceciliaspazzoli"><p className="ceciliaspazzoli">Cecilia
            Spazzoli</p></div>

          <div className="testo" id="ceciliaspazzoli"><p className="ceciliaspazzoli">Se veramente
            noi come popolo abbiamo nella nostra cultura la condivisione, perché siamo egoisti?
            Perché questa cattiveria? Perché si gioisce quando si chiudono i porti? Perché odiamo
            l’idea di aiutare chi è diverso da noi? Perché chiamiamo ‘diverso’ una persona che sta
            cercando qualcosa di migliore e che anche noi abbiamo e cerchiamo ancora adesso, negli
            altri paesi?</p></div>

        </div>

        <div className="andreapaoli">

          <div className="nome" id="andreapaoli"><p className="andreapaoli">Andrea Paoli</p></div>

          <div className="testo" id="andreapaoli"><p className="andreapaoli">Perché oggi abbiamo
            paura delle persone in difficoltà, scegliamo l’indifferenza davanti a tante storie che
            ci raccontano di un mondo che ha bisogno di amore e fratellanza come mai finora.</p>
          </div>

        </div>

        <div className="matildevalentini">

          <div className="nome" id="matildevalentini"><p className="matildevalentini">Matilde
            Valentini</p></div>

          <div className="testo" id="matildevalentini"><p className="matildevalentini">Ciò che più
            colpisce delle storie di questi uomini è che rimangono invisibili. Seppellite
            dall’indifferenza.</p></div>

        </div>

        <div className="francescaspazzoli">

          <div className="nome" id="francescaspazzoli"><p className="francescaspazzoli">Francesca
            Spazzoli</p></div>

          <div className="testo" id="francescaspazzoli"><p className="francescaspazzoli">Possibile
            che nessuno senta urlare “aiuto”? Possibile che nessuno abbia sentito?</p></div>

        </div>

        <div className="andrearicci">

          <div className="nome" id="andrearicci"><p className="andrearicci">Andrea Ricci</p></div>

          <div className="testo" id="andrearicci"><p className="andrearicci">Qui l'odio si presenta
            nella forma più triste ed egoista di tutte, cioè quella di trovare sempre un profitto in
            qualsiasi momento. Ma quale reazione si può contrapporre all’odio?</p></div>

        </div>

        <div className="laurafabbri">

          <div className="nome" id="laurafabbri"><p className="laurafabbri">Laura Fabbri</p></div>

          <div className="testo" id="laurafabbri"><p className="laurafabbri">Tutti odiamo qualcosa,
            è un sentimento viscerale che non possiamo non provare, il più delle volte resta
            invidia, cioè guardare con odio, solo guardare, e resta dentro di noi, resta un odio
            “innocuo”. Ma anche noi, che ci riteniamo persone non pericolose, è importante che non
            solo coltiviamo i nostri valori per noi stessi, ma che impariamo ad avere il coraggio e
            la consapevolezza di non girarci mai di fronte a manifestazioni di odio.</p></div>

        </div>

        <div className="chiaraporcellini2">

          <div className="nome" id="chiaraporcellini2"><p className="chiaraporcellini2">Chiara
            Porcellini</p></div>

          <div className="testo" id="chiaraporcellini2"><p className="chiaraporcellini2">Nonostante
            l’uomo faccia di tutto per vivere nell’odio e nel dolore, credo comunque che non sia la
            nostra natura, ma anzi che si possa combattere con l’amore e con la fede.</p></div>

        </div>

        <div className="beatricescheda">

          <div className="nome" id="beatricescheda"><p className="beatricescheda">Beatrice
            Scheda</p></div>

          <div className="testo" id="beatricescheda"><p className="beatricescheda">Possiamo trovare
            la risposta direttamente fra i punti della legge e nella promessa, poiché entrambe sono
            rivolte verso l’aiuto degli altri, e cos’è fondamentale per aiutare il prossimo? Empatia
            e amore.</p></div>

        </div>

        <div className="matildevalentini2">

          <div className="nome" id="matildevalentini2"><p className="matildevalentini2">Matilde
            Valentini</p></div>

          <div className="testo" id="matildevalentini2"><p className="matildevalentini2">L’empatia
            ci permette di indossare i panni dell’altro, del diverso, abbattendo le barriere del
            narcisismo, l’estremo piacersi, il ritenersi l'esempio guida di valori. Attraverso
            l’empatia si potrebbe comprendere la diversità e di dirigerla verso la conoscenza di se
            stessi e dell'altro.</p></div>

        </div>

        <div className="alessandroseveri">

          <div className="nome" id="alessandroseveri"><p className="alessandroseveri">Alessandro
            Severi</p></div>

          <div className="testo" id="alessandroseveri"><p className="alessandroseveri">L’amore
            invece è una responsabilità, oltre che un sentimento. Farsi carico dell'altro, delle sue
            sofferenze ed aiutarlo a portare il suo fardello, che l'altro ricambi o meno.</p></div>

        </div>

        <div className="chiarabenati2">

          <div className="nome" id="chiarabenati2"><p className="chiarabenati2">Chiara Benati</p>
          </div>

          <div className="testo" id="chiarabenati2"><p className="chiarabenati2">La risposta per noi
            sarà sempre il servizio. </p></div>

        </div>

        <div className="elenatisselli">

          <div className="nome" id="elenatisselli"><p className="elenatisselli">Elena Tisselli</p>
          </div>

          <div className="testo" id="elenatisselli"><p className="elenatisselli">Se ognuno impara a
            guardare le spalle dell’altro, alla fine ognuno sarà protetto.</p></div>

        </div>

        <div className="giovannitedaldi">

          <div className="nome" id="giovannitedaldi"><p className="giovannitedaldi">Gaia Vitali</p>
          </div>

          <div className="testo" id="giovannitedaldi"><p className="giovannitedaldi">Se noi ci
            impegniamo ad amare di più forse un po' di odio si estinguerà.</p></div>

        </div>

        <div className="chiaracontavalli">

          <div className="nome" id="chiaracontavalli"><p className="chiaracontavalli">Riccardo
            Rossi</p></div>

          <div className="testo" id="chiaracontavalli"><p className="chiaracontavalli">Solo se
            sentiremo la loro sofferenza, potremmo sentire anche la gioia e tutte le sfumature
            dell’essere vivi.</p></div>

        </div>

        <div className="gaiavitali">

          <div className="nome" id="gaiavitali"><p className="gaiavitali">Gaia Vitali</p></div>

          <div className="testo" id="gaiavitali"><p className="gaiavitali">Non cambieremo il mondo,
            ma forse saremo trenta persone che alla prossima occasione, invece di odiare, proveranno
            ad amare.</p></div>

        </div>

        <div className="leonardocasadei">

          <div className="nome" id="leonardocasadei"><p className="leonardocasadei">Leonardo
            Casadei</p></div>

          <div className="testo" id="leonardocasadei"><p className="leonardocasadei">E non possiamo
            che pregare, in silenzio.</p></div>
        </div>

        <div className="federicazonta">

          <div className="nome" id="federicazonta"><p className="federicazonta">Federica Zonta</p>
          </div>

          <div className="testo" id="federicazonta">
            <p className="federicazonta"><img src={FedeTonza} /></p></div>
        </div>

        <div className="marcovalentini">

          <div className="nome" id="marcovalentini"><p className="marcovalentini">Marco
            Valentini</p></div>

          <div className="testo" id="marcovalentini">
            <p className="marcovalentini">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/dj9OL-6xPQ8"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </p>
          </div>
        </div>


      </div>
    );
  }
}
