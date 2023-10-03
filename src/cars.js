const cars = [
  {
    "average": "20",
    "make": "TOYOTA",
    "year": "2011",
    "model": "4RUNNER",
    "engine": "U",
    "fuelType": "petrol",
    "sittingCapacity": "4",
    "rentPrice": "400",
    "type": "Automatic",
    "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/toyota_pxswix.jpg"
    
  },
  {
    "average": "25",
    "make": "HONDA",
    "year": "2015",
    "model": "CIVIC",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "450",
    "type": "Manual",
    "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/honda_uw9jhr.jpg"
  },
  {
    "average": "18",
    "make": "FORD",
    "year": "2010",
    "model": "MUSTANG",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "4",
    "rentPrice": "500",
    "type": "Automatic",
    "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331377/ford_obyojt.jpg"
    
  },
  {
    "average": "22",
    "make": "CHEVROLET",
    "year": "2018",
    "model": "CRUZE",
    "engine": "I",
    "fuelType": "diesel",
    "sittingCapacity": "5",
    "rentPrice": "550",
    "type": "Manual",
    "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
   
  },
  {
    "average": "19",
    "make": "NISSAN",
    "year": "2013",
    "model": "ALTIMA",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "420",
    "type": "Automatic",
    "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331377/nissan_aetbp3.jpg"
    
  },
  {
    "average": "24",
    "make": "HYUNDAI",
    "year": "2016",
    "model": "SONATA",
    "engine": "I",
    "fuelType": "diesel",
    "sittingCapacity": "5",
    "rentPrice": "470",
    "type": "Automatic",
    "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331376/hyundai_zd5ty1.jpg"
    
  },
  {
    "average": "21",
    "make": "KIA",
    "year": "2017",
    "model": "SPORTAGE",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "480",
    "type": "Manual"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333067/kia_uqkqhr.jpg"
  },
  {
    "average": "23",
    "make": "VOLKSWAGEN",
    "year": "2014",
    "model": "JETTA",
    "engine": "I",
    "fuelType": "diesel",
    "sittingCapacity": "5",
    "rentPrice": "490",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333067/volksWagen_nfihod.jpg"
  },
  {
    "average": "27",
    "make": "BMW",
    "year": "2019",
    "model": "3 SERIES",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "600",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333066/BMW_vvt5ve.jpg"
  },
  {
    "average": "16",
    "make": "MERCEDES-BENZ",
    "year": "2012",
    "model": "C-CLASS",
    "engine": "V",
    "fuelType": "diesel",
    "sittingCapacity": "4",
    "rentPrice": "550",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333067/MERCEDES-BENZ_i2arty.jpg"
  },
  {
    "average": "26",
    "make": "AUDI",
    "year": "2017",
    "model": "A4",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "580",
    "type": "Manual"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333066/AUDI_kedm7j.jpg"
  },
  {
    "average": "22",
    "make": "LEXUS",
    "year": "2018",
    "model": "RX",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "650",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333124/LEXUS_k0mctk.jpg"
  },
  {
    "average": "18",
    "make": "JEEP",
    "year": "2015",
    "model": "WRANGLER",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "4",
    "rentPrice": "520",
    "type": "Manual"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333096/JEEP_vlyc3m.jpg"
  },
  {
    "average": "20",
    "make": "SUBARU",
    "year": "2016",
    "model": "OUTBACK",
    "engine": "H",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "450",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333098/SUBARU_th30ca.jpg"
  },
  {
    "average": "19",
    "make": "TESLA",
    "year": "2019",
    "model": "MODEL S",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "700",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333097/TESLA_dh9gol.jpg"
  },
  {
    "average": "23",
    "make": "PORSCHE",
    "year": "2020",
    "model": "CAYENNE",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "800",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333098/PORSCHE_c4b0lr.jpg"
  },
  {
    "average": "17",
    "make": "LAND ROVER",
    "year": "2014",
    "model": "RANGE ROVER",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "750",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333098/LAND_ROVER_ud2jzn.jpg"
  },
  {
    "average": "21",
    "make": "JAGUAR",
    "year": "2018",
    "model": "XE",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "620",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696333095/JAGUAR_yznzfr.jpg"
  },
  {
    "average": "25",
    "make": "FERRARI",
    "year": "2021",
    "model": "488 GTB",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "2",
    "rentPrice": "1200",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "18",
    "make": "ASTON MARTIN",
    "year": "2017",
    "model": "DB11",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "2",
    "rentPrice": "1100",
    "type": "Manual"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "22",
    "make": "LAMBORGHINI",
    "year": "2020",
    "model": "HURACAN",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "2",
    "rentPrice": "1500",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "14",
    "make": "ROLLS-ROYCE",
    "year": "2019",
    "model": "PHANTOM",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "4",
    "rentPrice": "2000",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "30",
    "make": "BUGATTI",
    "year": "2022",
    "model": "CHIRON",
    "engine": "W",
    "fuelType": "petrol",
    "sittingCapacity": "2",
    "rentPrice": "2500",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "18",
    "make": "KOENIGSEGG",
    "year": "2021",
    "model": "JESKO",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "2",
    "rentPrice": "2200",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "25",
    "make": "MCLAREN",
    "year": "2022",
    "model": "720S",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "2",
    "rentPrice": "1800",
    "type": "Manual"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "16",
    "make": "BENTLEY",
    "year": "2020",
    "model": "CONTINENTAL GT",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "4",
    "rentPrice": "1600",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "24",
    "make": "MASERATI",
    "year": "2021",
    "model": "LEVANTE",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "1100",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "19",
    "make": "ALFA ROMEO",
    "year": "2022",
    "model": "GIULIA",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "950",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "26",
    "make": "LOTUS",
    "year": "2021",
    "model": "ELISE",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "2",
    "rentPrice": "800",
    "type": "Manual"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "22",
    "make": "TESLA",
    "year": "2022",
    "model": "MODEL 3",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "700",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "18",
    "make": "RIVIAN",
    "year": "2023",
    "model": "R1T",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "800",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "24",
    "make": "LUCID MOTORS",
    "year": "2023",
    "model": "AIR",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "750",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "19",
    "make": "NIKOLA",
    "year": "2022",
    "model": "BADGER",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "700",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "23",
    "make": "FISKER",
    "year": "2022",
    "model": "OCEAN",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "650",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "20",
    "make": "KARMA",
    "year": "2022",
    "model": "REVERO",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "4",
    "rentPrice": "600",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "22",
    "make": "CANOO",
    "year": "2023",
    "model": "MPDV",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "7",
    "rentPrice": "650",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "25",
    "make": "FARADAY FUTURE",
    "year": "2023",
    "model": "FF 91",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "700",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "18",
    "make": "RIMAC",
    "year": "2023",
    "model": "C_TWO",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "2",
    "rentPrice": "850",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "28",
    "make": "KARLSSON",
    "year": "2022",
    "model": "K-28",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "2",
    "rentPrice": "900",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "22",
    "make": "REVA",
    "year": "2022",
    "model": "I",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "4",
    "rentPrice": "750",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "24",
    "make": "POLARIS",
    "year": "2023",
    "model": "RANGER EV",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "2",
    "rentPrice": "800",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "16",
    "make": "BENTLEY",
    "year": "2020",
    "model": "CONTINENTAL GT",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "4",
    "rentPrice": "1600",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "24",
    "make": "MASERATI",
    "year": "2021",
    "model": "LEVANTE",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "1100",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "19",
    "make": "ALFA ROMEO",
    "year": "2022",
    "model": "GIULIA",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "950",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "26",
    "make": "LOTUS",
    "year": "2021",
    "model": "ELISE",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "2",
    "rentPrice": "800",
    "type": "Manual"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "22",
    "make": "TESLA",
    "year": "2022",
    "model": "MODEL 3",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "700",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "18",
    "make": "RIVIAN",
    "year": "2023",
    "model": "R1T",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "800",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "24",
    "make": "LUCID MOTORS",
    "year": "2023",
    "model": "AIR",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "750",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "19",
    "make": "NIKOLA",
    "year": "2022",
    "model": "BADGER",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "700",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "23",
    "make": "FISKER",
    "year": "2022",
    "model": "OCEAN",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "650",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "20",
    "make": "KARMA",
    "year": "2022",
    "model": "REVERO",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "4",
    "rentPrice": "600",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "22",
    "make": "CANOO",
    "year": "2023",
    "model": "MPDV",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "7",
    "rentPrice": "650",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "25",
    "make": "FARADAY FUTURE",
    "year": "2023",
    "model": "FF 91",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "5",
    "rentPrice": "700",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "18",
    "make": "RIMAC",
    "year": "2023",
    "model": "C_TWO",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "2",
    "rentPrice": "850",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "28",
    "make": "KARLSSON",
    "year": "2022",
    "model": "K-28",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "2",
    "rentPrice": "900",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "22",
    "make": "REVA",
    "year": "2022",
    "model": "I",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "4",
    "rentPrice": "750",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "24",
    "make": "POLARIS",
    "year": "2023",
    "model": "RANGER EV",
    "engine": "E",
    "fuelType": "electric",
    "sittingCapacity": "2",
    "rentPrice": "800",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "16",
    "make": "BENTLEY",
    "year": "2020",
    "model": "CONTINENTAL GT",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "4",
    "rentPrice": "1600",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "24",
    "make": "MASERATI",
    "year": "2021",
    "model": "LEVANTE",
    "engine": "V",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "1100",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
  {
    "average": "19",
    "make": "ALFA ROMEO",
    "year": "2022",
    "model": "GIULIA",
    "engine": "I",
    "fuelType": "petrol",
    "sittingCapacity": "5",
    "rentPrice": "950",
    "type": "Automatic"
    , "imageURL": "https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg"
  },
]

export default cars;