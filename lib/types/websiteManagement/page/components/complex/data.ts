import { ComponentBaseData } from "../base";
import {
  CaptionData,
  TextInputData,
  HeaderData,
  ImageData,
  LabelData,
  ParagraphData,
  EmailInputData,
  PasswordInputData,
  CheckboxInputData,
  PhoneNoInputData,
  FileInputData,
  ButtonData,
  TableHeaderData,
  TableColData,
  SpanData,
  ListItemData,
} from "../core/data";

export type CaptionedImageData = ComponentBaseData & {
  image: ImageData;
  caption: CaptionData;
};

export type ContentCardData = ComponentBaseData & {
  header: HeaderData,
  paragraph: ParagraphData,
  button?: ButtonData
};

export type FeatureCardData = ComponentBaseData & {
  image?: ImageData,
  contentCard: ContentCardData,
};

export type HeroSectionTextData = ComponentBaseData & {
  header: HeaderData,
  paragraph: ParagraphData,
  button: ButtonData
};

export type JumbotronData = ComponentBaseData & {
  title: HeaderData,
  description: ParagraphData
};


export type InputGroupData = ComponentBaseData & {
    label: LabelData,
    input: TextInputData | EmailInputData | PasswordInputData 
    | CheckboxInputData | PhoneNoInputData | FileInputData
};

// export type FirstNameInputGroupData = ComponentBaseData & {
//   label: LabelData,
//   input: TextInputData
// };

// export type LastNameInputGroupData = ComponentBaseData & {
//   label: LabelData,
//   input: TextInputData
// };

// export type EmailInputGroupData = ComponentBaseData & {
//   label: LabelData,
//   input: EmailInputData
// };

// export type PasswordInputGroupData = ComponentBaseData & {
//   label: LabelData,
//   input: PasswordInputData
// };

// export type CheckboxInputGroupData = ComponentBaseData & {
//   label: LabelData,
//   input: CheckboxInputData
// };

// export type PhoneNoInputGroupData = ComponentBaseData & {
//   label: LabelData,
//   input: PhoneNoInputData
// };

// export type FileInputGroupData = ComponentBaseData & {
//   label: LabelData,
//   input: FileInputData
// };

export type ListType = ComponentBaseData & {
  type: "ORDERED" | "UNORDERED"
};

export type TableSectionType = ComponentBaseData & {
  type: "THEAD" | "TBODY"
};

export type UnorderedListData = ListType & {
  type: "UNORDERED",
  listItems: Array<ListItemData>
};

export type OrderedListData = ListType & {
  type: "ORDERED",
  listItems: Array<ListItemData>
};

export type TitledUnorderedListData = ComponentBaseData  & {
  title: HeaderData,
  unorderedList: UnorderedListData
};

export type searchResult = ComponentBaseData & {
  resultId: SpanData,
  resultEnglishName: ParagraphData
}

export type searchResultSetData = ComponentBaseData & {
  searchResults: Array<searchResult>
};

export type SearchData = ComponentBaseData  & {
  searchInput: TextInputData,
  searchResultSet: searchResultSetData
};

export type RowData = ComponentBaseData & {
  tableHeader?: Array<TableHeaderData>,
  tableData?: Array<TableColData>
}

// export type RowData = (TableHeaderData | TableColData) & ComponentBaseData;


export type TableHeadData = TableSectionType & {
  type: "THEAD",
  row: Array<RowData>
}

export type TableBodyData = TableSectionType & {
  type: "TBODY",
  row: Array<RowData>
};


export type TableData = ComponentBaseData & {
  tableHead: TableHeadData,
  tableBody: TableBodyData
}
export type PrayerScheduleData = ComponentBaseData & {
  title: HeaderData,
  date: SpanData,
  scheduleTable: TableData
}

export type FormData = ComponentBaseData & {
  // firstNameInput: FirstNameInputGroupData,
  // lastNameInput: LastNameInputGroupData,
  // emailInput: EmailInputGroupData,
  inputGroups: Array<InputGroupData>
  submitButton: ButtonData
};
