(function () {
    const stats = ["Speed", "Speed (Water)", "Speed (Air)", "Speed (Anti-Gravity)", "Acceleration", "Weight", "Handling", "Handling (Water)", "Handling (Air)", "Handling (Anti-Gravity)", "Traction", "Mini-Turbo", "Invincibility"];
    const drivers = {
        "Light (Group 1)":  { "stats": [1, 1, 1, 1, 4, 0, 10, 10, 10, 10, 5, 5, 6], "parts": ["Baby Peach", "Baby Daisy"] },
        "Light (Group 2)":  { "stats": [1, 1, 1, 1, 5, 0, 9, 9, 9, 9, 3, 5, 6], "parts": ["Baby Rosalina", "Lemmy"] },
        "Light (Group 3)":  { "stats": [2, 2, 2, 2, 5, 1, 8, 8, 8, 8, 4, 5, 5], "parts": ["Baby Mario", "Baby Luigi", "Dry Bones", "Mii (Light)"] },
        "Light (Group 4)":  { "stats": [3, 3, 3, 3, 4, 2, 8, 8, 8, 8, 5, 4, 4], "parts": ["Koopa Troopa", "Lakitu", "Bowser Jr."] },
        "Light (Group 5)":  { "stats": [3, 3, 3, 3, 5, 2, 7, 7, 7, 7, 2, 4, 3], "parts": ["Toadette", "Wendy", "Isabelle"] },
        "Light (Group 6)":  { "stats": [4, 4, 4, 4, 4, 3, 7, 7, 7, 7, 4, 4, 3], "parts": ["Toad", "Shy Guy", "Larry"] },
        "Medium (Group 1)": { "stats": [5, 5, 5, 5, 4, 3, 6, 6, 6, 6, 3, 4, 3], "parts": ["Cat Peach", "Inkling Girl", "Villager (Female)"] },
        "Medium (Group 2)": { "stats": [6, 6, 6, 6, 3, 4, 5, 5, 5, 5, 3, 4, 1], "parts": ["Peach", "Daisy", "Yoshi", "Birdo"] },
        "Medium (Group 3)": { "stats": [6, 6, 6, 6, 3, 5, 5, 5, 5, 5, 1, 4, 1], "parts": ["Tanooki Mario", "Inkling Boy", "Villager (Male)"] },
        "Medium (Group 4)": { "stats": [7, 7, 7, 7, 2, 6, 4, 4, 4, 4, 2, 3, 3], "parts": ["Mario", "Ludwig", "Mii (Medium)"] },
        "Medium (Group 5)": { "stats": [7, 7, 7, 7, 2, 6, 5, 5, 5, 5, 1, 3, 3], "parts": ["Luigi", "Iggy", "Kamek"] },
        "Heavy (Group 1)":  { "stats": [8, 8, 8, 8, 1, 7, 3, 3, 3, 3, 3, 2, 4], "parts": ["Rosalina", "King Boo", "Link"] },
        "Heavy (Group 2)":  { "stats": [8, 8, 8, 8, 1, 10, 3, 3, 3, 3, 1, 1, 3], "parts": ["Metal Mario", "Pink Gold Peach"] },
        "Heavy (Group 3)":  { "stats": [8, 8, 8, 8, 1, 10, 3, 3, 3, 3, 1, 1, 6], "parts": ["Peter Piranha"] },
        "Heavy (Group 4)":  { "stats": [9, 9, 9, 9, 1, 8, 2, 2, 2, 2, 0, 1, 4], "parts": ["Waluigi", "Donkey Kong", "Roy", "Wiggler"] },
        "Heavy (Group 5)":  { "stats": [10, 10, 10, 10, 0, 9, 1, 1, 1, 1, 1, 0, 5], "parts": ["Wario", "Dry Bowser" ]},
        "Heavy (Group 6)":  { "stats": [10, 10, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0, 6], "parts": ["Bowser", "Morton", "Mii (Heavy)" ]}
    };

    const bodies = {
        "Body (Group 1)":  { "stats": [0, 1, 1, 2, 7, 0, 5, 4, 4, 5, 4, 7, 0], "parts": ["Biddybuggy", "Mr. Scooty"] },
        "Body (Group 2)":  { "stats": [2, 5, 2, 0, 6, 0, 4, 5, 3, 2, 6, 6, 2], "parts": ["Streetle"] },
        "Body (Group 3)":  { "stats": [2, 5, 2, 0, 6, 0, 4, 5, 3, 2, 6, 6, 1], "parts": ["Landship"] },
        "Body (Group 4)":  { "stats": [2, 3, 1, 1, 6, 1, 5, 4, 2, 4, 4, 6, 2], "parts": ["Pipe Frame"] },
        "Body (Group 5)":  { "stats": [2, 3, 1, 1, 6, 1, 5, 4, 2, 4, 4, 6, 1], "parts": ["Varmint", "City Tripper"] },
        "Body (Group 6)":  { "stats": [2, 2, 4, 3, 5, 2, 4, 2, 4, 3, 3, 6, 3], "parts": ["Cat Cruiser", "Teddy Buggy"] },
        "Body (Group 7)":  { "stats": [2, 2, 4, 3, 5, 2, 4, 2, 4, 3, 3, 6, 2], "parts": ["Comet", "Yoshi Bike"] },
        "Body (Group 8)":  { "stats": [2, 2, 3, 4, 5, 1, 4, 3, 3, 4, 5, 5, 3], "parts": ["W 25 Silver Arrow"] },
        "Body (Group 9)":  { "stats": [2, 2, 3, 4, 5, 1, 4, 3, 3, 4, 5, 5, 2], "parts": ["Standard Bike", "Flame Rider"] },
        "Body (Group 10)": { "stats": [2, 2, 3, 4, 5, 1, 4, 3, 3, 4, 5, 5, 1], "parts": ["Wild Wiggler"] },
        "Body (Group 11)": { "stats": [3, 3, 4, 5, 3, 3, 2, 2, 2, 4, 4, 5, 4], "parts": ["Mach 8", "Sports Coupe"] },
        "Body (Group 12)": { "stats": [3, 3, 4, 5, 3, 3, 2, 2, 2, 4, 4, 5, 3], "parts": ["Inkstriker"] },
        "Body (Group 13)": { "stats": [3, 3, 3, 3, 4, 2, 3, 2, 3, 3, 3, 5, 4], "parts": ["300 SL Roadster"] },
        "Body (Group 14)": { "stats": [3, 3, 3, 3, 4, 2, 3, 2, 3, 3, 3, 5, 3], "parts": ["Standard Kart", "The Duke"] },
        "Body (Group 15)": { "stats": [3, 4, 3, 3, 2, 3, 4, 4, 3, 3, 7, 5, 4], "parts": ["Tanooki Kart"] },
        "Body (Group 16)": { "stats": [3, 4, 3, 3, 2, 3, 4, 4, 3, 3, 7, 5, 3], "parts": ["Koopa Clown", "Master Cycle Zero"] },
        "Body (Group 17)": { "stats": [4, 3, 3, 3, 2, 1, 3, 3, 3, 2, 2, 4, 5], "parts": ["Prancer"] },
        "Body (Group 18)": { "stats": [4, 3, 3, 3, 2, 1, 3, 3, 3, 2, 2, 4, 3], "parts": ["Sport Bike", "Jet Bike"] },
        "Body (Group 19)": { "stats": [4, 2, 3, 4, 3, 0, 2, 3, 1, 5, 3, 4, 4], "parts": ["Blue Falcon"] },
        "Body (Group 20)": { "stats": [4, 2, 3, 4, 3, 0, 2, 3, 1, 5, 3, 4, 3], "parts": ["Splat Buggy"] },
        "Body (Group 21)": { "stats": [4, 2, 3, 3, 2, 2, 3, 2, 2, 3, 0, 4, 5], "parts": ["Sneeker"] },
        "Body (Group 22)": { "stats": [4, 2, 3, 3, 2, 2, 3, 2, 2, 3, 0, 4, 4], "parts": ["Gold Kart"] },
        "Body (Group 23)": { "stats": [4, 2, 3, 3, 2, 2, 3, 2, 2, 3, 0, 4, 3], "parts": ["Master Cycle"] },
        "Body (Group 24)": { "stats": [4, 5, 0, 2, 1, 4, 1, 5, 1, 1, 3, 3, 6], "parts": ["Steel Driver", "Tri-Speeder"] },
        "Body (Group 25)": { "stats": [4, 5, 0, 2, 1, 4, 1, 5, 1, 1, 3, 3, 5], "parts": ["Bone Rattler"] },
        "Body (Group 26)": { "stats": [5, 1, 2, 4, 1, 3, 1, 1, 0, 2, 1, 3, 6], "parts": ["Circuit Special", "B Dasher", "P-Wing"] },
        "Body (Group 27)": { "stats": [5, 2, 1, 3, 0, 4, 0, 1, 0, 1, 5, 3, 7], "parts": ["Badwagon", "GLA"] },
        "Body (Group 28)": { "stats": [5, 2, 1, 3, 0, 4, 0, 1, 0, 1, 5, 3, 6], "parts": ["Standard ATV"] }
    };

    const tires = {
        "Tire (Group 1)":  { "stats": [0, 3, 3, 0, 6, 0, 4, 4, 4, 4, 4, 6, 0], "parts": ["Roller", "Azure Roller"] },
        "Tire (Group 2)":  { "stats": [1, 2, 2, 2, 5, 0, 3, 3, 2, 4, 3, 5, 2], "parts": ["Leaf Tires", "Button"] },
        "Tire (Group 3)":  { "stats": [1, 1, 4, 1, 4, 1, 2, 1, 3, 2, 6, 5, 5], "parts": ["Cushion"] },
        "Tire (Group 4)":  { "stats": [1, 1, 4, 1, 4, 1, 2, 1, 3, 2, 6, 5, 3], "parts": ["Sponge"] },
        "Tire (Group 5)":  { "stats": [2, 3, 3, 2, 4, 2, 3, 3, 3, 3, 5, 4, 4], "parts": ["GLA Tires"] },
        "Tire (Group 6)":  { "stats": [2, 3, 3, 2, 4, 2, 3, 3, 3, 3, 5, 4, 3], "parts": ["Standard", "Blue Standard"] },
        "Tire (Group 7)":  { "stats": [3, 2, 2, 4, 2, 2, 4, 4, 4, 3, 1, 3, 4], "parts": ["Slim", "Wood", "Crimson Slim"] },
        "Tire (Group 8)":  { "stats": [3, 2, 1, 2, 2, 4, 0, 1, 1, 0, 7, 3, 5], "parts": ["Monster", "Hot Monster"] },
        "Tire (Group 9)":  { "stats": [3, 2, 1, 2, 2, 4, 0, 1, 1, 0, 7, 3, 4], "parts": ["Ancient Tires"] },
        "Tire (Group 10)": { "stats": [3, 4, 1, 2, 3, 3, 1, 1, 2, 2, 6, 3, 6], "parts": ["Off-Road", "Retro Off-Road"] },
        "Tire (Group 11)": { "stats": [3, 4, 1, 2, 3, 3, 1, 1, 2, 2, 6, 3, 5], "parts": ["Triforce Tires"] },
        "Tire (Group 12)": { "stats": [4, 3, 2, 1, 0, 4, 2, 2, 0, 1, 2, 2, 5], "parts": ["Metal"] },
        "Tire (Group 13)": { "stats": [4, 3, 2, 1, 0, 4, 2, 2, 0, 1, 2, 2, 4], "parts": ["Gold Tires"] },
        "Tire (Group 14)": { "stats": [4, 0, 0, 4, 1, 3, 2, 0, 1, 2, 0, 2, 4], "parts": ["Slick", "Cyber Slick"] }
    };

    const gliders = {
        "Glider (Group 1)": { "stats": [0, 1, 1, 1, 2, 0, 1, 0, 2, 1, 1, 2, 0], "parts": ["Cloud Glider", "Parachute", "Flower Glider", "Paper Glider"] },
        "Glider (Group 2)": { "stats": [0, 0, 1, 1, 2, 1, 1, 1, 2, 0, 0, 2, 0], "parts": ["Peach Parasol", "Parafoil", "Bowser Kite", "MKTV Parafoil"] },
        "Glider (Group 3)": { "stats": [1, 1, 2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1], "parts": ["Super Glider", "Waddle Wing", "Hylian Kite"] },
        "Glider (Group 4)": { "stats": [1, 0, 2, 1, 1, 2, 1, 1, 1, 0, 0, 1, 1], "parts": ["Wario Wing", "Plane Glider", "Gold Glider", "Paraglider"] }
    };

    let combos = [];
    for (const driver in drivers) {
        const driverData = drivers[driver];
        for (const body in bodies) {
            const bodyData = bodies[body];
            for (const tire in tires) {
                const tireData = tires[tire];
                for (const glider in gliders) {
                    const gliderData = gliders[glider];
                    let combinedStats = {};
                    cols = [];
                    cols.push(driverData.parts.join("/"));
                    cols.push(bodyData.parts.join("/"));
                    cols.push(tireData.parts.join("/"));
                    cols.push(gliderData.parts.join("/"));

                    for (let i = 0; i < stats.length; i++) {
                        combinedStats[stats[i]] = (driverData.stats[i] + bodyData.stats[i] + tireData.stats[i] + gliderData.stats[i]) * 0.25 + 0.75;
                        cols.push("" + combinedStats[stats[i]]);
                    }
                    combos.push({
                        combo: {
                            driver: { name: driver, parts: driverData.parts },
                            body: { name: body, parts: bodyData.parts },
                            tires: { name: tire, parts: tireData.parts },
                            glider: { name: glider, parts: gliderData.parts }
                        },
                        stats: combinedStats
                    });

                    console.log(cols.join(","))
                }
            }
        }
    }

    let columnDefs = [
        { field: "Character" },
        { field: "Body" },
        { field: "Tires" },
        { field: "Glider" }
    ];

    for (const stat of stats) {
        columnDefs.push({
            field: stat,
            headerName: stat.replace("Air", "A").replace("Water", "W").replace("Anti-Gravity", "AG"),
            filter: 'agNumberColumnFilter',
            filterParams: {
                filterOptions: ['equals', 'lessThan', 'lessThanOrEqual', 'greaterThan', 'greaterThanOrEqual', 'inRange'],
                suppressAndOrCondition: true,
                inRangeInclusive: true
            }
        });
    }

    let rowData = [];

    for (let combo of combos) {
        rowData.push({
            ...combo.stats,
            Character: combo.combo.driver.parts.join("/"),
            Body: combo.combo.body.parts.join("/"),
            Tires: combo.combo.tires.parts.join("/"),
            Glider: combo.combo.glider.parts.join("/"),
        })
    }

    const gridOptions = {
        columnDefs,
        rowData,
        defaultColDef: {
            flex: 1,
            resizable: true,
            floatingFilter: true,
            minWidth: 150,
            filter: true,
            sortable: true,
            filterParams: {
                filterOptions: ['contains', 'notContains'],
            }
        },
    };

    document.addEventListener('DOMContentLoaded', () => {
        const gridDiv = document.querySelector('#comboFinder');
        new agGrid.Grid(gridDiv, gridOptions);
    });
})();