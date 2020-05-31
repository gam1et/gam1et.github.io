var elements = [
    {
        "id": 1,
        "isBase": true,
        "class": "fire",
        "text": "Огонь"
    },
    {
        "id": 2,
        "isBase": true,
        "class": "water",
        "text": "Вода",
        "description": "Вода́ (оксид водорода) — бинарное неорганическое соединение с химической формулой H2O: молекула воды состоит из двух атомов водорода и одного — кислорода",
        "recept": [["ice", "fire"]]
    },
    {
        "id": 3,
        "isBase": true,
        "class": "air",
        "text": "Воздух"
    },
    {
        "id": 4,
        "isBase": true,
        "class": "ground",
        "text": "Земля"
    },
    {
        "id": 5,
        "class": "lava",
        "text": "Лава",
        "recept": [["fire", "ground"]]
    },
    {
        "id": 6,
        "class": "swamp",
        "text": "Болото",
        "recept": [["water", "ground"]]
    },
    {
        "id": 7,
        "class": "energy",
        "text": "Энергия",
        "recept": [["air", "fire"]]
    },
    {
        "id": 8,
        "class": "electricity",
        "text": "Электричество",
        "recept": [["metal", "energy"]]
    },
    {
        "id": 9,
        "class": "sea",
        "text": "Море",
        "recept": [["salt", "water"],["water", "water"]]
    },
    {
        "id": 10,
        "class": "wind",
        "text": "Ветер",
        "recept": [["air", "air"]]
    },
    {
        "id": 11,
        "class": "steam",
        "text": "Пар",
        "recept": [["fire", "water"]]
    },
    {
        "id": 12,
        "class": "cloud",
        "text": "Облако",
        "recept": [["steam", "air"]]
    },
    {
        "id": 13,
        "class": "sky",
        "text": "Небо",
        "recept": [["cloud", "air"]]
    },
    {
        "id": 14,
        "class": "pressure",
        "text": "Давление",
        "recept": [["ground", "ground"]]
    },
    {
        "id": 15,
        "class": "rain",
        "text": "Дождь",
        "recept": [["cloud", "water"]]
    },
    {
        "id": 16,
        "class": "volcano",
        "text": "Вулкан",
        "recept": [["pressure", "lava"]]
    },
    {
        "id": 17,
        "class": "stone",
        "text": "Камень",
        "recept": [["water", "lava"]]
    },
    {
        "id": 18,
        "class": "geyser",
        "text": "Гейзер",
        "recept": [["ground", "steam"]]
    },
    {
        "id": 19,
        "class": "metal",
        "text": "Металл",
        "recept": [["fire", "stone"]]
    },
    {
        "id": 20,
        "class": "sand",
        "text": "Песок",
        "recept": [["stone", "wind"], ["stone", "water"]]
    },
    {
        "id": 21,
        "class": "clay",
        "text": "Глина",
        "recept": [["sand", "swamp"]]
    },
    {
        "id": 22,
        "class": "silicon",
        "text": "Кремний",
        "recept": [["sand", "pressure"]]
    },
    {
        "id": 23,
        "class": "desert",
        "text": "Пустыня",
        "recept": [["sand", "sand"]]
    },
    {
        "id": 24,
        "class": "glass",
        "text": "Стекло",
        "recept": [["sand", "fire"]]
    },
    {
        "id": 25,
        "class": "hourglass",
        "text": "Песочные часы",
        "recept": [["sand", "glass"]]
    },
    {
        "id": 26,
        "class": "life",
        "text": "Жизнь",
        "recept": [["swamp", "energy"]]
    },
    {
        "id": 27,
        "class": "egg",
        "text": "Яйцо",
        "recept": [["life", "stone"]]
    },
    {
        "id": 28,
        "class": "dust",
        "text": "Пыль",
        "recept": [["air", "ground"]]
    },
    {
        "id": 29,
        "class": "turtle",
        "text": "Черепаха",
        "recept": [["sand", "life"]]
    },
    {
        "id": 30,
        "class": "lightbulb",
        "text": "Лампочка",
        "recept": [["electricity", "glass"]]
    },
    {
        "id": 31,
        "class": "magnet",
        "text": "Магнит",
        "recept": [["electricity", "metal"]]
    },
    {
        "id": 32,
        "class": "bacteria",
        "text": "Бактерия",
        "recept": [["swamp", "life"]]
    },
    {
        "id": 33,
        "class": "worm",
        "text": "Червь",
        "recept": [["bacteria", "ground"]]
    },
    {
        "id": 34,
        "class": "sulfur",
        "text": "Сера",
        "recept": [["bacteria", "swamp"]]
    },
    {
        "id": 35,
        "class": "flu",
        "text": "Грипп",
        "recept": [["bacteria", "air"]]
    },
    {
        "id": 36,
        "class": "butterfly",
        "text": "Бабочка",
        "recept": [["worm", "air"]]
    },
    {
        "id": 37,
        "class": "omlet",
        "text": "Яичница",
        "recept": [["egg", "fire"]]
    },
    {
        "id": 38,
        "class": "brick",
        "text": "Кирпич",
        "recept": [["fire", "clay"]]
    },
    {
        "id": 39,
        "class": "mite",
        "text": "Клещ",
        "recept": [["life", "dust"]]
    },
    {
        "id": 40,
        "class": "cold",
        "text": "Холод",
        "recept": [["cloud", "wind"]]
    },
    {
        "id": 41,
        "class": "ice",
        "text": "Лёд",
        "recept": [["cold", "water"]]
    },
    {
        "id": 42,
        "class": "oasis",
        "text": "Оазис",
        "recept": [["desert", "water"]]
    },
    {
        "id": 43,
        "class": "seeds",
        "text": "Семена",
        "recept": [["ground", "life"]]
    },
    {
        "id": 44,
        "class": "tree",
        "text": "Дерево",
        "recept": [["ground", "seeds"]]
    },
    {
        "id": 45,
        "class": "flower",
        "text": "Цветок",
        "recept": [["water", "seeds"]]
    },
    {
        "id": 46,
        "class": "forest",
        "text": "Лес",
        "recept": [["tree", "tree"]]
    },
    {
        "id": 47,
        "class": "coal",
        "text": "Уголь",
        "recept": [["tree", "fire"]]
    },
    {
        "id": 48,
        "class": "diamond",
        "text": "Алмаз",
        "recept": [["coal", "pressure"]]
    },
    {
        "id": 49,
        "class": "snow",
        "text": "Снегопад",
        "recept": [["cold", "rain"]]
    },
    {
        "id": 50,
        "class": "plankton",
        "text": "Планктон",
        "recept": [["bacteria", "water"]]
    },
    {
        "id": 51,
        "class": "light",
        "text": "Свет",
        "recept": [["electricity", "lightbulb"]]
    },
    {
        "id": 52,
        "class": "rainbow",
        "text": "Радуга",
        "recept": [["light", "rain"], ["sun", "rain"]]
    },
    {
        "id": 53,
        "class": "oxygen",
        "text": "Кислород",
        "recept": [["flower", "light"]]
    },
    {
        "id": 54,
        "class": "star",
        "text": "Звезда",
        "recept": [["energy", "light"]]
    },
    {
        "id": 55,
        "class": "sun",
        "text": "Солнце",
        "recept": [["star", "fire"]]
    },
    {
        "id": 56,
        "class": "orange",
        "text": "Апельсин",
        "recept": [["tree", "sun"]]
    },
    {
        "id": 57,
        "class": "bird",
        "text": "Птица",
        "recept": [["life", "sky"]]
    },
    {
        "id": 58,
        "class": "airplane",
        "text": "Самолет",
        "recept": [["bird", "metal"]]
    },
    {
        "id": 59,
        "class": "penguin",
        "text": "Пингвин",
        "recept": [["bird", "ice"]]
    },
    {
        "id": 60,
        "class": "steam_boiler",
        "text": "Паровой котел",
        "recept": [["steam", "metal"]]
    },
    {
        "id": 61,
        "class": "steam_engine",
        "text": "Паровой двигатель",
        "recept": [["steam_boiler", "coal"]]
    },
    {
        "id": 62,
        "class": "tractor",
        "text": "Трактор",
        "recept": [["steam_engine", "ground"]]
    },
    {
        "id": 63,
        "class": "salt",
        "text": "Соль",
        "recept": [["sea", "fire"]]
    },
    {
        "id": 64,
        "class": "ocean",
        "text": "Океан",
        "recept": [["sea", "sea"]]
    },
    {
        "id": 65,
        "class": "cactus",
        "text": "Кактус",
        "recept": [["desert", "tree"]]
    },
    {
        "id": 66,
        "class": "earthquake",
        "text": "Землетрясение",
        "recept": [["energy", "ground"]]
    },
    {
        "id": 67,
        "class": "dragon",
        "text": "Дракон",
        "recept": [["dino", "fire"]]
    },
    {
        "id": 68,
        "class": "parrot",
        "text": "Попугай",
        "recept": [["bird", "rainbow"]]
    },
    {
        "id": 69,
        "class": "hummingbird",
        "text": "Колибри",
        "recept": [["bird", "flower"]]
    },
    {
        "id": 70,
        "class": "sunflower",
        "text": "Подсолнух",
        "recept": [["sun", "flower"]]
    },
    {
        "id": 71,
        "class": "mud",
        "text": "Грязь",
        "recept": [["dust", "rain"],["dust", "water"]]
    },
    {
        "id": 72,
        "class": "pheonix",
        "text": "Феникс",
        "recept": [["fire", "bird"]]
    },
    {
        "id": 73,
        "class": "fish",
        "text": "Рыба",
        "recept": [["bacteria", "plankton"]]
    },
    {
        "id": 74,
        "class": "electric_stingray",
        "text": "Электрический скат",
        "recept": [["fish", "electricity"]]
    },
    {
        "id": 75,
        "class": "aquarium",
        "text": "Аквариум",
        "recept": [["fish", "glass"]]
    },
    {
        "id": 76,
        "class": "shell",
        "text": "Ракушка",
        "recept": [["plankton", "stone"]]
    },
    {
        "id": 77,
        "class": "snail",
        "text": "Улитка",
        "recept": [["shell", "worm"]]
    },
    {
        "id": 78,
        "class": "pearl",
        "text": "Жемчуг",
        "recept": [["sand", "shell"]]
    },
    {
        "id": 79,
        "class": "limestone",
        "text": "Известняк",
        "recept": [["stone", "shell"]]
    },
    {
        "id": 80,
        "class": "cement",
        "text": "Цемент",
        "recept": [["limestone", "clay"]]
    },
    {
        "id": 81,
        "class": "concrete",
        "text": "Бетон",
        "recept": [["cement", "water"]]
    },
    {
        "id": 82,
        "class": "brick_house",
        "text": "Кирпичный дом",
        "recept": [["concrete", "brick"]]
    },
    {
        "id": 83,
        "class": "skyscraper",
        "text": "Небоскреб",
        "recept": [["brick_house", "glass"]]
    },
    {
        "id": 84,
        "class": "city",
        "text": "Город",
        "recept": [["skyscraper", "skyscraper"]]
    },
    {
        "id": 85,
        "class": "country",
        "text": "Страна",
        "recept": [["city", "city"]]
    },
    {
        "id": 86,
        "class": "continent",
        "text": "Континент",
        "recept": [["country", "country"]]
    },
    {
        "id": 87,
        "class": "paper",
        "text": "Бумага",
        "recept": [["tree", "pressure"],["tree", "stone"]]
    },
    {
        "id": 88,
        "class": "map",
        "text": "Карта",
        "recept": [["paper", "continent"]]
    },
    {
        "id": 89,
        "class": "compass",
        "text": "Компас",
        "recept": [["magnet", "map"]]
    },
    {
        "id": 90,
        "class": "mail",
        "text": "Почта",
        "recept": [["paper", "bird"]]
    },
    {
        "id": 91,
        "class": "oil",
        "text": "Масло",
        "recept": [["sunflower", "pressure"]]
    },
    {
        "id": 92,
        "class": "paint",
        "text": "Краска",
        "recept": [["pressure", "flower"]]
    },
    {
        "id": 93,
        "class": "thunder",
        "text": "Гром",
        "recept": [["rain", "rain"]]
    },
    {
        "id": 94,
        "class": "lightning",
        "text": "Молния",
        "recept": [["rain", "rain"]]
    },
    {
        "id": 95,
        "class": "hen",
        "text": "Курица",
        "recept": [["egg", "life"]]
    },
    {
        "id": 96,
        "class": "dilemma",
        "text": "Дилемма",
        "recept": [["egg", "hen"]]
    },
    {
        "id": 97,
        "class": "humidity",
        "text": "Влажность",
        "recept": [["air", "water"]]
    },
    {
        "id": 98,
        "class": "mold",
        "text": "Плесень",
        "recept": [["humidity", "bacteria"]]
    },


];
