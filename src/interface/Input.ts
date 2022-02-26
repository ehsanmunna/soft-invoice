import { ITitle } from "./Title";

export interface IInput{
    label: string;
}

export interface ITextArea extends ITitle{
    id: string;
}

export interface IAutocompleteOption extends IInput {
    options: any[]
  }