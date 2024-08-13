"use client";

import { Pagination } from "@nextui-org/pagination";
import { Spinner } from "@nextui-org/spinner";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableHeaderProps,
  TableProps,
  TableRow,
} from "@nextui-org/table";
import React, {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  useState,
} from "react";

import FDBox from "@/template/components/FDBox/FDBox";

interface FDTableProps extends TableProps {
  columnkeys?: { key: string; value: string }[];
  customizeHeaders?: () => ReactElement<
    TableHeaderProps<object>,
    string | JSXElementConstructor<any>
  >;
  loading?: boolean;
  columnFunction?: (columnKey: Key, item: any) => ReactNode;
  sortable?: boolean;
  pagination?: boolean;
  data: any[];
  page: number;
  pages: number;
  setPage: (arg: number) => void;
  rowsPerPage?: number;
  setRowsPerPage?: (arg: number) => void;
  defaultRowsPerPageOptions?: string[];
  sortCallback?: (arg0?: Key, arg1?: "ascending" | "descending") => void;
}

const FDTable = ({
  columnkeys,
  customizeHeaders,
  loading,
  columnFunction,
  sortable,
  data,
  page,
  pages,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  defaultRowsPerPageOptions,
  pagination,
  sortCallback,
  ...props
}: FDTableProps) => {
  const rowsPerPageOptions = defaultRowsPerPageOptions ?? [
    "5",
    "10",
    "25",
    "50",
    "100",
  ];
  const [tableData, setTableData] = useState(data);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const sort = (descriptor: SortDescriptor) => {
    setSortDescriptor({
      column: descriptor.column,
      direction: descriptor.direction,
    });
    if (!sortCallback) {
      const sortedList = tableData.sort((a, b) => {
        let first = a[descriptor?.column!];
        let second = b[descriptor?.column!];
        let cmp =
          (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

        if (descriptor?.direction === "descending") {
          cmp *= -1;
        }

        return cmp;
      });

      setTableData(sortedList);
    } else {
      sortCallback(descriptor.column, descriptor.direction);
    }
  };

  const onRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (setRowsPerPage) {
      setRowsPerPage(Number(e.target?.value));
      setPage(1);
    }
  };

  const bottomContent = React.useMemo(() => {
    return (
      <FDBox className="py-2 px-2 flex justify-between items-center flex-col gap-6 sm:flex-row">
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            value={rowsPerPage}
            onChange={onRowsPerPageChange}
          >
            {rowsPerPageOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </FDBox>
    );
  }, [data.length, page, pages, rowsPerPage]);

  return (
    <Table
      isStriped
      aria-label="Example table with client side sorting"
      bottomContent={pagination ? bottomContent : undefined}
      classNames={{
        table: "min-h-[400px]",
      }}
      sortDescriptor={sortDescriptor}
      onSortChange={sort}
      {...props}
    >
      {customizeHeaders !== undefined ? (
        customizeHeaders()
      ) : (
        <TableHeader>
          {columnkeys!.map((item) => (
            <TableColumn key={item.key} allowsSorting={sortable}>
              {item.value}
            </TableColumn>
          ))}
        </TableHeader>
      )}
      <TableBody
        isLoading={loading}
        items={tableData}
        loadingContent={
          <Spinner color="primary" label="Loading..." size="lg" />
        }
      >
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell className="w-min">
                {columnFunction !== undefined
                  ? columnFunction(columnKey, item)
                  : item[columnKey]}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default FDTable;
