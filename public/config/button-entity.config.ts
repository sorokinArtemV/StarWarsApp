import { ButtonEntityType } from './enums/button-entity.enum';

export const ButtonEntityConfig = [
  {
    type: ButtonEntityType.Characters,
    image: 'icon-1.png',
    link: 'https://swapi.dev/api/people',
    description: 'List of all characters'
  },
  {
    type: ButtonEntityType.Movies,
    image: 'icon-2.png',
    link: 'https://swapi.dev/api/films',
    description: 'List of all movies'
  },
  {
    type: ButtonEntityType.Starships,
    image: 'icon-3.png',
    link: 'https://swapi.dev/api/starships',
    description: 'List of all starships'
  },
  {
    type: ButtonEntityType.Vehicles,
    image: 'icon-4.png',
    link: 'https://swapi.dev/api/vehicles',
    description: 'List of all vehicles'
  },
  {
    type: ButtonEntityType.Species,
    image: 'icon-5.png',
    link: 'https://swapi.dev/api/species',
    description: 'List of all people'
  },
  {
    type: ButtonEntityType.Planets,
    image: 'icon-6.png',
    link: 'https://swapi.dev/api/planets',
    description: 'List of all planets'
  }
];
