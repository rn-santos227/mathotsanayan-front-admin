import Header from "@/types/Header";
const headers: Array<Header> = [
  {
    title: "Course Name",
    align: "start",
    sortable: true,
    key: "full_name",
  },
  {
    title: "Number of Modules",
    align: "start",
    sortable: true,
    key: "modules.length",
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
