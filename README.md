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

Fare la build del progetto e sincronizzarlo:
- modalità _development_
```bash
npm run sync:dev
```
- modalità _production_
```bash
npm run sync:prod
```

Aprire _Android Studio_ e proseguire dall'IDE:
```bash
npx cap open android
```

### Firmare l'applicazione

```bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keystore_name.keystore /path/to/unsigned/app/kiwicar2-release-unsigned.apk keystore_alias
```

Infine si procede compattando la release:
```bash
cd /path/to/android_sdk/build_tools/[version]
```
```bash
./zipalign -v 4 /path/to/signed/app/kiwicar2-release-unsigned.apk /output/path/kiwicar2.apk
```
