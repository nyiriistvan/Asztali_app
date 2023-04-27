# Eggshop mobilos applikáció

## Bevezető
Ez a React Native-ban megírt program arra szolgál, hogy a boltot akár mobilról is elérjék a beszerzéssel foglalkozók. Így könnyebben átlátják a raktárban lévő termékeket, illetve fel tudják tölteni az új tojásokat amiket kaptak.

## Hogyan futtatható az app?
A következő parancsokra lesz szükségünk az alkalmazás futtatásához:

- Először az `npm install` parancsot kell futtatni, hogy telepítsük a `Node-Modules` könyvtárat.

- Ezután az `npx expo` parancsra van szükségünk, amivel elindíthatjuk az alkalmazást és megjeleníthetjük a felületet.

- Miután megadjuk a belépési adatokat, beléphetünk a felületre, ahol kezelni tudjuk a termékeket.

## Alkalmazás komponensei
Az alkalmazás a következő komponenseket tartalmazza:

### LoginForm
Ez a komponens arra szolgál, hogy egy nyomtatványon keresztül bevigyük az adatainkat az adatbázisba.Ez csak az admin jogosultásggal rendelkező fiókokat lépteti be. Itt találtható két input rész illetve maga az Adminlogin felirat ami megjelenik a kijelzőn (`LoginScreen` komponensben). Az input panelek egyike az admin felhasznlónevét vagy emailcimét kéri be, míg a másik a jelszót.  

### Loginscreen
Ez az oldal jelenik meg azután, hogy sikeresen leellenőrizte a rendszer, hogy rendelkezünk admin jogosultsággal. Hogyha sikeres az azonosítás akkor a felhasználó kap egy bearer tokent amit a termékfelvételhez, módosításhoz, illetve törléshez kötelezően megkell adni, de erről a program gondoskodik. 
 `Productform` oldalra kerülünk át ahol termékeket tudunk felvenni illetve itt jeleníti meg az `App` főkomponens itt jeleníti meg a `Productview` komponens által a táblázatot az adatbáziból lehívott termékekkel.

### ProductForm
Ez a komponens arra szolgál, hogy új terméket vegyünk fel az adatbázisba.Ez a funkció csakis a Bearer tokennel használható.

### ProductList
Ez a komponens arra szolgál, hogy kilistázzuk a termékeket, illetve ezen a fülön tudjuk törölni a már nem forgalomban lévő termékeket. Ez a komponens együtt dolgozik a `ProductForms` komponenssel, illetve az API komponenssel igy kéri le az adatokat a backend szervertől.Ebben tároljuk a `fetchproducts` metodust illetve a `renderproduct` metodust amik elősegítik a `Productview` komponenben megjeleníteni a termékeket az adatbázisból.

### Productview
Ez a komponens arra szolgál hogy lekérje az adatokat amik már bentvannak a szerveren és a Table komponensel táblázatba rendezve megjelenítse az adatokat.
### Table
Ez a komponens arra szolgál hogy a ProductView komponenesel lehívott adatokat a backend szerverről táblázatban megjelenítse.Ennek a komponensnek külön stílusa van amit használ a `Producview` komponensben hogy megjelenjenek az adatbázisban eltárolt termékek adatai.Itt  a tábla megjelenéséről a következő változók gondoskodnak:
-`Table`: ez szolgál a tábla alapjául, ez adja meg a formáját.

-`TableRow`:Ez a tábla fejlécének a megjelenését szabályozza, ennek a stílusa az ami meghatázorra hogy az adott sorban szereplő adat fölött a megfelelő cimke legyen.

-`Tablecell`: Ez a komponens felel azért hogy a tábla cellái hogyan is nézzenek ki, ennek a stílusával tudjuk szabályozni a cellák elhelyezkedését a tálbázatban.

-`TableHeader`: Ez a komponens a fejléc elhelyezkedését szabályozza, ennek a stlíusával tudjuk a színét, elhelyezkedését változatni a fejlécnek.

### Adminlogin
Ez a komponens arra szolgál, hogy a LoginForm-ból átküldött adatokat ellenőrizzük, hogy admin jogosultsággal rendelkeznek-e az `is_admin` függvényen keresztül. Hogyha nem admin aki beakar lépni hibára fut és nem engedi bejelentkezni. Helytelen jelszó vagy Emailcím/felhasználónév megadása esetén a rendszer hibaüzenetet küld vissza és jelzi hogy rosszul adtuk meg az adatot.

### API
Ez a komponens köti össze az adatbázist a React Native alkalmazással.Ez szolgál arra hogy minden CRUD műveletet eltudjunk az adatbázisban végezni, az alkalmazás által. Itt tároljuk az összes útvonalat amit az alkamazás használ
a CRUD műveletekhez illetve új utvonalakat is amire szükségünk van az adatbázisból való lekéréshez itt tárolhatunk el.

### App
Ez az alkalmazás fő komponense, fő oldala. Ebben vannak összesítve a fentebb leírt komponensek, és ezáltal működik minden felület megfelelően. Ez szolgál az app jelenlegi főoldalaként, innen érhetjük el a föbb funkciókat, illetve itt jelenik meg a `Productlist` táblázata is és itt láthatjuk a felvett termékeket, illetve az új termékeket is ezen az oldalon tudjuk felvenni illetve a meglévőket módosítani vagy törölni. 

## Várható fejlesztések
Jelenlegi állapotában még nem teljes értékű mobilos alkalmazás, és szeretnénk bővíteni különböző funkciókkal, amelyek segítik a dolgozók munkáját, illetve könnyítik azt. Folyamatosan fejleszteni szeretnénk, új design-t készíteni, és akár több funkciót hozzáadni a programot megvásárló cég kérésére. Jelenleg vannak funkciók amik még nem elérhetők fejlesztés miatt. 