import React from "react";
import { Transfer, Tree } from "antd";

// import { IMenuTree } from "@seeds/menus";
import { ITreeData } from "../../types/TreeTransfer";

// Customize Table Transfer
const isChecked = (selectedKeys: string[], eventKey: string) =>
  selectedKeys.indexOf(eventKey) !== -1;

const generateTree = (
  treeNodes: ITreeData[] = [],
  checkedKeys: string[] = []
): any =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key),
    children: generateTree(children as ITreeData[], checkedKeys),
  }));

interface ITreeTransferProps {
  data: ITreeData[];
  targetKeys: string[];
  onChange: (keys: string[]) => void;
  titles: string[];
  isDisabled?: boolean;
}

const TreeTransfer: React.FC<ITreeTransferProps> = ({
  data,
  targetKeys,
  onChange,
  titles,
  isDisabled,
  ...restProps
}) => {
  const transferDataSource: ITreeData[] = [];
  function flatten(list: ITreeData[] = []) {
    list.forEach((item) => {
      transferDataSource.push(item);
      flatten(item.children as ITreeData[]);
    });
  }
  flatten(data);
  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      onChange={onChange}
      //   className="tree-transfer"
      render={(item) => item.title}
      oneWay
      showSelectAll={true}
      titles={titles}
      disabled={isDisabled}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === "left") {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <Tree
              disabled={isDisabled}
              blockNode
              checkable
              checkStrictly
              defaultExpandAll
              checkedKeys={checkedKeys}
              treeData={generateTree(data, targetKeys)}
              onCheck={(_, { node: { key } }) => {
                onItemSelect(
                  key as string,
                  !isChecked(checkedKeys, key as string)
                );
              }}
              onSelect={(_, { node: { key } }) => {
                onItemSelect(
                  key as string,
                  !isChecked(checkedKeys, key as string)
                );
              }}
            />
          );
        }
      }}
    </Transfer>
  );
};

export default TreeTransfer;
