import { ComponentBase } from "../base";
import {
  ButtonData,
  DividerData,
  SpacerData,
  TextBoxData,
  ImageData,
  InputData,
  ListItemData,
} from "./data";

type CoreComponentBase = ComponentBase & {
  type: "CORE_COMPONENT";
};

export type ButtonComponent = CoreComponentBase & {
  name: "Button";
  data: ButtonData;
};
export type ImageComponent = CoreComponentBase & {
  name: "Image";
  data: ImageData;
};

export type ListComponent = CoreComponentBase & {
  name: "List";
  data: ListItemData;
};

export type InputComponent = CoreComponentBase & {
  name: "Input",
  data: InputData
};

export type DividerComponent = CoreComponentBase & {
  name: "Divider";
  data: DividerData;
};
export type SpacerComponent = CoreComponentBase & {
  name: "Spacer";
  data: SpacerData;
};
export type TextBoxComponent = CoreComponentBase & {
  name: "Text Box";
  data: TextBoxData;
};
