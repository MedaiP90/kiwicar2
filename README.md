# KiwiCar 2

Applicazione per visualizzazione di cataloghi di automobili costruita su framework [_Ionic_](https://ionicframework.com), ciò rende il suo utilizzo _cross-platform_.

## Dipendenze

Per poter lavorare al progetto occore installare alcune dipendenza:
- [node](https://nodejs.org/it/download/);
- [npm](https://www.npmjs.com/get-npm);
- [ionic](https://ionicframework.com/docs/installation/cli);
- java 8;
- android sdk.

## Lanciare il progetto

Preventivamente è sempre consigliato eseguire il comando `npm install` per soddisfare eventuali dipendenze aggiunte in fase di sviluppo.

### Modalità sviluppo

Per lanciare il progetto in modalità sviluppo (testare funzionalità o modifiche, individuare bug) è possibile eseguire due tipi di comando:
- _live-reload_, ogni modifica effettuata ai sorgenti verrà ricompilata in tempo reale e trasmessa al dispositivo di test: `ionic cordova run android --device --livereload`;
- _development_, viene generato un applicativo di debug, installato poi sul dispositivo (le modifiche devono essere ricompilate manualmente): `ionic cordova run android --device`.

### Modalità produzione

// TODO: aggiornare questa sezione