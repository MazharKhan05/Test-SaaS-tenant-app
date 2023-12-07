import { ChangeEventHandler } from "react";
import { ComponentBaseData } from "../base";

export type ImageData = ComponentBaseData & {
  url: string;
  alt: string;
};

export type ButtonData = ComponentBaseData & {  //TODO: Add a extra param for onCLick
  label: string;
  redirectTo?: string;
};

export type ListItemData = ComponentBaseData & {
  text: SpanData;
};

export type LabelData = TextBoxData & {
  type: "LABEL"
};

export type TextInputData = InputData & {
  inputType: "TEXT"
};

export type EmailInputData = InputData & {
  inputType: "EMAIL"
};

export type PasswordInputData = InputData & {
  inputType: "PASSWORD"
};

export type CheckboxInputData = InputData & {
  inputType: "CHECKBOX"
};

export type PhoneNoInputData = InputData & {
  inputType: "NUMBER"
};

export type FileInputData = InputData & {
  inputType: "FILE"
};

export type InputData = ComponentBaseData & {
  inputType: "TEXT" | "EMAIL" | "PASSWORD" | "CHECKBOX" | "FILE" | "NUMBER";
} & {
  value: string,
  placeHolder: string,
  isRequired: boolean,
  changeEventHandler?: ChangeEventHandler<HTMLInputElement>
};

export type DividerData = ComponentBaseData & {};

export type SpacerData = ComponentBaseData & {
  height: number;
};

export type TextBoxData = ComponentBaseData & { text: string } & {
  type: "HEADER" | "PARAGRAPH" | "CAPTION" | "LABEL" | "SPAN";
};

export type HeaderData = TextBoxData & {
  type: "HEADER";
};

export type ParagraphData = TextBoxData & {
  type: "PARAGRAPH";
};

export type CaptionData = TextBoxData & {
  type: "CAPTION";
};

export type SpanData = TextBoxData & {
  type: "SPAN";
};

export type TableHeaderData = ComponentBaseData & {
  text: string
  // scope: "col"
}

export type TableColData = ComponentBaseData & {
  text: string
}
