import Header from "@/types/Header";
const headers: Array<Header> = [
  {
    title: "Teacher's Name",
    align: "start",
    sortable: true,
    key: "full_name",
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
