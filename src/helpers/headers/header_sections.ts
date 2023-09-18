// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
  {
    title: "Section Name",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "Section Level",
    align: "start",
    sortable: true,
    key: "level",
  },
  {
    title: "Section Teacher",
    align: "start",
    sortable: false,
    key: "teacher.full_name",
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
