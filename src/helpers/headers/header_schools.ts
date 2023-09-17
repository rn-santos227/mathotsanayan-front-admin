import Header from "@/types/Header";
const headers: Array<Header> = [
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
  },
];

export default headers;
