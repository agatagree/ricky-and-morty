import { createContext, ReactNode, useState } from "react";
import { OrderType, OrderByType } from "../types/SortType";

export type TableContextType = {
  queryName: string;
  setQueryName: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  order: OrderType;
  setOrder: (value: OrderType) => void;
  orderBy: OrderByType;
  setOrderBy: (value: OrderByType) => void;
};

const initialState: TableContextType = {
  queryName: "",
  setPage: () => {},
  page: 0,
  setQueryName: () => {},
  order: "asc",
  setOrder: () => {},
  orderBy: "id",
  setOrderBy: () => {},
};
export const TableContext = createContext<TableContextType>(initialState);

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [queryName, setQueryName] = useState("");
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<OrderType>("asc");
  const [orderBy, setOrderBy] = useState<OrderByType>("id");

  return (
    <TableContext.Provider
      value={{
        queryName,
        setQueryName,
        page,
        setPage,
        order,
        setOrder,
        orderBy,
        setOrderBy,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
