// eslint-disable-next-line
const headers: Array<any> = [
  {
    title: "Course Name",
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
    title: "Date Created",
    align: "start",
    sortable: true,
    key: "created_at",
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
