import { createServer, Model } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.logging = false;
    this.get("/data", () => data);
  },
});

let data = {
  generated_at: "2023-08-25T16:35:17+00:00",
  rankings: [
    {
      type_id: 8,
      name: "pound_for_pound",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:253371",
            name: "Jones, Jon",
            abbreviation: "JON",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: -1,
          competitor: {
            id: "sr:competitor:290262",
            name: "Volkanovski, Alex",
            abbreviation: "VOL",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:251835",
            name: "Makhachev, Islam",
            abbreviation: "MAK",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:256121",
            name: "Edwards, Leon",
            abbreviation: "EDW",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:410485",
            name: "Adesanya, Israel",
            abbreviation: "ADE",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 1,
          competitor: {
            id: "sr:competitor:542119",
            name: "Oliveira, Charles",
            abbreviation: "OLI",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 1,
          competitor: {
            id: "sr:competitor:273539",
            name: "Usman, Kamaru",
            abbreviation: "USM",
            gender: "male",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:397240",
            name: "O'Malley, Sean",
            abbreviation: "OMA",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: -3,
          competitor: {
            id: "sr:competitor:260623",
            name: "Sterling, Aljamain",
            abbreviation: "STE",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: -1,
          competitor: {
            id: "sr:competitor:312032",
            name: "Pantoja, Alexandre",
            abbreviation: "PAN",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: -1,
          competitor: {
            id: "sr:competitor:837536",
            name: "Pereira, Alex",
            abbreviation: "PER",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: -2,
          competitor: {
            id: "sr:competitor:251853",
            name: "Prochazka, Jiri",
            abbreviation: "PRO",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: -1,
          competitor: {
            id: "sr:competitor:237652",
            name: "Holloway, Max",
            abbreviation: "HOL",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: -1,
          competitor: {
            id: "sr:competitor:351762",
            name: "Gaethje, Justin",
            abbreviation: "GAE",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: -1,
          competitor: {
            id: "sr:competitor:608564",
            name: "Hill, Jamahal",
            abbreviation: "HIL",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 9,
      name: "flyweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:312032",
            name: "Pantoja, Alexandre",
            abbreviation: "PAN",
            gender: "male",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:288695",
            name: "Moreno, Brandon",
            abbreviation: "MOR",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:340506",
            name: "Figueiredo, Deiveson",
            abbreviation: "FIG",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:441656",
            name: "Albazi, Amir",
            abbreviation: "ALB",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:715231",
            name: "Royval, Brandon",
            abbreviation: "ROY",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:511412",
            name: "Kara-France, Kai",
            abbreviation: "KAR",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:269227",
            name: "Nicolau, Matheus",
            abbreviation: "NIC",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:399179",
            name: "Perez, Alex",
            abbreviation: "PER",
            gender: "male",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:303100",
            name: "Schnell, Matt",
            abbreviation: "SCH",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:303538",
            name: "Elliott, Tim",
            abbreviation: "ELL",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:384992",
            name: "Kape, Manel",
            abbreviation: "KAP",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:757850",
            name: "Levy, Natan",
            abbreviation: "LEV",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:522114",
            name: "Mudaerji, Su",
            abbreviation: "MUD",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:723645",
            name: "Ulanbekov, Tagir",
            abbreviation: "ULA",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:909471",
            name: "Erceg, Steve",
            abbreviation: "ERC",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:732359",
            name: "Durden, Cody",
            abbreviation: "DUR",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 10,
      name: "bantamweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:397240",
            name: "O'Malley, Sean",
            abbreviation: "OMA",
            gender: "male",
          },
        },
        {
          rank: 1,
          movement: -1,
          competitor: {
            id: "sr:competitor:260623",
            name: "Sterling, Aljamain",
            abbreviation: "STE",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: -1,
          competitor: {
            id: "sr:competitor:399183",
            name: "Dvalishvili, Merab",
            abbreviation: "DVA",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:253385",
            name: "Cejudo, Henry",
            abbreviation: "CEJ",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:464141",
            name: "Sandhagen, Cory",
            abbreviation: "SAN",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:542169",
            name: "Yan, Petr",
            abbreviation: "YAN",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:245495",
            name: "Vera, Marlon",
            abbreviation: "VER",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:257361",
            name: "Font, Rob",
            abbreviation: "FON",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 1,
          competitor: {
            id: "sr:competitor:449143",
            name: "Song, Yadong",
            abbreviation: "SON",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:240686",
            name: "Cruz, Dominick",
            abbreviation: "CRU",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:542113",
            name: "Munhoz, Pedro",
            abbreviation: "MUN",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:497764",
            name: "Nurmagomedov, Umar",
            abbreviation: "NUR",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:433424",
            name: "Simon, Ricky",
            abbreviation: "SIM",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:511658",
            name: "Martinez, Jonathan",
            abbreviation: "MAR",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:733463",
            name: "Yanez, Adrian",
            abbreviation: "YAN",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:542065",
            name: "Gutierrez, Chris",
            abbreviation: "GUT",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 11,
      name: "featherweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:290262",
            name: "Volkanovski, Alex",
            abbreviation: "VOL",
            gender: "male",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:237652",
            name: "Holloway, Max",
            abbreviation: "HOL",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:253381",
            name: "Rodriguez, Yair",
            abbreviation: "ROD",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:237692",
            name: "Ortega, Brian",
            abbreviation: "ORT",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:245447",
            name: "Allen, Arnold",
            abbreviation: "ALL",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:750503",
            name: "Topuria, Ilia",
            abbreviation: "TOP",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:256285",
            name: "Emmett, Josh",
            abbreviation: "EMM",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:361988",
            name: "Kattar, Calvin",
            abbreviation: "KAT",
            gender: "male",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:312937",
            name: "Jung, Chan Sung",
            abbreviation: "JUN",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:449131",
            name: "Chikadze, Giga",
            abbreviation: "CHI",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:567139",
            name: "Evloev, Movsar",
            abbreviation: "EVL",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:464153",
            name: "Mitchell, Bryce",
            abbreviation: "MIT",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:463613",
            name: "Yusuff, Sodiq",
            abbreviation: "YUS",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:539711",
            name: "Ige, Dan",
            abbreviation: "IGE",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:237622",
            name: "Barboza, Edson",
            abbreviation: "BAR",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:261809",
            name: "Caceres, Alex",
            abbreviation: "CAC",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 12,
      name: "lightweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:251835",
            name: "Makhachev, Islam",
            abbreviation: "MAK",
            gender: "male",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:542119",
            name: "Oliveira, Charles",
            abbreviation: "OLI",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:351762",
            name: "Gaethje, Justin",
            abbreviation: "GAE",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:261799",
            name: "Poirier, Dustin",
            abbreviation: "POI",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:250863",
            name: "Dariush, Beneil",
            abbreviation: "DAR",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:266465",
            name: "Chandler, Michael",
            abbreviation: "CHA",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:511494",
            name: "Fiziev, Rafael",
            abbreviation: "FIZ",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:386466",
            name: "Gamrot, Mateusz",
            abbreviation: "GAM",
            gender: "male",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:567145",
            name: "Tsarukyan, Arman",
            abbreviation: "TSA",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:248591",
            name: "Hooker, Daniel",
            abbreviation: "HOO",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: 1,
          competitor: {
            id: "sr:competitor:511478",
            name: "Dawson, Grant",
            abbreviation: "DAW",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: -1,
          competitor: {
            id: "sr:competitor:237634",
            name: "Dos Anjos, Rafael",
            abbreviation: "DOS",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:459443",
            name: "Turner, Jalin",
            abbreviation: "TUR",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:257367",
            name: "Moicano, Renato",
            abbreviation: "MOI",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:542057",
            name: "Frevola, Matt",
            abbreviation: "FRE",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:413417",
            name: "Ferreira, Diego",
            abbreviation: "FER",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 13,
      name: "welterweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:256121",
            name: "Edwards, Leon",
            abbreviation: "EDW",
            gender: "male",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:273539",
            name: "Usman, Kamaru",
            abbreviation: "USM",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:265079",
            name: "Covington, Colby",
            abbreviation: "COV",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:267867",
            name: "Muhammad, Belal",
            abbreviation: "MUH",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:728833",
            name: "Chimaev, Khamzat",
            abbreviation: "CHI",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:267851",
            name: "Burns, Gilbert",
            abbreviation: "BUR",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:561032",
            name: "Rakhmonov, Shavkat",
            abbreviation: "RAK",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:265063",
            name: "Thompson, Stephen",
            abbreviation: "THO",
            gender: "male",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:413419",
            name: "Neal, Geoffrey",
            abbreviation: "NEA",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:579813",
            name: "Brady, Sean",
            abbreviation: "BRA",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:267863",
            name: "Luque, Vicente",
            abbreviation: "LUQ",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: 2,
          competitor: {
            id: "sr:competitor:594908",
            name: "Garry, Ian",
            abbreviation: "GAR",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: -1,
          competitor: {
            id: "sr:competitor:248605",
            name: "Magny, Neil",
            abbreviation: "MAG",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: -1,
          competitor: {
            id: "sr:competitor:542073",
            name: "Holland, Kevin",
            abbreviation: "HOL",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:830050",
            name: "Della Maddalena, Jack",
            abbreviation: "DEL",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:237628",
            name: "Chiesa, Michael",
            abbreviation: "CHI",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 14,
      name: "middleweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:410485",
            name: "Adesanya, Israel",
            abbreviation: "ADE",
            gender: "male",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:400461",
            name: "Du Plessis, Dricus",
            abbreviation: "DU",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:253377",
            name: "Whittaker, Robert",
            abbreviation: "WHI",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:250133",
            name: "Cannonier, Jared",
            abbreviation: "CAN",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:278713",
            name: "Vettori, Marvin",
            abbreviation: "VET",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:244108",
            name: "Strickland, Sean",
            abbreviation: "STR",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:320689",
            name: "Costa, Paulo Henrique",
            abbreviation: "COS",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:244098",
            name: "Brunson, Derek",
            abbreviation: "BRU",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 1,
          competitor: {
            id: "sr:competitor:577053",
            name: "Dolidze, Roman",
            abbreviation: "DOL",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:278283",
            name: "Hermansson, Jack",
            abbreviation: "HER",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:599908",
            name: "Allen, Brendan",
            abbreviation: "ALL",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:268061",
            name: "Gastelum, Kelvin",
            abbreviation: "GAS",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:742869",
            name: "Imavov, Nassourdine",
            abbreviation: "IMA",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:306502",
            name: "Craig, Paul",
            abbreviation: "CRA",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:449105",
            name: "Curtis, Chris",
            abbreviation: "CUR",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:613522",
            name: "Muniz, Andre",
            abbreviation: "MUN",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 15,
      name: "light_heavyweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:608564",
            name: "Hill, Jamahal",
            abbreviation: "HIL",
            gender: "male",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:251853",
            name: "Prochazka, Jiri",
            abbreviation: "PRO",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:419867",
            name: "Ankalaev, Magomed",
            abbreviation: "ANK",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:837536",
            name: "Pereira, Alex",
            abbreviation: "PER",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:250143",
            name: "Blachowicz, Jan",
            abbreviation: "BLA",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:372544",
            name: "Rakic, Aleksandar",
            abbreviation: "RAK",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:256105",
            name: "Krylov, Nikita",
            abbreviation: "KRY",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:511852",
            name: "Walker, Johnny",
            abbreviation: "WAL",
            gender: "male",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:244765",
            name: "Smith, Anthony",
            abbreviation: "SMI",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:542115",
            name: "Oezdemir, Volkan",
            abbreviation: "OEZ",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:449135",
            name: "Spann, Ryan",
            abbreviation: "SPA",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:301658",
            name: "Rountree, Khalil",
            abbreviation: "ROU",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:346976",
            name: "Murzakanov, Azamat",
            abbreviation: "MUR",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:347406",
            name: "Reyes, Dominick",
            abbreviation: "REY",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:449099",
            name: "Menifield, Alonzo",
            abbreviation: "MEN",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:733439",
            name: "Jacoby, Dustin",
            abbreviation: "JAC",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 16,
      name: "heavyweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:253371",
            name: "Jones, Jon",
            abbreviation: "JON",
            gender: "male",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:515358",
            name: "Pavlovich, Sergei",
            abbreviation: "PAV",
            gender: "male",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:595034",
            name: "Gane, Ciryl",
            abbreviation: "GAN",
            gender: "male",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:237684",
            name: "Miocic, Stipe",
            abbreviation: "MIO",
            gender: "male",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:545279",
            name: "Aspinall, Tom",
            abbreviation: "ASP",
            gender: "male",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:542009",
            name: "Blaydes, Curtis",
            abbreviation: "BLA",
            gender: "male",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:393034",
            name: "Tuivasa, Tai",
            abbreviation: "TUI",
            gender: "male",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:567207",
            name: "Spivak, Sergey",
            abbreviation: "SPI",
            gender: "male",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:542161",
            name: "Volkov, Alexander",
            abbreviation: "VOL",
            gender: "male",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:820044",
            name: "Almeida, Jailton",
            abbreviation: "ALM",
            gender: "male",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:542099",
            name: "Lewis, Derrick",
            abbreviation: "LEW",
            gender: "male",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:250173",
            name: "Tybura, Marcin",
            abbreviation: "TYB",
            gender: "male",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:542143",
            name: "Rozenstruik, Jairzinho",
            abbreviation: "ROZ",
            gender: "male",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:685123",
            name: "Romanov, Alexander",
            abbreviation: "ROM",
            gender: "male",
          },
        },
        {
          rank: 14,
          movement: 1,
          competitor: {
            id: "sr:competitor:254233",
            name: "de Lima, Marcos Rogerio",
            abbreviation: "DE",
            gender: "male",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:570415",
            name: "Nascimento Ferreira, Rodrigo",
            abbreviation: "NAS",
            gender: "male",
          },
        },
      ],
    },
    {
      type_id: 17,
      name: "womens_strawweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:542175",
            name: "Zhang, Weili",
            abbreviation: "ZHA",
            gender: "female",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:253353",
            name: "Esparza, Carla",
            abbreviation: "ESP",
            gender: "female",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:237730",
            name: "Namajunas, Rose",
            abbreviation: "NAM",
            gender: "female",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:395000",
            name: "Yan, Xiaonan",
            abbreviation: "YAN",
            gender: "female",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:542155",
            name: "Suarez, Tatiana",
            abbreviation: "SUA",
            gender: "female",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:355570",
            name: "Lemos, Amanda",
            abbreviation: "LEM",
            gender: "female",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:261805",
            name: "Andrade, Jessica",
            abbreviation: "AND",
            gender: "female",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:399229",
            name: "Jandiroba, Virna",
            abbreviation: "JAN",
            gender: "female",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:399233",
            name: "Dern, Mackenzie",
            abbreviation: "DER",
            gender: "female",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:501750",
            name: "Rodriguez, Marina",
            abbreviation: "ROD",
            gender: "female",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:237732",
            name: "Torres, Tecia",
            abbreviation: "TOR",
            gender: "female",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:510950",
            name: "Ribas, Amanda",
            abbreviation: "RIB",
            gender: "female",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:756397",
            name: "Pinheiro, Luana",
            abbreviation: "PIN",
            gender: "female",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:278301",
            name: "Waterson-Gomez, Michelle",
            abbreviation: "WAT",
            gender: "female",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:800738",
            name: "Ricci, Tabatha",
            abbreviation: "RIC",
            gender: "female",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:542071",
            name: "Hill, Angela",
            abbreviation: "HIL",
            gender: "female",
          },
        },
      ],
    },
    {
      type_id: 18,
      name: "womens_flyweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 0,
          movement: 0,
          competitor: {
            id: "sr:competitor:542061",
            name: "Grasso, Alexa",
            abbreviation: "GRA",
            gender: "female",
          },
        },
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:246053",
            name: "Shevchenko, Valentina",
            abbreviation: "SHE",
            gender: "female",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:598952",
            name: "Fiorot, Manon",
            abbreviation: "FIO",
            gender: "female",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:676033",
            name: "Blanchfield, Erin",
            abbreviation: "BLA",
            gender: "female",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:527141",
            name: "Santos, Taila",
            abbreviation: "SAN",
            gender: "female",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:269763",
            name: "Chookagian, Katlyn",
            abbreviation: "CHO",
            gender: "female",
          },
        },
        {
          rank: 6,
          movement: 0,
          competitor: {
            id: "sr:competitor:261805",
            name: "Andrade, Jessica",
            abbreviation: "AND",
            gender: "female",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:244066",
            name: "Murphy, Lauren",
            abbreviation: "MUR",
            gender: "female",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:462103",
            name: "Barber, Maycee",
            abbreviation: "BAR",
            gender: "female",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:542105",
            name: "Maia, Jennifer",
            abbreviation: "MAI",
            gender: "female",
          },
        },
        {
          rank: 10,
          movement: 0,
          competitor: {
            id: "sr:competitor:579365",
            name: "Araujo, Viviane",
            abbreviation: "ARA",
            gender: "female",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:510950",
            name: "Ribas, Amanda",
            abbreviation: "RIB",
            gender: "female",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:775996",
            name: "O'Neill, Casey",
            abbreviation: "ONE",
            gender: "female",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:890667",
            name: "Silva, Natalia",
            abbreviation: "SIL",
            gender: "female",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:372608",
            name: "Cortez, Tracy",
            abbreviation: "COR",
            gender: "female",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:847512",
            name: "Silva, Karine",
            abbreviation: "SIL",
            gender: "female",
          },
        },
      ],
    },
    {
      type_id: 19,
      name: "womens_bantamweight",
      year: 2023,
      week: 34,
      competitor_rankings: [
        {
          rank: 1,
          movement: 0,
          competitor: {
            id: "sr:competitor:268067",
            name: "Pena, Julianna",
            abbreviation: "PEN",
            gender: "female",
          },
        },
        {
          rank: 2,
          movement: 0,
          competitor: {
            id: "sr:competitor:542125",
            name: "Pennington, Raquel",
            abbreviation: "PEN",
            gender: "female",
          },
        },
        {
          rank: 3,
          movement: 0,
          competitor: {
            id: "sr:competitor:501754",
            name: "Bueno Silva, Mayra",
            abbreviation: "BUE",
            gender: "female",
          },
        },
        {
          rank: 4,
          movement: 0,
          competitor: {
            id: "sr:competitor:288703",
            name: "Vieira, Ketlen",
            abbreviation: "VIE",
            gender: "female",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:246047",
            name: "Holm, Holly",
            abbreviation: "HOL",
            gender: "female",
          },
        },
        {
          rank: 5,
          movement: 0,
          competitor: {
            id: "sr:competitor:541997",
            name: "Aldana, Irene",
            abbreviation: "ALD",
            gender: "female",
          },
        },
        {
          rank: 7,
          movement: 0,
          competitor: {
            id: "sr:competitor:542081",
            name: "Kianzad, Pannie",
            abbreviation: "KIA",
            gender: "female",
          },
        },
        {
          rank: 8,
          movement: 0,
          competitor: {
            id: "sr:competitor:542083",
            name: "Santos, Yana",
            abbreviation: "SAN",
            gender: "female",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:542017",
            name: "Chiasson, Macy",
            abbreviation: "CHI",
            gender: "female",
          },
        },
        {
          rank: 9,
          movement: 0,
          competitor: {
            id: "sr:competitor:618456",
            name: "Rosa, Karol",
            abbreviation: "ROS",
            gender: "female",
          },
        },
        {
          rank: 11,
          movement: 0,
          competitor: {
            id: "sr:competitor:669385",
            name: "Dumont Viana, Norma",
            abbreviation: "DUM",
            gender: "female",
          },
        },
        {
          rank: 12,
          movement: 0,
          competitor: {
            id: "sr:competitor:246049",
            name: "Tate, Miesha",
            abbreviation: "TAT",
            gender: "female",
          },
        },
        {
          rank: 13,
          movement: 0,
          competitor: {
            id: "sr:competitor:436924",
            name: "Avila, Julia",
            abbreviation: "AVI",
            gender: "female",
          },
        },
        {
          rank: 14,
          movement: 0,
          competitor: {
            id: "sr:competitor:786756",
            name: "Nunes, Josiane",
            abbreviation: "NUN",
            gender: "female",
          },
        },
        {
          rank: 15,
          movement: 0,
          competitor: {
            id: "sr:competitor:424927",
            name: "Chandler, Chelsea",
            abbreviation: "CHA",
            gender: "female",
          },
        },
      ],
    },
  ],
};
