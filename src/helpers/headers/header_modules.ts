// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
  {
    title: "Module Name",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "Number of Items",
    align: "start",
    sortable: true,
    key: "questions.length",
  },
  {
    title: "Module Subject",
    align: "start",
    sortable: true,
    key: "subject.name",
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
