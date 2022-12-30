import { Film, FilmCharactersConnection, FilmCharactersEdge, FilmPlanetsConnection, FilmPlanetsEdge, FilmSpeciesConnection, FilmSpeciesEdge, FilmStarshipsConnection, FilmStarshipsEdge, FilmVehiclesConnection, FilmVehiclesEdge, FilmsConnection, FilmsEdge, Node, PageInfo, PeopleConnection, PeopleEdge, Person, PersonFilmsConnection, PersonFilmsEdge, PersonStarshipsConnection, PersonStarshipsEdge, PersonVehiclesConnection, PersonVehiclesEdge, Planet, PlanetFilmsConnection, PlanetFilmsEdge, PlanetResidentsConnection, PlanetResidentsEdge, PlanetsConnection, PlanetsEdge, Root, Species, SpeciesConnection, SpeciesEdge, SpeciesFilmsConnection, SpeciesFilmsEdge, SpeciesPeopleConnection, SpeciesPeopleEdge, Starship, StarshipFilmsConnection, StarshipFilmsEdge, StarshipPilotsConnection, StarshipPilotsEdge, StarshipsConnection, StarshipsEdge, Vehicle, VehicleFilmsConnection, VehicleFilmsEdge, VehiclePilotsConnection, VehiclePilotsEdge, VehiclesConnection, VehiclesEdge } from './generated-types';

export const aFilm = (overrides?: Partial<Film>): Film => {
    return {
        characterConnection: overrides && overrides.hasOwnProperty('characterConnection') ? overrides.characterConnection! : aFilmCharactersConnection(),
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'perspiciatis',
        director: overrides && overrides.hasOwnProperty('director') ? overrides.director! : 'hic',
        edited: overrides && overrides.hasOwnProperty('edited') ? overrides.edited! : 'veniam',
        episodeID: overrides && overrides.hasOwnProperty('episodeID') ? overrides.episodeID! : 8105,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '31f08d48-3bcf-4bb0-b554-92b4c18741c5',
        openingCrawl: overrides && overrides.hasOwnProperty('openingCrawl') ? overrides.openingCrawl! : 'qui',
        planetConnection: overrides && overrides.hasOwnProperty('planetConnection') ? overrides.planetConnection! : aFilmPlanetsConnection(),
        producers: overrides && overrides.hasOwnProperty('producers') ? overrides.producers! : ['consectetur'],
        releaseDate: overrides && overrides.hasOwnProperty('releaseDate') ? overrides.releaseDate! : 'qui',
        speciesConnection: overrides && overrides.hasOwnProperty('speciesConnection') ? overrides.speciesConnection! : aFilmSpeciesConnection(),
        starshipConnection: overrides && overrides.hasOwnProperty('starshipConnection') ? overrides.starshipConnection! : aFilmStarshipsConnection(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'laudantium',
        vehicleConnection: overrides && overrides.hasOwnProperty('vehicleConnection') ? overrides.vehicleConnection! : aFilmVehiclesConnection(),
    };
};

export const aFilmCharactersConnection = (overrides?: Partial<FilmCharactersConnection>): FilmCharactersConnection => {
    return {
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : [aPerson()],
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aFilmCharactersEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 435,
    };
};

export const aFilmCharactersEdge = (overrides?: Partial<FilmCharactersEdge>): FilmCharactersEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'cum',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPerson(),
    };
};

export const aFilmPlanetsConnection = (overrides?: Partial<FilmPlanetsConnection>): FilmPlanetsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aFilmPlanetsEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        planets: overrides && overrides.hasOwnProperty('planets') ? overrides.planets! : [aPlanet()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 6116,
    };
};

export const aFilmPlanetsEdge = (overrides?: Partial<FilmPlanetsEdge>): FilmPlanetsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'distinctio',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPlanet(),
    };
};

export const aFilmSpeciesConnection = (overrides?: Partial<FilmSpeciesConnection>): FilmSpeciesConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aFilmSpeciesEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : [aSpecies()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 754,
    };
};

export const aFilmSpeciesEdge = (overrides?: Partial<FilmSpeciesEdge>): FilmSpeciesEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'non',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aSpecies(),
    };
};

export const aFilmStarshipsConnection = (overrides?: Partial<FilmStarshipsConnection>): FilmStarshipsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aFilmStarshipsEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        starships: overrides && overrides.hasOwnProperty('starships') ? overrides.starships! : [aStarship()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 5880,
    };
};

export const aFilmStarshipsEdge = (overrides?: Partial<FilmStarshipsEdge>): FilmStarshipsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'autem',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aStarship(),
    };
};

export const aFilmVehiclesConnection = (overrides?: Partial<FilmVehiclesConnection>): FilmVehiclesConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aFilmVehiclesEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 1112,
        vehicles: overrides && overrides.hasOwnProperty('vehicles') ? overrides.vehicles! : [aVehicle()],
    };
};

export const aFilmVehiclesEdge = (overrides?: Partial<FilmVehiclesEdge>): FilmVehiclesEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'autem',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aVehicle(),
    };
};

export const aFilmsConnection = (overrides?: Partial<FilmsConnection>): FilmsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aFilmsEdge()],
        films: overrides && overrides.hasOwnProperty('films') ? overrides.films! : [aFilm()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 2889,
    };
};

export const aFilmsEdge = (overrides?: Partial<FilmsEdge>): FilmsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'qui',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aFilm(),
    };
};

export const aNode = (overrides?: Partial<Node>): Node => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '95bb2f34-6c86-495f-bfdc-f25b025cdba5',
    };
};

export const aPageInfo = (overrides?: Partial<PageInfo>): PageInfo => {
    return {
        endCursor: overrides && overrides.hasOwnProperty('endCursor') ? overrides.endCursor! : 'id',
        hasNextPage: overrides && overrides.hasOwnProperty('hasNextPage') ? overrides.hasNextPage! : true,
        hasPreviousPage: overrides && overrides.hasOwnProperty('hasPreviousPage') ? overrides.hasPreviousPage! : false,
        startCursor: overrides && overrides.hasOwnProperty('startCursor') ? overrides.startCursor! : 'eum',
    };
};

export const aPeopleConnection = (overrides?: Partial<PeopleConnection>): PeopleConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aPeopleEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        people: overrides && overrides.hasOwnProperty('people') ? overrides.people! : [aPerson()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 7067,
    };
};

export const aPeopleEdge = (overrides?: Partial<PeopleEdge>): PeopleEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'illo',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPerson(),
    };
};

export const aPerson = (overrides?: Partial<Person>): Person => {
    return {
        birthYear: overrides && overrides.hasOwnProperty('birthYear') ? overrides.birthYear! : 'sed',
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'eligendi',
        edited: overrides && overrides.hasOwnProperty('edited') ? overrides.edited! : 'vel',
        eyeColor: overrides && overrides.hasOwnProperty('eyeColor') ? overrides.eyeColor! : 'aspernatur',
        filmConnection: overrides && overrides.hasOwnProperty('filmConnection') ? overrides.filmConnection! : aPersonFilmsConnection(),
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'consequuntur',
        hairColor: overrides && overrides.hasOwnProperty('hairColor') ? overrides.hairColor! : 'officiis',
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 1994,
        homeworld: overrides && overrides.hasOwnProperty('homeworld') ? overrides.homeworld! : aPlanet(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '65c296aa-c3f1-451e-9d3b-2950db9db9bb',
        mass: overrides && overrides.hasOwnProperty('mass') ? overrides.mass! : 3.86,
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'et',
        skinColor: overrides && overrides.hasOwnProperty('skinColor') ? overrides.skinColor! : 'ratione',
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : aSpecies(),
        starshipConnection: overrides && overrides.hasOwnProperty('starshipConnection') ? overrides.starshipConnection! : aPersonStarshipsConnection(),
        vehicleConnection: overrides && overrides.hasOwnProperty('vehicleConnection') ? overrides.vehicleConnection! : aPersonVehiclesConnection(),
    };
};

export const aPersonFilmsConnection = (overrides?: Partial<PersonFilmsConnection>): PersonFilmsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aPersonFilmsEdge()],
        films: overrides && overrides.hasOwnProperty('films') ? overrides.films! : [aFilm()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 2297,
    };
};

export const aPersonFilmsEdge = (overrides?: Partial<PersonFilmsEdge>): PersonFilmsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'officia',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aFilm(),
    };
};

export const aPersonStarshipsConnection = (overrides?: Partial<PersonStarshipsConnection>): PersonStarshipsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aPersonStarshipsEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        starships: overrides && overrides.hasOwnProperty('starships') ? overrides.starships! : [aStarship()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 159,
    };
};

export const aPersonStarshipsEdge = (overrides?: Partial<PersonStarshipsEdge>): PersonStarshipsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'voluptatibus',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aStarship(),
    };
};

export const aPersonVehiclesConnection = (overrides?: Partial<PersonVehiclesConnection>): PersonVehiclesConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aPersonVehiclesEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 1878,
        vehicles: overrides && overrides.hasOwnProperty('vehicles') ? overrides.vehicles! : [aVehicle()],
    };
};

export const aPersonVehiclesEdge = (overrides?: Partial<PersonVehiclesEdge>): PersonVehiclesEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'qui',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aVehicle(),
    };
};

export const aPlanet = (overrides?: Partial<Planet>): Planet => {
    return {
        climates: overrides && overrides.hasOwnProperty('climates') ? overrides.climates! : ['occaecati'],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'vero',
        diameter: overrides && overrides.hasOwnProperty('diameter') ? overrides.diameter! : 3466,
        edited: overrides && overrides.hasOwnProperty('edited') ? overrides.edited! : 'quo',
        filmConnection: overrides && overrides.hasOwnProperty('filmConnection') ? overrides.filmConnection! : aPlanetFilmsConnection(),
        gravity: overrides && overrides.hasOwnProperty('gravity') ? overrides.gravity! : 'deleniti',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b2ee0cbb-1ba9-43e2-8dab-9e265b803ede',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'vero',
        orbitalPeriod: overrides && overrides.hasOwnProperty('orbitalPeriod') ? overrides.orbitalPeriod! : 3391,
        population: overrides && overrides.hasOwnProperty('population') ? overrides.population! : 2.76,
        residentConnection: overrides && overrides.hasOwnProperty('residentConnection') ? overrides.residentConnection! : aPlanetResidentsConnection(),
        rotationPeriod: overrides && overrides.hasOwnProperty('rotationPeriod') ? overrides.rotationPeriod! : 5612,
        surfaceWater: overrides && overrides.hasOwnProperty('surfaceWater') ? overrides.surfaceWater! : 9.56,
        terrains: overrides && overrides.hasOwnProperty('terrains') ? overrides.terrains! : ['deserunt'],
    };
};

export const aPlanetFilmsConnection = (overrides?: Partial<PlanetFilmsConnection>): PlanetFilmsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aPlanetFilmsEdge()],
        films: overrides && overrides.hasOwnProperty('films') ? overrides.films! : [aFilm()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 4259,
    };
};

export const aPlanetFilmsEdge = (overrides?: Partial<PlanetFilmsEdge>): PlanetFilmsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'dolore',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aFilm(),
    };
};

export const aPlanetResidentsConnection = (overrides?: Partial<PlanetResidentsConnection>): PlanetResidentsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aPlanetResidentsEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        residents: overrides && overrides.hasOwnProperty('residents') ? overrides.residents! : [aPerson()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 3698,
    };
};

export const aPlanetResidentsEdge = (overrides?: Partial<PlanetResidentsEdge>): PlanetResidentsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'aut',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPerson(),
    };
};

export const aPlanetsConnection = (overrides?: Partial<PlanetsConnection>): PlanetsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aPlanetsEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        planets: overrides && overrides.hasOwnProperty('planets') ? overrides.planets! : [aPlanet()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 4049,
    };
};

export const aPlanetsEdge = (overrides?: Partial<PlanetsEdge>): PlanetsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'sed',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPlanet(),
    };
};

export const aRoot = (overrides?: Partial<Root>): Root => {
    return {
        allFilms: overrides && overrides.hasOwnProperty('allFilms') ? overrides.allFilms! : aFilmsConnection(),
        allPeople: overrides && overrides.hasOwnProperty('allPeople') ? overrides.allPeople! : aPeopleConnection(),
        allPlanets: overrides && overrides.hasOwnProperty('allPlanets') ? overrides.allPlanets! : aPlanetsConnection(),
        allSpecies: overrides && overrides.hasOwnProperty('allSpecies') ? overrides.allSpecies! : aSpeciesConnection(),
        allStarships: overrides && overrides.hasOwnProperty('allStarships') ? overrides.allStarships! : aStarshipsConnection(),
        allVehicles: overrides && overrides.hasOwnProperty('allVehicles') ? overrides.allVehicles! : aVehiclesConnection(),
        film: overrides && overrides.hasOwnProperty('film') ? overrides.film! : aFilm(),
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aNode(),
        person: overrides && overrides.hasOwnProperty('person') ? overrides.person! : aPerson(),
        planet: overrides && overrides.hasOwnProperty('planet') ? overrides.planet! : aPlanet(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : aSpecies(),
        starship: overrides && overrides.hasOwnProperty('starship') ? overrides.starship! : aStarship(),
        vehicle: overrides && overrides.hasOwnProperty('vehicle') ? overrides.vehicle! : aVehicle(),
    };
};

export const aSpecies = (overrides?: Partial<Species>): Species => {
    return {
        averageHeight: overrides && overrides.hasOwnProperty('averageHeight') ? overrides.averageHeight! : 1.21,
        averageLifespan: overrides && overrides.hasOwnProperty('averageLifespan') ? overrides.averageLifespan! : 3759,
        classification: overrides && overrides.hasOwnProperty('classification') ? overrides.classification! : 'illum',
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'libero',
        designation: overrides && overrides.hasOwnProperty('designation') ? overrides.designation! : 'id',
        edited: overrides && overrides.hasOwnProperty('edited') ? overrides.edited! : 'laborum',
        eyeColors: overrides && overrides.hasOwnProperty('eyeColors') ? overrides.eyeColors! : ['rerum'],
        filmConnection: overrides && overrides.hasOwnProperty('filmConnection') ? overrides.filmConnection! : aSpeciesFilmsConnection(),
        hairColors: overrides && overrides.hasOwnProperty('hairColors') ? overrides.hairColors! : ['voluptatum'],
        homeworld: overrides && overrides.hasOwnProperty('homeworld') ? overrides.homeworld! : aPlanet(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '44727cbb-c582-4aef-b806-1c6099a88903',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'delectus',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quo',
        personConnection: overrides && overrides.hasOwnProperty('personConnection') ? overrides.personConnection! : aSpeciesPeopleConnection(),
        skinColors: overrides && overrides.hasOwnProperty('skinColors') ? overrides.skinColors! : ['quia'],
    };
};

export const aSpeciesConnection = (overrides?: Partial<SpeciesConnection>): SpeciesConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aSpeciesEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : [aSpecies()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 2032,
    };
};

export const aSpeciesEdge = (overrides?: Partial<SpeciesEdge>): SpeciesEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'hic',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aSpecies(),
    };
};

export const aSpeciesFilmsConnection = (overrides?: Partial<SpeciesFilmsConnection>): SpeciesFilmsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aSpeciesFilmsEdge()],
        films: overrides && overrides.hasOwnProperty('films') ? overrides.films! : [aFilm()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 5484,
    };
};

export const aSpeciesFilmsEdge = (overrides?: Partial<SpeciesFilmsEdge>): SpeciesFilmsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'minus',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aFilm(),
    };
};

export const aSpeciesPeopleConnection = (overrides?: Partial<SpeciesPeopleConnection>): SpeciesPeopleConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aSpeciesPeopleEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        people: overrides && overrides.hasOwnProperty('people') ? overrides.people! : [aPerson()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 609,
    };
};

export const aSpeciesPeopleEdge = (overrides?: Partial<SpeciesPeopleEdge>): SpeciesPeopleEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'maxime',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPerson(),
    };
};

export const aStarship = (overrides?: Partial<Starship>): Starship => {
    return {
        MGLT: overrides && overrides.hasOwnProperty('MGLT') ? overrides.MGLT! : 9819,
        cargoCapacity: overrides && overrides.hasOwnProperty('cargoCapacity') ? overrides.cargoCapacity! : 5.62,
        consumables: overrides && overrides.hasOwnProperty('consumables') ? overrides.consumables! : 'ipsum',
        costInCredits: overrides && overrides.hasOwnProperty('costInCredits') ? overrides.costInCredits! : 2.98,
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'assumenda',
        crew: overrides && overrides.hasOwnProperty('crew') ? overrides.crew! : 'sint',
        edited: overrides && overrides.hasOwnProperty('edited') ? overrides.edited! : 'blanditiis',
        filmConnection: overrides && overrides.hasOwnProperty('filmConnection') ? overrides.filmConnection! : aStarshipFilmsConnection(),
        hyperdriveRating: overrides && overrides.hasOwnProperty('hyperdriveRating') ? overrides.hyperdriveRating! : 5.64,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '10ab73b1-5bcc-487b-8430-63114a47f866',
        length: overrides && overrides.hasOwnProperty('length') ? overrides.length! : 2.57,
        manufacturers: overrides && overrides.hasOwnProperty('manufacturers') ? overrides.manufacturers! : ['enim'],
        maxAtmospheringSpeed: overrides && overrides.hasOwnProperty('maxAtmospheringSpeed') ? overrides.maxAtmospheringSpeed! : 5715,
        model: overrides && overrides.hasOwnProperty('model') ? overrides.model! : 'quo',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'veniam',
        passengers: overrides && overrides.hasOwnProperty('passengers') ? overrides.passengers! : 'harum',
        pilotConnection: overrides && overrides.hasOwnProperty('pilotConnection') ? overrides.pilotConnection! : aStarshipPilotsConnection(),
        starshipClass: overrides && overrides.hasOwnProperty('starshipClass') ? overrides.starshipClass! : 'maiores',
    };
};

export const aStarshipFilmsConnection = (overrides?: Partial<StarshipFilmsConnection>): StarshipFilmsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aStarshipFilmsEdge()],
        films: overrides && overrides.hasOwnProperty('films') ? overrides.films! : [aFilm()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 2812,
    };
};

export const aStarshipFilmsEdge = (overrides?: Partial<StarshipFilmsEdge>): StarshipFilmsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'hic',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aFilm(),
    };
};

export const aStarshipPilotsConnection = (overrides?: Partial<StarshipPilotsConnection>): StarshipPilotsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aStarshipPilotsEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        pilots: overrides && overrides.hasOwnProperty('pilots') ? overrides.pilots! : [aPerson()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 4700,
    };
};

export const aStarshipPilotsEdge = (overrides?: Partial<StarshipPilotsEdge>): StarshipPilotsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'similique',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPerson(),
    };
};

export const aStarshipsConnection = (overrides?: Partial<StarshipsConnection>): StarshipsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aStarshipsEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        starships: overrides && overrides.hasOwnProperty('starships') ? overrides.starships! : [aStarship()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 797,
    };
};

export const aStarshipsEdge = (overrides?: Partial<StarshipsEdge>): StarshipsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'est',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aStarship(),
    };
};

export const aVehicle = (overrides?: Partial<Vehicle>): Vehicle => {
    return {
        cargoCapacity: overrides && overrides.hasOwnProperty('cargoCapacity') ? overrides.cargoCapacity! : 5.02,
        consumables: overrides && overrides.hasOwnProperty('consumables') ? overrides.consumables! : 'quia',
        costInCredits: overrides && overrides.hasOwnProperty('costInCredits') ? overrides.costInCredits! : 8.91,
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'eligendi',
        crew: overrides && overrides.hasOwnProperty('crew') ? overrides.crew! : 'saepe',
        edited: overrides && overrides.hasOwnProperty('edited') ? overrides.edited! : 'quam',
        filmConnection: overrides && overrides.hasOwnProperty('filmConnection') ? overrides.filmConnection! : aVehicleFilmsConnection(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f658bffe-418b-477b-8e4a-d37a09eb6529',
        length: overrides && overrides.hasOwnProperty('length') ? overrides.length! : 0.86,
        manufacturers: overrides && overrides.hasOwnProperty('manufacturers') ? overrides.manufacturers! : ['repudiandae'],
        maxAtmospheringSpeed: overrides && overrides.hasOwnProperty('maxAtmospheringSpeed') ? overrides.maxAtmospheringSpeed! : 4346,
        model: overrides && overrides.hasOwnProperty('model') ? overrides.model! : 'facilis',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'dolores',
        passengers: overrides && overrides.hasOwnProperty('passengers') ? overrides.passengers! : 'nam',
        pilotConnection: overrides && overrides.hasOwnProperty('pilotConnection') ? overrides.pilotConnection! : aVehiclePilotsConnection(),
        vehicleClass: overrides && overrides.hasOwnProperty('vehicleClass') ? overrides.vehicleClass! : 'similique',
    };
};

export const aVehicleFilmsConnection = (overrides?: Partial<VehicleFilmsConnection>): VehicleFilmsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aVehicleFilmsEdge()],
        films: overrides && overrides.hasOwnProperty('films') ? overrides.films! : [aFilm()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 12,
    };
};

export const aVehicleFilmsEdge = (overrides?: Partial<VehicleFilmsEdge>): VehicleFilmsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'at',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aFilm(),
    };
};

export const aVehiclePilotsConnection = (overrides?: Partial<VehiclePilotsConnection>): VehiclePilotsConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aVehiclePilotsEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        pilots: overrides && overrides.hasOwnProperty('pilots') ? overrides.pilots! : [aPerson()],
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 1357,
    };
};

export const aVehiclePilotsEdge = (overrides?: Partial<VehiclePilotsEdge>): VehiclePilotsEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'quia',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aPerson(),
    };
};

export const aVehiclesConnection = (overrides?: Partial<VehiclesConnection>): VehiclesConnection => {
    return {
        edges: overrides && overrides.hasOwnProperty('edges') ? overrides.edges! : [aVehiclesEdge()],
        pageInfo: overrides && overrides.hasOwnProperty('pageInfo') ? overrides.pageInfo! : aPageInfo(),
        totalCount: overrides && overrides.hasOwnProperty('totalCount') ? overrides.totalCount! : 5908,
        vehicles: overrides && overrides.hasOwnProperty('vehicles') ? overrides.vehicles! : [aVehicle()],
    };
};

export const aVehiclesEdge = (overrides?: Partial<VehiclesEdge>): VehiclesEdge => {
    return {
        cursor: overrides && overrides.hasOwnProperty('cursor') ? overrides.cursor! : 'a',
        node: overrides && overrides.hasOwnProperty('node') ? overrides.node! : aVehicle(),
    };
};
