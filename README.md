# Eliza Beauty Salon

Magyar nyelvű, statikus kozmetikai szalonwebhely a jóváhagyott Bőrtudatos műhely koncepció alapján.

## Fájlok

- `site/`: a négy főoldal/aloldal, az adatkezelési tájékoztató, köszönőoldal és közös assetek.
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

Az `idopontkeres` Netlify Forms űrlap mind a négy fő oldalon jelen van, honeypot mezővel és kötelező, előre nem bejelölt hozzájárulási mezővel. Az űrlap engedélyezve, a Netlify automatikus formfelismerése és az e-mail-értesítés beállítva. Az oktatási teszt nem hoz létre valódi szalonfoglalást.

Az adatkezelési tájékoztató a kapott Fegyvertár-sablonból, a tényleges működéshez igazítva készült. Adatkezelő Szente Zita, a kapcsolati e-mail-cím nyilvános feltüntetését a projektgazda engedélyezte. A tesztüzeneteket a projektgazdának manuálisan törölnie kell a Netlify-ból és postafiókjából, a teszt lezárásakor, legkésőbb 30 napon belül.

2026. október 26-án az élő Kapcsolat oldalról küldött próbaüzenet után megjelent a köszönőoldal, a Netlify Forms pedig 1 beérkezett beküldést mutatott. A projektgazda visszaigazolta a próbaüzenet e-mailes megérkezését.

A Kisokos opcionális funkció. A fájl nem szerepelt az alapanyagban, ezért jelenleg tájékoztató blokk van működést ígérő feliratkozóűrlap helyett.

A Figma-tervvel való 9 mondatos összehasonlítás és a két beadási link a `BEADAS.md` fájlban található. A projektgazda becslése: Figma 10 óra, AI 3,5 óra. Saját telefonos teszt visszaigazolása még nincs; PageSpeed-pontszám még nincs mérve.

## Képforrások

Az `images/sources.json` tartalmazza az eredeti Pexels-oldalakat és fotósokat. Minden fotó hangulati illusztráció, nem Eliza vagy a szalon saját fotója. A képek helyi WebP-k.
