import React from "react";
import { ITreeData } from "../../types/TreeTransfer";
interface ITreeTransferProps {
    data: ITreeData[];
    targetKeys: string[];
    onChange: (keys: string[]) => void;
    titles: string[];
    isDisabled?: boolean;
}
declare const TreeTransfer: React.FC<ITreeTransferProps>;
export default TreeTransfer;
