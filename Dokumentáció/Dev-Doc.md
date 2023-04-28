
## Fejlesztői Dokumentáció

Ez a fejlesztői dokumentáció a Tojgli alkalmazás fejlesztői számára készült. Az alábbiakban bemutatom az alkalmazás architektúráját, az általa használt technológiákat, a főbb funkciókat és azok működését, valamint a tesztelési eljárásokat és azok használatát.

## Architektúra

A Tojgli alkalmazás egy webalkalmazás, amely React keretrendszerre épül. A  backend különálló egység, amelyet a következőképpen lehet elérni:

A backend elérhető a `api` mappában található útvonalak segítségével.

## Az alkalmazás az alábbi főbb technológiákat használja:

- React: A frontend keretrendszer.
- Node.js: A backend környezet.
- Express: Az alkalmazás szerveroldali keretrendszere.
- MariaDB: Az adatbázis-kezelő rendszer.

## Főbb funkciók és működés

Az Tojgli alkalmazás lehetővé teszi a felhasználók számára, hogy virtuális termékeket hozzanak létre és kezeljenek. Az alkalmazás főbb funkciói:

- Termékek létrehozása, szerkesztése és törlése.
- Termékek hozzáadása, szerkesztése és törlése a táblázatban illetve adatbázisban.
- Termékek listázása a táblázatban.
- Termékek keresése.

## Az alkalmazás az alábbi folyamatokat követi:

1. A felhasználó a frontend felhasználói felületén jelentkezik be.
2. Az alkalmazás az adatbázisban ellenőrzi a felhasználói adatokat, majd engedélyezi a belépést.
3. A felhasználó az alkalmazás felületén termékeket hoz létre.
4. Az alkalmazás az adatbázisban tárolja a termékek adatait.
5. A felhasználó az alkalmazás felületén keresi a jegyzettömböket és jegyzeteket.
6. Az alkalmazás megjeleníti a keresett eredményeket a felhasználói felü7. Az alkalmazás lehetőséget biztosít a felhasználóknak a termékek szerkesztésére és törlésére.
7. Az alkalmazás biztosít egy reszponzív és könnyen használható felhasználói felületet a felhasználók számára, hogy hatékonyan kezeljék a termékeket .


## Telepítési útmutató

Az Tojgli alkalmazás telepítése a következő lépéseket igényli:

1. Klónozza le a GitHub projektet a saját gépére.
2. Telepítse a Node.js-t, ha még nem tette meg.
3. Telepítse a projekt függőségeit az alábbi parancsokkal:

```
cd Asztali_app
npm install
```

4. Az alkalmazás futtatása:

```
npx expo
```

Ezekkel a lépésekkel sikeresen telepítheti és futtathatja az Tojgli alkalmazást a saját gépén.Emellett választható az hogy webes felületen vagy mobilos felületen szeretnénk az alkalmazást elindítani.

## Konklúzió

Az Tojgli alkalmazás egy egyszerű, de hatékony termékfelvevő alkalmazás, amely könnyen telepíthető és használható. A dokumentáció által bemutatott információk és lépések lehetővé teszik a fejlesztők számára az alkalmazás bővítését és tesztelését.
