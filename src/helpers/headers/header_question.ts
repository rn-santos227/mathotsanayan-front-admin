// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
  {
    title: "Question",
    align: "start",
    sortable: true,
    key: "content",
    width: "50%",
  },
  {
    title: "Question Type",
    align: "start",
    sortable: true,
    key: "type",
  },
  {
    title: "Correct Answers",
    align: "start",
    sortable: true,
    key: "corrects.length",
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
