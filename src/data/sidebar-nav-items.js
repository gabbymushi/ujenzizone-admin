export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Mafundi Management",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Fundi",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
   /*  {
      title: "Add New Fundi",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    }, */
    {
      title: "Mafundi Categories",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Suppliers Categories",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    } 
  ];
}
