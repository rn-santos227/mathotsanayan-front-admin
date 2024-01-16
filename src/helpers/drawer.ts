export default [
  {
    text: "Dashboard",
    icon: "mdi-home",
    route: "/",
    activator: false,
    children: [],
  },
  {
    text: "Modules",
    icon: "mdi-text-box-check",
    route: "/modules",
    activator: false,
    children: [],
  },
  {
    text: "Students",
    icon: "mdi-account-school",
    route: "/students",
    activator: false,
    children: [],
  },
  {
    text: "Reports",
    icon: "mdi-sticker-check-outline",
    route: "/reports",
    activator: false,
    children: [],
  },
  {
    text: "Teachers",
    icon: "mdi-human-male-board",
    route: "/teachers",
    activator: false,
    children: [],
  },
  {
    text: "Library",
    icon: "mdi-bookmark-box-multiple",
    route: "/library",
    activator: false,
    children: [
      {
        text: "Accounts",
        icon: "mdi-account-circle",
        route: "/accounts",
        activator: false,
        children: [],
      },
      {
        text: "Administrators",
        icon: "mdi-cog",
        route: "/admins",
        activator: false,
        children: [],
      },
      {
        text: "Courses",
        icon: "mdi-certificate",
        route: "/courses",
        activator: false,
        children: [],
      },
      {
        text: "Schools",
        icon: "mdi-school",
        route: "/schools",
        activator: false,
        children: [],
      },
      {
        text: "Sections",
        icon: "mdi-chair-school",
        route: "/sections",
        activator: false,
        children: [],
      },
      {
        text: "Subjects",
        icon: "mdi-book",
        route: "/subjects",
        activator: false,
        children: [],
      },
    ],
  },
  {
    text: "Audit Logs",
    icon: "mdi-clipboard-text",
    route: "/audit",
    activator: false,
    children: [],
  },
];
