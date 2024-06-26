import React from "react";
import { Badge, Button, Container } from "react-bootstrap";
import DataTable from "../components/DataTable";
import useDashboard from "../hooks/useDashboard";
const headers = [
  {
    label: "ID",
    key: "id",
    onClick: ({ key, row }) => {},
    datatype: "number",
  },
  {
    label: "Name",
    key: "name",
    onClick: ({ key, row }) => {},
    renderer: ({ key, row }) => {
      return <div>{row[key]}</div>;
    },
  },

  {
    label: "Description",
    key: "description",
  },
  {
    label: "Selling Price",
    key: "selling_price",
    datatype: "number",
    renderer: ({ key, row }) => {
      return <Badge>₹{row[key]}</Badge>;
    },
  },
  {
    label: "Action",
    key: "action",
    onClick: ({ key, row }) => {},
    renderer: ({ key, row, handleDeleteRow }) => {
      return (
        <Button
          onClick={() => handleDeleteRow(row.id)}
          variant="danger"
          size="sm"
        >
          Delete
        </Button>
      );
    },
  },
];
const Dashboard = () => {
  const { products, isLoading } = useDashboard();

  return (
    <Container>
      <p>Dashboard</p>
      <DataTable
        showSearch
        showCheckBox
        headers={headers}
        rows={products}
        caption="Product Data"
      />
    </Container>
  );
};

export default Dashboard;
