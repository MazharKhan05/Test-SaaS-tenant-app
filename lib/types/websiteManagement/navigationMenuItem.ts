export type NavigationMenuItem = {
  id: string;
  websiteId: string;
  route: string;
  parentId: string | null;
  order: number;
  content: {
    name: string;
  };
};
