import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Acccount Name",
    align: "start",
    sortable: true,
    key: "user",
  },
  {
    title: "Activity",
    align: "start",
    sortable: true,
    key: "activity",
  },
  {
    title: "Table",
    align: "start",
    sortable: true,
    key: "table",
  },
  {
    title: "IP Address",
    align: "start",
    sortable: true,
    key: "ip_address",
  },
  {
    title: "Timestamp",
    align: "start",
    sortable: true,
    key: "created_at",
  },
];

export default headers;
