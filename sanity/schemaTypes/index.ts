import { type SchemaTypeDefinition } from 'sanity'
import homePage from "./homePage";
import aboutPage from './aboutPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    aboutPage
  ],
}
