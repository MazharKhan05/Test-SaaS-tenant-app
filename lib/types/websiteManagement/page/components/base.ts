export type ComponentType =
  | "CORE_COMPONENT"
  | "COMPLEX_COMPONENT"
  | "BLOCK_COMPONENT";

export type ComponentBase = {
  type: ComponentType;
  name: string;
};

export type ComponentBaseData = { id: string };
