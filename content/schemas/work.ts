import { DocumentType, defineDocumentType } from "contentlayer/source-files";

export const WorkSchema: DocumentType = defineDocumentType(() => ({
  name: "WorkContent",
  filePathPattern: "work/*.json",
  fields: {
    company: {
      type: "string",
      required: true,
    },
    startDate: {
      type: "string",
      required: true,
    },
    endDate: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      required: true,
    },
    summary: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
  },
}));
