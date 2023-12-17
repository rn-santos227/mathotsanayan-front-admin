import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Teacher's Name",
    align: "start",
    sortable: true,
    key: "fullname",
  },
  {
    title: "Teacher's Email",
    align: "start",
    sortable: true,
    key: "email",
  },
  {
    title: "Teacher's School",
    align: "start",
    sortable: true,
    key: "school.name",
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
