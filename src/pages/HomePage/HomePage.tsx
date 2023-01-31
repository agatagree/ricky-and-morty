import { SearchField, TableCharacter } from "./components";
import { TableProvider } from "./provider/TableProvider";

export const HomePage = () => {

  return (
    <TableProvider>
      <SearchField />
      <TableCharacter />
    </TableProvider>
  );
};
