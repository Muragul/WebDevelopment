import { Recipe } from './recipe';

export const RECIPES: Recipe[] = [
  {
    id: 21,
    title: 'Kotletki s pyurewkoi',
    description: 'best of bests',
    ingredients: ['beef', 'potato'],
    steps: ['1', '2', '3'],
    likes: 0,
    comments: [],
    front_image: 'kotletki.png',
    images: ['kotletka1.png', 'kotletka2.png'],
    category: {id: 11, name: 'Beef'}
  },
  {
    id: 22,
    title: 'Uchpuchmak',
    description: 'with love from Tatarstan',
    ingredients: ['beef', 'testo', 'potato'],
    steps: ['1', '2', '3'],
    likes: 0,
    comments: [],
    front_image: 'uchpuchmak.png',
    images: ['uchpuchmak1.png', 'Uchpuchmak2.png'],
    category: {id: 11, name: 'Beef'}
  },
  {
    id: 23,
    title: 'Beshbarmak',
    description: 'with love from Kazakhstan',
    ingredients: ['horse meat', 'potato', 'onion', 'testo'],
    steps: ['1', '2', '3'],
    likes: 0,
    comments: [],
    front_image: 'beshbarmak.png',
    images: ['beshbarmak1.png', 'beshbarmak2.png'],
    category: {id: 4, name: 'Dinner'}
  }
]
