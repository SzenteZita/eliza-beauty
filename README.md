# Eliza Beauty Salon

Magyar nyelvű, statikus kozmetikai szalonwebhely a jóváhagyott Bőrtudatos műhely koncepció alapján.

## Fájlok

- `site/`: a négy főoldal/aloldal, az adatkezelési állapotoldal, köszönőoldal és közös assetek.
- `dist/`: a Netlify-ra feltölthető kész fájlok.
- `index.html` és `koncepcio-*.html`: a megőrzött három korábbi prototípus.
- `alapanyag/`: a kapott szöveg és arculat.
- `.webprojekt/`: brief, tervek és ellenőrzési feljegyzések.

## Helyi indítás

```sh
python3 scripts/build.py
python3 -m http.server 4173 --bind 127.0.0.1
```

A végleges webhely helyi címe: http://127.0.0.1:4173/dist/

A statikus HTML az elsődleges, közvetlenül szerkeszthető forrás a `site/` alatt. A `scripts/create-pages.py` az eredeti tartalmakból újragenerálja az oldalakat, ezért kézi HTML-módosítás után csak a `build.py` futtatandó. A site külön CSS-t használ; nincs CDN-függő Tailwind vagy szükséges npm build. A fontok helyi WOFF2 fájlokban tartalmazzák a latin és latin-ext készletet.

## Élesítés állapota

A webhely helyben elkészült és GitHubra feltöltve: https://github.com/SzenteZita/eliza-beauty

A három munkafázis külön commitként szerepel.

Élő webhely: https://eliza-beauty-szentezita.netlify.app/

Első publikálás: 2026. október 26., Netlify Drop fájlfeltöltéssel. A GitHub és Netlify közötti automatikus deploykapcsolat még nincs beállítva.

Netlify publikálási könyvtár: `dist`, buildparancs nem szükséges, ha a commitolt dist tartalma naprakész. Konfiguráció: `netlify.toml`.

Az `idopontkeres` Netlify Forms űrlap mind a négy fő oldalon jelen van, honeypot mezővel. Az `assets/config.json` fájlban a `formsEnabled` jelenleg false: az űrlap nem küld adatot. A hiányzó adatkezelési sablon kitöltése és a Netlify Forms engedélyezése után kapcsolható true-ra. A fogadó e-mail szerveroldali Netlify-értesítési beállítás, nem nyilvános forrásadat; helyi értéke a Git által figyelmen kívül hagyott `.webprojekt/local/form-settings.json` fájlban van.

A véglegesítés sorrendje: adatkezelési sablon kitöltése; GitHub-repó létrehozása és push; Netlify-projekt összekapcsolása; Forms-érzékelés és fogadó értesítés beállítása; űrlap engedélyezése és deploy; valódi tesztüzenet beérkezésének ellenőrzése. Sikeres HTTP-válasz önmagában nem igazolja az e-mail kézbesítését.

A Kisokos opcionális funkció. A fájl nem szerepelt az alapanyagban, ezért jelenleg tájékoztató blokk van működést ígérő feliratkozóűrlap helyett.

A Figma-összehasonlítás végleges szövege az eredeti terv és a valós időráfordítások ismeretében írható meg. PageSpeed-pontszám még nincs mérve.

## Képforrások

Az `images/sources.json` tartalmazza az eredeti Pexels-oldalakat és fotósokat. Minden fotó hangulati illusztráció, nem Eliza vagy a szalon saját fotója. A képek helyi WebP-k.
