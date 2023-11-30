// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
  {
    title: "Studet Name",
    align: "start",
    sortable: true,
    key: "fullname",
  },
  {
    title: "Studet Email",
    align: "start",
    sortable: true,
    key: "email",
  },
  {
    title: "Student Teacher",
    align: "start",
    sortable: true,
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
