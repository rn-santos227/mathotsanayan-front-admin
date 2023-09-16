// eslint-disable-next-line
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
    key: "teacher_id",
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
