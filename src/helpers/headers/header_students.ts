import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Student Name",
    align: "start",
    sortable: true,
    key: "fullname",
  },
  {
    title: "Section",
    align: "start",
    sortable: true,
    key: "section.name",
  },
  {
    title: "Course",
    align: "start",
    sortable: true,
    key: "course.name",
  },
  {
    title: "School",
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
