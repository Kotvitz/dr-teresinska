import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { projectId, dataset, apiVersion } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "default",
  title: "Dr Teresinska",

  projectId,
  dataset,
  apiVersion,

  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
});
