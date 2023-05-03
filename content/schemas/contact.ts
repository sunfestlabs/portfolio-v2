import { DocumentType, defineDocumentType } from "contentlayer/source-files";

export const ContactSchema: DocumentType = defineDocumentType(() => ({
  name: "ContactContent",
  filePathPattern: "contact.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
}));
