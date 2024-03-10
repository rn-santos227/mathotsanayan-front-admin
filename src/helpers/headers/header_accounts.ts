import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Email Address",
    align: "start",
    sortable: true,
    key: "email",
  },
  {
    title: "Acccount Type",
    align: "start",
    sortable: true,
    key: "type_name",
  },
  {
    title: "Acccount Owner",
    align: "start",
    sortable: true,
    key: "owner",
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
