// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
  {
    title: "Subject Name",
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
    title: "Action",
    align: "end",
    sortable: false,
    key: "action",
    width: "10%",
  },
];

export default headers;
