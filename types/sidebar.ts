interface Route {
  route?: string;
  key: string;
  collapse: boolean;
  icon: React.ReactNode;
  name: string;
  routes: {
    route: string;
    key: string;
    icon: React.ReactNode;
    name: string;
  }[];
}

export interface SidebarAccordionProps {
  item: Route;
  baseRoute: string;
  subRoute: string;
}
