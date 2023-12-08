// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
  {
    title: "Image",
    align: "start",
    key: "image",
  },
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
    title: "Action",
    align: "end",
    sortable: false,
    key: "action",
    width: "10%",
  },
];

export default headers;
