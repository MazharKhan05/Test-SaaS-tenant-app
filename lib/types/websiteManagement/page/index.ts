import { Component } from "./components";

export type Page = {
  id: string;
  websiteId: string;
  route: string;
  content: {
    title: string;
    sections: Section[];
  };
};

export type Section = {
  id: string;
  components: Component[];
};
