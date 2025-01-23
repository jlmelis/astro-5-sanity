import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .icon(() => '🏠')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            // other items can be added here
            ...S.documentTypeListItems().filter(
              listItem => listItem.getId() !== 'homePage'
            ),
          ]),
    }),
  ],
  schema,
});