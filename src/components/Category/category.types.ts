export type Category = 'ranqueada' | 'duelo' | 'diversao' | 'teste';
export default interface CategoryDataProps {
  id: number;
  name?: string;
  image?: string;
  type?: string;
  isChecked?: boolean;
}

export interface CategoryChoosenProps {
  data: CategoryDataProps[];
  onPress: (id: number) => void;
  selected: boolean | number;
  needCheck?: boolean;
}
