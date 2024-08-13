import { ComponentIcon, FolderIcon, Home } from "@/components/shared/UI/icons";

export const routes = [
  {
    key: "home",
    name: "Home",
    route: "/",
    icon: <Home color="white" />,
  },
  {
    key: "components",
    collapse: true,
    name: "Components",
    icon: <FolderIcon color="white" />,
    routes: [
      {
        key: "table",
        name: "Table",
        route: "/components/table",
        icon: <ComponentIcon color="white" />,
      },
      {
        key: "tabs",
        name: "Tabs",
        route: "/components/tabs",
        icon: <ComponentIcon color="white" />,
      },
      {
        key: "dropzone",
        name: "Dropzone",
        route: "/components/dropzone",
        icon: <ComponentIcon color="white" />,
      },
      {
        key: "editor",
        name: "Editor",
        route: "/components/editor",
        icon: <ComponentIcon color="white" />,
      },
      {
        key: "cropper",
        name: "Cropper",
        route: "/components/cropper",
        icon: <ComponentIcon color="white" />,
      },
      {
        key: "grid",
        name: "Grid",
        route: "/components/grid",
        icon: <ComponentIcon color="white" />,
      },
      {
        key: "alert",
        name: "Alert",
        route: "/components/alert",
        icon: <ComponentIcon color="white" />,
      },
    ],
  },
];
