export type Note = {
  id: string;
  text: string;
  isSelected: boolean;
  isEditing: boolean;
};

export type EditNote = {
  text: string;
  id: string;
};
