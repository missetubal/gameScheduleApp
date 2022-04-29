export type Category = 'ranqueada' | 'duelo' | 'diversao' | 'teste';
export default interface CategoryDataProps {
  name?: string;
  image?: string;
  isChecked?: boolean;
  type: Category;
  current: number;
  total: number;
  onPress?: () => void;
};

export interface CategoryChoosenProps {
  data: CategoryDataProps[];
  onPress: (id: number) => void;
  selected: boolean;
}
