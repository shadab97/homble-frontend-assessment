import React from "react";
import { Badge, Button, Container, Spinner } from "react-bootstrap";
import DataTable from "../components/DataTable";
import useDashboard from "../hooks/useDashboard";
const headers = [
  {
    label: "ID",
    key: "id",
    onClick: ({ key, row }) => {},
    datatype: "number", // this help us in sorting data according to datatype default to string
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
      {isLoading !== true ? (
        <DataTable
          showSearch
          headers={headers}
          rows={products}
          caption="Product Data"
        />
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};

export default Dashboard;
