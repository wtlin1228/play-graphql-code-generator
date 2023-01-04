import { z } from 'zod'
import { Film, FilmCharactersConnection, FilmCharactersEdge, FilmPlanetsConnection, FilmPlanetsEdge, FilmSpeciesConnection, FilmSpeciesEdge, FilmStarshipsConnection, FilmStarshipsEdge, FilmVehiclesConnection, FilmVehiclesEdge, FilmsConnection, FilmsEdge, PageInfo, PeopleConnection, PeopleEdge, Person, PersonFilmsConnection, PersonFilmsEdge, PersonStarshipsConnection, PersonStarshipsEdge, PersonVehiclesConnection, PersonVehiclesEdge, Planet, PlanetFilmsConnection, PlanetFilmsEdge, PlanetResidentsConnection, PlanetResidentsEdge, PlanetsConnection, PlanetsEdge, Root, Species, SpeciesConnection, SpeciesEdge, SpeciesFilmsConnection, SpeciesFilmsEdge, SpeciesPeopleConnection, SpeciesPeopleEdge, Starship, StarshipFilmsConnection, StarshipFilmsEdge, StarshipPilotsConnection, StarshipPilotsEdge, StarshipsConnection, StarshipsEdge, Vehicle, VehicleFilmsConnection, VehicleFilmsEdge, VehiclePilotsConnection, VehiclePilotsEdge, VehiclesConnection, VehiclesEdge } from '../types'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function FilmSchema(): z.ZodObject<Properties<Film>> {
  return z.object<Properties<Film>>({
    __typename: z.literal('Film').optional(),
    characterConnection: definedNonNullAnySchema.nullish(),
    created: z.string().nullish(),
    director: z.string().nullish(),
    edited: z.string().nullish(),
    episodeID: z.number().nullish(),
    id: z.string(),
    openingCrawl: z.string().nullish(),
    planetConnection: definedNonNullAnySchema.nullish(),
    producers: z.array(z.string().nullable()).nullish(),
    releaseDate: z.string().nullish(),
    speciesConnection: definedNonNullAnySchema.nullish(),
    starshipConnection: definedNonNullAnySchema.nullish(),
    title: z.string().nullish(),
    vehicleConnection: definedNonNullAnySchema.nullish()
  })
}

export function FilmCharactersConnectionSchema(): z.ZodObject<Properties<FilmCharactersConnection>> {
  return z.object<Properties<FilmCharactersConnection>>({
    __typename: z.literal('FilmCharactersConnection').optional(),
    characters: z.array(definedNonNullAnySchema.nullable()).nullish(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish()
  })
}

export function FilmCharactersEdgeSchema(): z.ZodObject<Properties<FilmCharactersEdge>> {
  return z.object<Properties<FilmCharactersEdge>>({
    __typename: z.literal('FilmCharactersEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function FilmPlanetsConnectionSchema(): z.ZodObject<Properties<FilmPlanetsConnection>> {
  return z.object<Properties<FilmPlanetsConnection>>({
    __typename: z.literal('FilmPlanetsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    planets: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function FilmPlanetsEdgeSchema(): z.ZodObject<Properties<FilmPlanetsEdge>> {
  return z.object<Properties<FilmPlanetsEdge>>({
    __typename: z.literal('FilmPlanetsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function FilmSpeciesConnectionSchema(): z.ZodObject<Properties<FilmSpeciesConnection>> {
  return z.object<Properties<FilmSpeciesConnection>>({
    __typename: z.literal('FilmSpeciesConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    species: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function FilmSpeciesEdgeSchema(): z.ZodObject<Properties<FilmSpeciesEdge>> {
  return z.object<Properties<FilmSpeciesEdge>>({
    __typename: z.literal('FilmSpeciesEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function FilmStarshipsConnectionSchema(): z.ZodObject<Properties<FilmStarshipsConnection>> {
  return z.object<Properties<FilmStarshipsConnection>>({
    __typename: z.literal('FilmStarshipsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    starships: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function FilmStarshipsEdgeSchema(): z.ZodObject<Properties<FilmStarshipsEdge>> {
  return z.object<Properties<FilmStarshipsEdge>>({
    __typename: z.literal('FilmStarshipsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function FilmVehiclesConnectionSchema(): z.ZodObject<Properties<FilmVehiclesConnection>> {
  return z.object<Properties<FilmVehiclesConnection>>({
    __typename: z.literal('FilmVehiclesConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish(),
    vehicles: z.array(definedNonNullAnySchema.nullable()).nullish()
  })
}

export function FilmVehiclesEdgeSchema(): z.ZodObject<Properties<FilmVehiclesEdge>> {
  return z.object<Properties<FilmVehiclesEdge>>({
    __typename: z.literal('FilmVehiclesEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function FilmsConnectionSchema(): z.ZodObject<Properties<FilmsConnection>> {
  return z.object<Properties<FilmsConnection>>({
    __typename: z.literal('FilmsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    films: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish()
  })
}

export function FilmsEdgeSchema(): z.ZodObject<Properties<FilmsEdge>> {
  return z.object<Properties<FilmsEdge>>({
    __typename: z.literal('FilmsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function PageInfoSchema(): z.ZodObject<Properties<PageInfo>> {
  return z.object<Properties<PageInfo>>({
    __typename: z.literal('PageInfo').optional(),
    endCursor: z.string().nullish(),
    hasNextPage: z.boolean(),
    hasPreviousPage: z.boolean(),
    startCursor: z.string().nullish()
  })
}

export function PeopleConnectionSchema(): z.ZodObject<Properties<PeopleConnection>> {
  return z.object<Properties<PeopleConnection>>({
    __typename: z.literal('PeopleConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    people: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function PeopleEdgeSchema(): z.ZodObject<Properties<PeopleEdge>> {
  return z.object<Properties<PeopleEdge>>({
    __typename: z.literal('PeopleEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function PersonSchema(): z.ZodObject<Properties<Person>> {
  return z.object<Properties<Person>>({
    __typename: z.literal('Person').optional(),
    birthYear: z.string().nullish(),
    created: z.string().nullish(),
    edited: z.string().nullish(),
    eyeColor: z.string().nullish(),
    filmConnection: definedNonNullAnySchema.nullish(),
    gender: z.string().nullish(),
    hairColor: z.string().nullish(),
    height: z.number().nullish(),
    homeworld: definedNonNullAnySchema.nullish(),
    id: z.string(),
    mass: z.number().nullish(),
    name: z.string().nullish(),
    skinColor: z.string().nullish(),
    species: definedNonNullAnySchema.nullish(),
    starshipConnection: definedNonNullAnySchema.nullish(),
    vehicleConnection: definedNonNullAnySchema.nullish()
  })
}

export function PersonFilmsConnectionSchema(): z.ZodObject<Properties<PersonFilmsConnection>> {
  return z.object<Properties<PersonFilmsConnection>>({
    __typename: z.literal('PersonFilmsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    films: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish()
  })
}

export function PersonFilmsEdgeSchema(): z.ZodObject<Properties<PersonFilmsEdge>> {
  return z.object<Properties<PersonFilmsEdge>>({
    __typename: z.literal('PersonFilmsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function PersonStarshipsConnectionSchema(): z.ZodObject<Properties<PersonStarshipsConnection>> {
  return z.object<Properties<PersonStarshipsConnection>>({
    __typename: z.literal('PersonStarshipsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    starships: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function PersonStarshipsEdgeSchema(): z.ZodObject<Properties<PersonStarshipsEdge>> {
  return z.object<Properties<PersonStarshipsEdge>>({
    __typename: z.literal('PersonStarshipsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function PersonVehiclesConnectionSchema(): z.ZodObject<Properties<PersonVehiclesConnection>> {
  return z.object<Properties<PersonVehiclesConnection>>({
    __typename: z.literal('PersonVehiclesConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish(),
    vehicles: z.array(definedNonNullAnySchema.nullable()).nullish()
  })
}

export function PersonVehiclesEdgeSchema(): z.ZodObject<Properties<PersonVehiclesEdge>> {
  return z.object<Properties<PersonVehiclesEdge>>({
    __typename: z.literal('PersonVehiclesEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function PlanetSchema(): z.ZodObject<Properties<Planet>> {
  return z.object<Properties<Planet>>({
    __typename: z.literal('Planet').optional(),
    climates: z.array(z.string().nullable()).nullish(),
    created: z.string().nullish(),
    diameter: z.number().nullish(),
    edited: z.string().nullish(),
    filmConnection: definedNonNullAnySchema.nullish(),
    gravity: z.string().nullish(),
    id: z.string(),
    name: z.string().nullish(),
    orbitalPeriod: z.number().nullish(),
    population: z.number().nullish(),
    residentConnection: definedNonNullAnySchema.nullish(),
    rotationPeriod: z.number().nullish(),
    surfaceWater: z.number().nullish(),
    terrains: z.array(z.string().nullable()).nullish()
  })
}

export function PlanetFilmsConnectionSchema(): z.ZodObject<Properties<PlanetFilmsConnection>> {
  return z.object<Properties<PlanetFilmsConnection>>({
    __typename: z.literal('PlanetFilmsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    films: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish()
  })
}

export function PlanetFilmsEdgeSchema(): z.ZodObject<Properties<PlanetFilmsEdge>> {
  return z.object<Properties<PlanetFilmsEdge>>({
    __typename: z.literal('PlanetFilmsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function PlanetResidentsConnectionSchema(): z.ZodObject<Properties<PlanetResidentsConnection>> {
  return z.object<Properties<PlanetResidentsConnection>>({
    __typename: z.literal('PlanetResidentsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    residents: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function PlanetResidentsEdgeSchema(): z.ZodObject<Properties<PlanetResidentsEdge>> {
  return z.object<Properties<PlanetResidentsEdge>>({
    __typename: z.literal('PlanetResidentsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function PlanetsConnectionSchema(): z.ZodObject<Properties<PlanetsConnection>> {
  return z.object<Properties<PlanetsConnection>>({
    __typename: z.literal('PlanetsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    planets: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function PlanetsEdgeSchema(): z.ZodObject<Properties<PlanetsEdge>> {
  return z.object<Properties<PlanetsEdge>>({
    __typename: z.literal('PlanetsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function RootSchema(): z.ZodObject<Properties<Root>> {
  return z.object<Properties<Root>>({
    __typename: z.literal('Root').optional(),
    allFilms: definedNonNullAnySchema.nullish(),
    allPeople: definedNonNullAnySchema.nullish(),
    allPlanets: definedNonNullAnySchema.nullish(),
    allSpecies: definedNonNullAnySchema.nullish(),
    allStarships: definedNonNullAnySchema.nullish(),
    allVehicles: definedNonNullAnySchema.nullish(),
    film: definedNonNullAnySchema.nullish(),
    node: definedNonNullAnySchema.nullish(),
    person: definedNonNullAnySchema.nullish(),
    planet: definedNonNullAnySchema.nullish(),
    species: definedNonNullAnySchema.nullish(),
    starship: definedNonNullAnySchema.nullish(),
    vehicle: definedNonNullAnySchema.nullish()
  })
}

export function SpeciesSchema(): z.ZodObject<Properties<Species>> {
  return z.object<Properties<Species>>({
    __typename: z.literal('Species').optional(),
    averageHeight: z.number().nullish(),
    averageLifespan: z.number().nullish(),
    classification: z.string().nullish(),
    created: z.string().nullish(),
    designation: z.string().nullish(),
    edited: z.string().nullish(),
    eyeColors: z.array(z.string().nullable()).nullish(),
    filmConnection: definedNonNullAnySchema.nullish(),
    hairColors: z.array(z.string().nullable()).nullish(),
    homeworld: definedNonNullAnySchema.nullish(),
    id: z.string(),
    language: z.string().nullish(),
    name: z.string().nullish(),
    personConnection: definedNonNullAnySchema.nullish(),
    skinColors: z.array(z.string().nullable()).nullish()
  })
}

export function SpeciesConnectionSchema(): z.ZodObject<Properties<SpeciesConnection>> {
  return z.object<Properties<SpeciesConnection>>({
    __typename: z.literal('SpeciesConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    species: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function SpeciesEdgeSchema(): z.ZodObject<Properties<SpeciesEdge>> {
  return z.object<Properties<SpeciesEdge>>({
    __typename: z.literal('SpeciesEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function SpeciesFilmsConnectionSchema(): z.ZodObject<Properties<SpeciesFilmsConnection>> {
  return z.object<Properties<SpeciesFilmsConnection>>({
    __typename: z.literal('SpeciesFilmsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    films: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish()
  })
}

export function SpeciesFilmsEdgeSchema(): z.ZodObject<Properties<SpeciesFilmsEdge>> {
  return z.object<Properties<SpeciesFilmsEdge>>({
    __typename: z.literal('SpeciesFilmsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function SpeciesPeopleConnectionSchema(): z.ZodObject<Properties<SpeciesPeopleConnection>> {
  return z.object<Properties<SpeciesPeopleConnection>>({
    __typename: z.literal('SpeciesPeopleConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    people: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function SpeciesPeopleEdgeSchema(): z.ZodObject<Properties<SpeciesPeopleEdge>> {
  return z.object<Properties<SpeciesPeopleEdge>>({
    __typename: z.literal('SpeciesPeopleEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function StarshipSchema(): z.ZodObject<Properties<Starship>> {
  return z.object<Properties<Starship>>({
    __typename: z.literal('Starship').optional(),
    MGLT: z.number().nullish(),
    cargoCapacity: z.number().nullish(),
    consumables: z.string().nullish(),
    costInCredits: z.number().nullish(),
    created: z.string().nullish(),
    crew: z.string().nullish(),
    edited: z.string().nullish(),
    filmConnection: definedNonNullAnySchema.nullish(),
    hyperdriveRating: z.number().nullish(),
    id: z.string(),
    length: z.number().nullish(),
    manufacturers: z.array(z.string().nullable()).nullish(),
    maxAtmospheringSpeed: z.number().nullish(),
    model: z.string().nullish(),
    name: z.string().nullish(),
    passengers: z.string().nullish(),
    pilotConnection: definedNonNullAnySchema.nullish(),
    starshipClass: z.string().nullish()
  })
}

export function StarshipFilmsConnectionSchema(): z.ZodObject<Properties<StarshipFilmsConnection>> {
  return z.object<Properties<StarshipFilmsConnection>>({
    __typename: z.literal('StarshipFilmsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    films: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish()
  })
}

export function StarshipFilmsEdgeSchema(): z.ZodObject<Properties<StarshipFilmsEdge>> {
  return z.object<Properties<StarshipFilmsEdge>>({
    __typename: z.literal('StarshipFilmsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function StarshipPilotsConnectionSchema(): z.ZodObject<Properties<StarshipPilotsConnection>> {
  return z.object<Properties<StarshipPilotsConnection>>({
    __typename: z.literal('StarshipPilotsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    pilots: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function StarshipPilotsEdgeSchema(): z.ZodObject<Properties<StarshipPilotsEdge>> {
  return z.object<Properties<StarshipPilotsEdge>>({
    __typename: z.literal('StarshipPilotsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function StarshipsConnectionSchema(): z.ZodObject<Properties<StarshipsConnection>> {
  return z.object<Properties<StarshipsConnection>>({
    __typename: z.literal('StarshipsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    starships: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function StarshipsEdgeSchema(): z.ZodObject<Properties<StarshipsEdge>> {
  return z.object<Properties<StarshipsEdge>>({
    __typename: z.literal('StarshipsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function VehicleSchema(): z.ZodObject<Properties<Vehicle>> {
  return z.object<Properties<Vehicle>>({
    __typename: z.literal('Vehicle').optional(),
    cargoCapacity: z.number().nullish(),
    consumables: z.string().nullish(),
    costInCredits: z.number().nullish(),
    created: z.string().nullish(),
    crew: z.string().nullish(),
    edited: z.string().nullish(),
    filmConnection: definedNonNullAnySchema.nullish(),
    id: z.string(),
    length: z.number().nullish(),
    manufacturers: z.array(z.string().nullable()).nullish(),
    maxAtmospheringSpeed: z.number().nullish(),
    model: z.string().nullish(),
    name: z.string().nullish(),
    passengers: z.string().nullish(),
    pilotConnection: definedNonNullAnySchema.nullish(),
    vehicleClass: z.string().nullish()
  })
}

export function VehicleFilmsConnectionSchema(): z.ZodObject<Properties<VehicleFilmsConnection>> {
  return z.object<Properties<VehicleFilmsConnection>>({
    __typename: z.literal('VehicleFilmsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    films: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish()
  })
}

export function VehicleFilmsEdgeSchema(): z.ZodObject<Properties<VehicleFilmsEdge>> {
  return z.object<Properties<VehicleFilmsEdge>>({
    __typename: z.literal('VehicleFilmsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function VehiclePilotsConnectionSchema(): z.ZodObject<Properties<VehiclePilotsConnection>> {
  return z.object<Properties<VehiclePilotsConnection>>({
    __typename: z.literal('VehiclePilotsConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    pilots: z.array(definedNonNullAnySchema.nullable()).nullish(),
    totalCount: z.number().nullish()
  })
}

export function VehiclePilotsEdgeSchema(): z.ZodObject<Properties<VehiclePilotsEdge>> {
  return z.object<Properties<VehiclePilotsEdge>>({
    __typename: z.literal('VehiclePilotsEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}

export function VehiclesConnectionSchema(): z.ZodObject<Properties<VehiclesConnection>> {
  return z.object<Properties<VehiclesConnection>>({
    __typename: z.literal('VehiclesConnection').optional(),
    edges: z.array(definedNonNullAnySchema.nullable()).nullish(),
    pageInfo: definedNonNullAnySchema,
    totalCount: z.number().nullish(),
    vehicles: z.array(definedNonNullAnySchema.nullable()).nullish()
  })
}

export function VehiclesEdgeSchema(): z.ZodObject<Properties<VehiclesEdge>> {
  return z.object<Properties<VehiclesEdge>>({
    __typename: z.literal('VehiclesEdge').optional(),
    cursor: z.string(),
    node: definedNonNullAnySchema.nullish()
  })
}
