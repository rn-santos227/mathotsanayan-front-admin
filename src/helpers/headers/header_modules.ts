import Header from "@/types/Header";
const headers: Array<Header> = [
  {
    title: "Moude Name",
    align: "start",
    sortable: true,
    key: "full_name",
  },
  {
    title: "Number of Items",
    align: "start",
    sortable: true,
    key: "questions.length",
  },
  {
    title: "Module Course",
    align: "start",
    sortable: true,
    key: "course.name",
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
