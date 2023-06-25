import { Checkbox, Table, Thead, Tbody, Tr, Th, Td, type TableProps, type TableRowProps, type TableHeadProps, type TableBodyProps, type TableCellProps, type TableColumnHeaderProps, type ResponsiveValue } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { type ReactNode, useEffect, useState } from "react";

type RowData = string | number | ReactNode | undefined;
type TableRecord = Record<string | number | symbol, RowData>;

type GeneticTableHeader<T> = {
  name: keyof T;
  label?: RowData;
  hidden?: boolean;
  ignoreLink?: boolean;
};

type TableGeneratorVariants = {
  table?: ResponsiveValue<string | "simple" | "striped" | "unstyled"> | undefined;
  thead?: ResponsiveValue<string | "simple" | "striped" | "unstyled"> | undefined;
  tbody?: ResponsiveValue<string | "simple" | "striped" | "unstyled"> | undefined;
  tr?: ResponsiveValue<string | "simple" | "striped" | "unstyled"> | undefined;
  th?: ResponsiveValue<string | "simple" | "striped" | "unstyled"> | undefined;
  td?: ResponsiveValue<string | "simple" | "striped" | "unstyled"> | undefined;
};

type TableGeneratorStyle = {
  table?: TableProps;
  thead?: TableHeadProps;
  tbody?: TableBodyProps;
  tr?: TableRowProps;
  th?: TableColumnHeaderProps;
  td?: TableCellProps;
  selectTh?: TableColumnHeaderProps;
  selectTd?: TableCellProps;
};

type TableGeneratorProps<T extends TableRecord> = {
  linkedRows?: (item: T) => string;
  selectable?: boolean;
  headers: GeneticTableHeader<T>[];
  datas: T[];
  onSelectChange?: (selected: boolean[], datas?: T[]) => void;
  emptyDisplay?: RowData;
  style?: TableGeneratorStyle;
  variants?: TableGeneratorVariants;
};

export default function TableGenerator<T extends TableRecord>({ datas, emptyDisplay, headers, linkedRows, onSelectChange, selectable, style, variants }: TableGeneratorProps<T>) {

  const router = useRouter();

  const [selectedRows, setSelectedRows] = useState<boolean[]>([]);
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false);

  useEffect(() => {
    const initialSelection = new Array(datas.length).fill(false);
    setSelectedRows(initialSelection);
    setSelectAllChecked(false);
  }, [datas]);

  const handleRowSelect = (index: number, isSelected: boolean) => {
    const updatedSelection = [...selectedRows];
    updatedSelection[index] = isSelected;
    setSelectedRows(updatedSelection);
    setSelectAllChecked(updatedSelection.every(Boolean));

    if (onSelectChange) {
      onSelectChange(updatedSelection, datas);
    }
  };

  const handleSelectAll = () => {
    const updatedSelectAllChecked = !selectAllChecked;
    const updatedSelection = (new Array(datas.length) as boolean[]).fill(updatedSelectAllChecked);
    setSelectedRows(updatedSelection);
    setSelectAllChecked(updatedSelectAllChecked);

    if (onSelectChange) {
      onSelectChange(updatedSelection, datas);
    }
  };

  return (
    <Table {...style?.table} variant={variants?.table}>
      <Thead {...style?.thead} variant={variants?.thead}>
        <Tr {...style?.tr} variant={variants?.tr}>
          {selectable && <Th {...style?.selectTh} variant={variants?.th}> <Checkbox isChecked={selectAllChecked} onChange={handleSelectAll} /> </Th>}
          {headers.map((header, index) => {
            if (header.hidden) {
              return <></>;
            }
            return <Th key={index} {...style?.th} variant={variants?.th}>{header.label}</Th>;
          })}
        </Tr>
      </Thead>
      <Tbody {...style?.tbody}>
        {
        datas.length === 0
        ? <Tr {...style?.tr} variant={variants?.tr}>
            <Td { ...style?.td} variant={variants?.td} colSpan={selectable ? headers.length + 1 : headers.length}>
              {emptyDisplay || "No data available"}
            </Td>
          </Tr>
        : datas.map((data, dataIndex) => (
          <Tr
            key={dataIndex}
            {...style?.tr}
            variant={variants?.tr}>
              {selectable && <Td {...style?.selectTd} variant={variants?.td}>
                <Checkbox
                  isChecked={selectedRows[dataIndex]}
                  onChange={(e) => handleRowSelect(dataIndex, e.target.checked)}
                />
              </Td>}
            {headers.map((header, headerIndex) => {
              if (header.hidden) {
                return null;
              }
              const currentData = data[header.name];
              return (
                <Td 
                onClick={
                  (!header?.ignoreLink && linkedRows)
                  ? async () => await router.push(linkedRows(data))
                  : undefined
                }
                cursor={!header?.ignoreLink && linkedRows ? "pointer" : "initial"} key={headerIndex} { ...style?.td } variant={variants?.td}>
                  {
                    typeof currentData === "boolean"
                    ? <Checkbox cursor="initial" disabled isReadOnly isChecked={currentData} checked={currentData} />
                    : data[header.name]
                  }
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

// Use case example:

// import { Checkbox } from "@chakra-ui/react";

// export default function ExampleGenericTable() {

//   return (
//     
//   );
// }