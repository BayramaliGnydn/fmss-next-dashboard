"use client";
import { Chip } from "@nextui-org/chip";
import { TableColumn, TableHeader } from "@nextui-org/table";
import React, { Key, useState } from "react";

import { DeleteIcon, EditIcon } from "@/components/shared/UI/icons";
import FDBox from "@/template/components/FDBox/FDBox";
import FDIconButton from "@/template/components/FDIconButton/FDIconButton";
import FDTable from "@/template/components/FDTable/FDTable";

const Table = () => {
  const totalpages = 10;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const persons = [
    {
      id: 1,
      first_name: "Bret",
      last_name: "Coleridge",
      gender: "Male",
      age: 66,
    },
    {
      id: 2,
      first_name: "Leanor",
      last_name: "Pilkington",
      gender: "Female",
      age: 70,
    },
    {
      id: 3,
      first_name: "Kevin",
      last_name: "Musk",
      gender: "Male",
      age: 22,
    },
    {
      id: 4,
      first_name: "Karlyn",
      last_name: "McSporrin",
      gender: "Female",
      age: 53,
    },
    {
      id: 5,
      first_name: "Gay",
      last_name: "Ingarfield",
      gender: "Male",
      age: 70,
    },
    {
      id: 6,
      first_name: "Penrod",
      last_name: "Ledbury",
      gender: "Male",
      age: 38,
    },
    {
      id: 7,
      first_name: "Audie",
      last_name: "Scammell",
      gender: "Female",
      age: 50,
    },
    {
      id: 8,
      first_name: "Gilles",
      last_name: "Vasyatkin",
      gender: "Male",
      age: 29,
    },
    {
      id: 9,
      first_name: "Lucian",
      last_name: "Cerie",
      gender: "Male",
      age: 74,
    },
    {
      id: 10,
      first_name: "Mandy",
      last_name: "Scholfield",
      gender: "Female",
      age: 34,
    },
  ];

  const renderFunc = (columkey: Key, item: any) => {
    switch (columkey) {
      case "first_name":
        return (
          <FDBox>
            <p className="text-bold text-red-500">{item.first_name}</p>
          </FDBox>
        );
      case "actions":
        return (
          <FDBox className="items-center w-full justify-center">
            <FDIconButton>
              <EditIcon fill="blue" />
            </FDIconButton>
            <FDIconButton>
              <DeleteIcon fill="red" />
            </FDIconButton>
          </FDBox>
        );
      case "age":
        return (
          <FDBox>
            <Chip color="secondary">{item.age}</Chip>
          </FDBox>
        );
      default:
        return <FDBox className="relative">{item[columkey as string]}</FDBox>;
    }
  };

  return (
    <FDBox className="flex-col w-full gap-8">
      <FDTable
        pagination
        sortable
        color="secondary"
        columnkeys={[
          { key: "id", value: "ID" },
          { key: "first_name", value: "Name" },
          { key: "last_name", value: "Last Name" },
          { key: "gender", value: "Gender" },
          { key: "age", value: "Age" },
        ]}
        data={persons}
        defaultSelectedKeys={[3, 5]}
        page={page}
        pages={totalpages}
        rowsPerPage={rowsPerPage}
        selectionMode="multiple"
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        sortCallback={(col, direction) => console.log(col, direction)}
      />
      <FDTable
        pagination
        sortable
        columnFunction={(key, item) => renderFunc(key, item)}
        customizeHeaders={() => (
          <TableHeader>
            <TableColumn key="id" allowsSorting>
              ID
            </TableColumn>
            <TableColumn key="first_name" allowsSorting>
              Name
            </TableColumn>
            <TableColumn key="last_name" allowsSorting>
              Lastname
            </TableColumn>
            <TableColumn key="age" allowsSorting>
              Age
            </TableColumn>
            <TableColumn key="actions" className="text-center">
              Actions
            </TableColumn>
          </TableHeader>
        )}
        data={persons}
        page={page}
        pages={totalpages}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
    </FDBox>
  );
};

export default Table;
