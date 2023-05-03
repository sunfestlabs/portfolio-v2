import { DocumentType, defineDocumentType } from "contentlayer/source-files";

export const AboutMeSchema: DocumentType = defineDocumentType(() => ({
  name: "AboutMeContent",
  filePathPattern: "about-me.md",
  fields: {
    technologies: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
  },
}));
