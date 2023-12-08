// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
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
