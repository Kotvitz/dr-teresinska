import { type SchemaTypeDefinition } from 'sanity'
import homePage from "./homePage";
import aboutPage from './aboutPage';
import specializationsPage from './specializationsPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    aboutPage,
    specializationsPage
  ],
}
