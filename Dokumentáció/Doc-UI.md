Eggshop mobilos applikáció

Bevezető
Ez az React nativeban megírt program, arra szolgál hogy a boltot akár moblilról is elérjék a beszerzéssel foglalkozók. 
Így könnyebben átlátják a raktárban lévő termékeket, illetve felis tudják tölteni az új szállitmányt.

Hogy futtatni tudjuk az appot a következő parancsokra lesz szükségünk:

-Elindításához előszőr az npm install parancsot használjuk hogy telepítsük a Node-Modules könyvtárat hozzá.
-Ezután az elindításához szükségünk lesz az npx expo parancsra amivel elindul a programunk és megjeleníti a felületet.
-Ezután megadjuk a belépési adatokat, ezután beléptet minket a felületre ahol kezelni tudjuk a termékeket. 
-A program a következő komponenseket tartalmazza:

LoginForm

Ez arra szolgál hogy egy nyomtatványon keresztül az adatainkat bevigyük az adatbázsiba.

Loginscreen
Ez azután jelenik meg hogy sikeresen leellenőrizte a rendszer hogy admin jogosultságunk van.

ProductForm
Hasonlóan a loginformhoz ez a komponens felel azért hogy új terméket vehessünk fel az adatbázisba.

ProductList
Ez a komponens azért felel hogy kilistázzuk a termékeket illetve ezen a fülön tudjuk törölni is a már nem forgalomban lévő termékeket.

Adminlogin
Ez azért felel hogy a loginformból átküldött adatok biztosan admin jogosultsággal rendelkeznek-e az is_admin függvényen keresztül.

Api
Ez a komponens köti össze az adatbázist a React Nativ alkalmazással.

App
Ez a fő komponense a mobilos appnak. Ebben vannak összesítve a fentebb leirt komponensek és ezáltal müködik minden felület megfelelően.

Várható fejlesztések

Jelenlegi állapotában még nem teljes értékű mobilos applikáció és szeretnénk bővíteni különböző funkicókkal amik segítik a dolgozók munkáját ileltve könnyítik. Folyamatosan fejleszteni szeretnénk, új desgint, és akár több funkciót hozzáadni a programot megvásárló cég kérésére.