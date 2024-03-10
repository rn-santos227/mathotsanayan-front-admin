import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Admin Name",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "Email Address",
    align: "start",
    sortable: true,
    key: "email",
  },
  {
    title: "Contact Number",
    align: "start",
    sortable: true,
    key: "contact_number",
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
