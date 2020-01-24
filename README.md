# KiwiCar 2

Applicazione per visualizzazione di cataloghi di automobili costruita su framework [_Ionic_](https://ionicframework.com), ciò rende il suo utilizzo _cross-platform_.

## Dipendenze

Per poter lavorare al progetto occore installare alcune dipendenze:
- [node](https://nodejs.org/it/download/);
- [npm](https://www.npmjs.com/get-npm);
- [ionic](https://ionicframework.com/docs/installation/cli);
- [java 8](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html);
- [android sdk](https://developer.android.com/studio).

## Lanciare il progetto

Preventivamente è sempre consigliato eseguire il comando `npm install` per soddisfare eventuali dipendenze aggiunte in fase di sviluppo.

### Modalità sviluppo

Per lanciare il progetto in modalità sviluppo (testare funzionalità o modifiche, individuare bug) è possibile eseguire due tipi di comando:
- _live-reload_, ogni modifica effettuata ai sorgenti verrà ricompilata in tempo reale e trasmessa al dispositivo di test: `ionic cordova run android --device --livereload`;
- _development_, viene generato un applicativo di debug, installato poi sul dispositivo (le modifiche devono essere ricompilate manualmente): `ionic cordova run android --device`.

### Modalità produzione

// TODO: aggiornare questa sezione
