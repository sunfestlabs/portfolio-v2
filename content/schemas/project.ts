import { DocumentType, defineDocumentType } from "contentlayer/source-files";

export const ProjectSchema: DocumentType = defineDocumentType(() => ({
  name: "ProjectContent",
  filePathPattern: "projects/*.json",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    snippet: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    technologies: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
  },
}));
