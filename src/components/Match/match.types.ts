export interface MatchProps {
  category?: string;
  server?: object;
  day?: string;
  month?: string;
  minute?: string;
  hour?: string;
}

export interface MatchDataProps {
  match?: MatchProps[];
  onPress?: () => void;
}
