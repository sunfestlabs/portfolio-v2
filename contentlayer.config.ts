import { AboutMeSchema } from "./content/schemas/about-me";
import { ProjectSchema } from "./content/schemas/project";
import { WorkSchema } from "./content/schemas/work";
import { makeSource } from "contentlayer/source-files";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [AboutMeSchema, ProjectSchema, WorkSchema],
});
