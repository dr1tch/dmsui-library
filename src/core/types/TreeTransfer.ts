export interface IItem {
  title: string;
  key: string;
}

export type ITreeData = IItem & {
  children: IItem[] | [] | ITreeData[];
};
