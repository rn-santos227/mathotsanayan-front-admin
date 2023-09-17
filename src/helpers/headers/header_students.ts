import Header from "@/types/Header";
const headers: Array<Header> = [
  {
    title: "Studet's Name",
    align: "start",
    sortable: true,
    key: "full_name",
  },
  {
    title: "Studet's Email",
    align: "start",
    sortable: true,
    key: "email",
  },
  {
    title: "Studet's Section",
    align: "start",
    sortable: true,
    key: "section.name",
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
