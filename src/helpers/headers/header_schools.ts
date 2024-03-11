import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "School Name",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "Email Address",
    align: "start",
    sortable: false,
    key: "email",
  },
  {
    title: "Action",
    align: "center",
    sortable: false,
    key: "action",
    width: "10%",
  },
];

export default headers;
