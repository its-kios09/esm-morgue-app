import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  DataTable,
  DataTableSkeleton,
  Pagination,
  TableContainer,
  TableToolbar,
  TableToolbarSearch,
  OverflowMenu,
  OverflowMenuItem,
} from "@carbon/react";
import { usePagination } from "@openmrs/esm-framework";

export const AdmittedQueue: React.FC = () => {
  const { t } = useTranslation();
  const [currentPageSize, setCurrentPageSize] = useState<number>(10);

  const workListEntries = [
    {
      id: 1,
      name: "John Doe",
      "date-of-admission": "2024-03-20",
      cause: "Heart Attack",
      "received-by": "Admin",
      "date-created": "2024-03-19",
      compartment: "Cardiology",
      "body-type": "Male",
      "date-of-death": "2024-03-21",
    },
    {
      id: 2,
      name: "Jane Smith",
      "date-of-admission": "2024-03-21",
      cause: "Stroke",
      "received-by": "Doctor",
      "date-created": "2024-03-20",
      compartment: "Neurology",
      "body-type": "Female",
      "date-of-death": "2024-03-23",
    },
    {
      id: 3,
      name: "Alice Johnson",
      "date-of-admission": "2024-03-22",
      cause: "Accident",
      "received-by": "Nurse",
      "date-created": "2024-03-21",
      compartment: "Orthopedics",
      "body-type": "Female",
      "date-of-death": "2024-03-26",
    },
    {
      id: 4,
      name: "Bob Brown",
      "date-of-admission": "2024-03-23",
      cause: "Infection",
      "received-by": "Admin",
      "date-created": "2024-03-22",
      compartment: "Infectious Diseases",
      "body-type": "Male",
      "date-of-death": "2024-03-29",
    },
    {
      id: 5,
      name: "Eva Garcia",
      "date-of-admission": "2024-03-24",
      cause: "Allergic Reaction",
      "received-by": "Doctor",
      "date-created": "2024-03-23",
      compartment: "Allergy",
      "body-type": "Female",
      "date-of-death": "2024-03-25",
    },
    {
      id: 6,
      name: "Michael Lee",
      "date-of-admission": "2024-03-25",
      cause: "Food Poisoning",
      "received-by": "Nurse",
      "date-created": "2024-03-24",
      compartment: "Gastroenterology",
      "body-type": "Male",
      "date-of-death": "2024-03-27",
    },
    {
      id: 7,
      name: "Sophia Martinez",
      "date-of-admission": "2024-03-26",
      cause: "Burn",
      "received-by": "Admin",
      "date-created": "2024-03-25",
      compartment: "Plastic Surgery",
      "body-type": "Female",
      "date-of-death": "2024-03-28",
    },
    {
      id: 8,
      name: "William Wilson",
      "date-of-admission": "2024-03-27",
      cause: "Fracture",
      "received-by": "Doctor",
      "date-created": "2024-03-26",
      compartment: "Orthopedics",
      "body-type": "Male",
      "date-of-death": "2024-03-30",
    },
    {
      id: 9,
      name: "Olivia Taylor",
      "date-of-admission": "2024-03-28",
      cause: "Pneumonia",
      "received-by": "Nurse",
      "date-created": "2024-03-27",
      compartment: "Pulmonology",
      "body-type": "Female",
      "date-of-death": "2024-03-31",
    },
    {
      id: 10,
      name: "Daniel Anderson",
      "date-of-admission": "2024-03-29",
      cause: "Appendicitis",
      "received-by": "Admin",
      "date-created": "2024-03-28",
      compartment: "General Surgery",
      "body-type": "Male",
      "date-of-death": "2024-04-02",
    },
  ];

  const isLoading = false;

  const searchResults = workListEntries.filter(() => {
    return true; // No filtering applied for now
  });

  const {
    goTo,
    results: paginatedResults,
    currentPage,
  } = usePagination(searchResults, currentPageSize);

  const pageSizes = [10, 20, 30, 40, 50];

  const rows = useMemo(() => {
    return paginatedResults.map((entry) => ({
      ...entry,
      action: (
        <OverflowMenu
          flipped={document?.dir === "rtl"}
          aria-label="overflow-menu"
        >
          <OverflowMenuItem itemText="Add Bill" />
          <OverflowMenuItem hasDivider isDelete itemText="Request Discharge" />
        </OverflowMenu>
      ),
    }));
  }, [paginatedResults]);

  const tableColumns = [
    { id: 0, header: t("id", "IDENTIFIER"), key: "id" },
    { id: 1, header: t("compartment", "COMPARTMENT"), key: "compartment" },
    { id: 2, header: t("name", "NAME"), key: "name" },
    {
      id: 3,
      header: t("date-of-admission", "DATE OF ADMISSION"),
      key: "date-of-admission",
    },
    {
      id: 4,
      header: t("date-of-death", "DATE OF DEATH"),
      key: "date-of-death",
    },
    { id: 5, header: t("received-by", "RECEIVED BY"), key: "received-by" },
    { id: 6, header: t("body-type", "BODY TYPE"), key: "body-type" },
    { id: 7, header: t("action", "ACTION"), key: "action" },
  ];

  return isLoading ? (
    <DataTableSkeleton />
  ) : (
    <div>
      <DataTable
        rows={rows}
        headers={tableColumns}
        useZebraStyles
        overflowMenuOnHover={true}
        isSortable
      >
        {({
          rows,
          headers,
          getTableProps,
          getHeaderProps,
          getRowProps,
          getTableContainerProps,
        }) => (
          <>
            <TableContainer {...getTableContainerProps()}>
              <TableToolbar
                style={{
                  position: "static",
                  height: "3rem",
                  overflow: "visible",
                  margin: 0,
                  backgroundColor: "#f4f4f4",
                }}
              >
                <TableToolbarSearch />
              </TableToolbar>
              <Table {...getTableProps()} aria-label="sample table">
                <TableHead>
                  <TableRow>
                    {headers.map((header, i) => (
                      <TableHeader
                        key={i}
                        {...getHeaderProps({
                          header,
                        })}
                      >
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex} {...getRowProps({ row })}>
                      {row.cells.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination
                forwardText="Next page"
                backwardText="Previous page"
                page={currentPage}
                pageSize={currentPageSize}
                pageSizes={pageSizes}
                totalItems={workListEntries.length}
                onChange={({ pageSize, page }) => {
                  if (pageSize !== currentPageSize) {
                    setCurrentPageSize(pageSize);
                    goTo(1); // Go to the first page when changing page size
                  }
                  if (page !== currentPage) {
                    goTo(page);
                  }
                }}
              />
            </TableContainer>
          </>
        )}
      </DataTable>
    </div>
  );
};
