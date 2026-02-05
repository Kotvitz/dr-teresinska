import { type SchemaTypeDefinition } from 'sanity'
import homePage from "./homePage";
import aboutPage from './aboutPage';
import specializationsPage from './specializationsPage';
import testsPage from './testsPage';
import legalPage from './legalPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    aboutPage,
    specializationsPage,
    testsPage,
    legalPage
  ],
}
