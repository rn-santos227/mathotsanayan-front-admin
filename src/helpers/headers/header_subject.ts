import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Subject Name",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "Number of Modules",
    align: "start",
    sortable: true,
    key: "modules.length",
  },
  {
    title: "Action",
    align: "end",
    sortable: false,
    key: "action",
    width: "10%",
  },
];

export default headers;
