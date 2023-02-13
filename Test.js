let info = [];
for (let i = 0; i < 18; i++) {
    let a = [];
    for (let i = 0; i < 304; i++) {
        let randomSeedA = Int(Math.random() * (5 - 1 + 1)),
            randomSeedB = Int(Math.random() * (5 - 1 + 1));
        a.push({
            x: Int(Math.random() * (99999)),
            y: Int(Math.random() * (99999)),
            type: "common",
            routeToNext: Int(Math.random() * 8).toString(),
            text: {
                name: [["Fontenay", "Vincennes", "Nation", "Gare de Lyon", "La Défense", "Châtelet Les Halles", "La défense"][randomSeedA] + ["-Est", "-Ouest", "-Nord", "-Sud", "-Centre"][randomSeedA],
                      ["Sous-Bois", "Sur-Seine", "Porte", "Mairie", "La-Grande-Arche"][randomSeedA]],
                type: "withSecondaryName",
                position: Int(Math.random() * 8),
                alignment: ["start", "middle", "end"][Int(Math.random() * 3)]
            }, stationStyle: ["rect", "circle"][Int(Math.random() * 2)]
        })
    }
    info.push({
        stations: a,
        "lineCap": "round",
        "lineJoin": "round",
        "strokeWidth": "5px",
        "color": "#f3d03e",
        "id": 0,
        "name": "Line 1",
        "opacity": 1,
    });
}
contentData = {
    "name": "Guangzhou Line",
    "author": "Penguin",
    "lastModified": 15859929999945,
    "width": 99999,
    "height": 99999,
    "textStyle": "",
    "primaryNameStyle": "font:18px/1 Anodina,sans-serif;",
    "secondaryNameStyle": "font:11px/1 Anodina,sans-serif;color:var(--grey)", "pathInfo": info
};
initDrawable();
pg.$("#resSvg")[0].setAttribute("viewBox", "0 0 99999 99999");
pg.$("#resSvg")[0].style.width = 99999 + "px";
pg.$("#resSvg")[0].style.height = 99999 + "px";
pg.$("#grid")[0].style.width = 99999 + "px";
pg.$("#grid")[0].style.height = 99999 + "px";
pg.$("#drawable")[0].style.width = 99999 + "px";
pg.$("#drawable")[0].style.height = 99999 + "px";
