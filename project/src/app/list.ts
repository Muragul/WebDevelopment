import { Category } from './category';
import { Comment } from './comment';
import { Recipe } from './recipe';
import { User } from './user';

export const List = [
    {
        id: 1,
        title: 'cupcake',
        description: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        ingredients: [
            'chocolate',
            'milk',
            'salt',
            'flour',
            'sugar'
        ],
        steps: [
            'try',
            'fail',
            'get upset',
            'buy cupcake'
        ],
        likes: 8,
        comments: [
            'lol',
            'kek',
            'norm'
        ],
        front_image: '../../assets/post17.png',
        images: [
            '../../assets/post17.png',
            '../../assets/post18.png',
            '../../assets/post19.png'
        ],
        categories: [
            {
                id: 1,
                name: 'sweets'
            }
        ]
    }
]
