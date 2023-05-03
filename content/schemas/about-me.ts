import { DocumentType, defineDocumentType } from "contentlayer/source-files";

export const AboutMeSchema: DocumentType = defineDocumentType(() => ({
  name: "AboutMeContent",
  filePathPattern: "about-me.md",
}));
