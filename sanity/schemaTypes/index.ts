import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings';
import homePage from "./homePage";
import aboutPage from './aboutPage';
import specializationsPage from './specializationsPage';
import testsPage from './testsPage';
import legalPage from './legalPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homePage,
    aboutPage,
    specializationsPage,
    testsPage,
    legalPage
  ],
}
