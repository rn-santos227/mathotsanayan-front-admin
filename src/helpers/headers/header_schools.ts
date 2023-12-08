// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: Array<any> = [
  {
    title: "School Name",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "School Contact",
    align: "start",
    sortable: false,
    key: "contact_number",
  },
  {
    title: "Action",
    align: "center",
    sortable: false,
    key: "action",
    width: "10%",
  },
];

export default headers;
