// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
  {
    title: "Student Name",
    align: "start",
    sortable: true,
    key: "fullname",
  },
  {
    title: "Student Email",
    align: "start",
    sortable: true,
    key: "email",
  },
  {
    title: "Student School",
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
