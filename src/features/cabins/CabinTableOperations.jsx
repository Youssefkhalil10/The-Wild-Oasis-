import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        fieldFilter="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by (A-Z)" },
          { value: "name-desc", label: "Sort by (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low-first)" },
          { value: "regularPrice-desc", label: "Sort by price (high-first)" },
          {
            value: "maxCapacity-asc",
            label: "Sort by maxCapacity (low-first)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by maxCapacity (high-first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
