export interface IItem {
    title: string;
    key: string;
}
export declare type ITreeData = IItem & {
    children: IItem[] | [] | ITreeData[];
};
