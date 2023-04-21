# Eggshop mobilos applikáció

## Bevezető
Ez a React Native-ban megírt program arra szolgál, hogy a boltot akár mobilról is elérjék a beszerzéssel foglalkozók. Így könnyebben átlátják a raktárban lévő termékeket, illetve fel tudják tölteni az új szállítmányt.

## Hogyan futtatható az app?
A következő parancsokra lesz szükségünk az alkalmazás futtatásához:
- Először az `npm install` parancsot kell futtatni, hogy telepítsük a `Node-Modules` könyvtárat.
- Ezután az `npx expo` parancsra van szükségünk, amivel elindíthatjuk az alkalmazást és megjeleníthetjük a felületet.
- Miután megadjuk a belépési adatokat, beléphetünk a felületre, ahol kezelni tudjuk a termékeket.

## Alkalmazás komponensei
Az alkalmazás a következő komponenseket tartalmazza:

### LoginForm
Ez a komponens arra szolgál, hogy egy nyomtatványon keresztül bevigyük az adatainkat az adatbázisba.

### Loginscreen
Ez az oldal jelenik meg azután, hogy sikeresen leellenőrizte a rendszer, hogy rendelkezünk admin jogosultsággal.

### ProductForm
Ez a komponens arra szolgál, hogy új terméket vegyünk fel az adatbázisba.

### ProductList
Ez a komponens arra szolgál, hogy kilistázzuk a termékeket, illetve ezen a fülön tudjuk törölni a már nem forgalomban lévő termékeket.

### Adminlogin
Ez a komponens arra szolgál, hogy a LoginForm-ból átküldött adatokat ellenőrizzük, hogy admin jogosultsággal rendelkeznek-e az `is_admin` függvényen keresztül.

### API
Ez a komponens köti össze az adatbázist a React Native alkalmazással.

### App
Ez az alkalmazás fő komponense. Ebben vannak összesítve a fentebb leírt komponensek, és ezáltal működik minden felület megfelelően.

## Várható fejlesztések
Jelenlegi állapotában még nem teljes értékű mobilos alkalmazás, és szeretnénk bővíteni különböző funkciókkal, amelyek segítik a dolgozók munkáját, illetve könnyítik azt. Folyamatosan fejleszteni szeretnénk, új design-t készíteni, és akár több funkciót hozzáadni a programot megvásárló cég kérésére. 