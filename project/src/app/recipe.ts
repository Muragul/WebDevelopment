import { Category } from './category';
import { Comment } from './comment';

export interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    likes: number;
    comments: string[];
    front_image: string;
    images: string[];
    category: Category;
}
