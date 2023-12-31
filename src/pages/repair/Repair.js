import React, { useState } from "react";
import "./repair.css";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { rooms  } from "../../data.ts";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "roomNumber",
    type: "string",
    headerName: "เลขห้อง",
    width: 150,
  },
  {
    field: "name",
    type: "string",
    headerName: "ชื่อ - นามสกุล ",
    width: 200,
  },
  {
    field: "details",
    type: "string",
    headerName: "รายละเอียด",
    width: 200,
  },
  {
    field: "img",
    headerName: "รูป",
    width: 150,
    renderCell: (params) => {
      return React.createElement("img", { src: params.row.img || "/noavatar.png", alt: "" });
    },
  },
  {
    field: "phoneNumber",
    headerName: "เบอร์โทร",
    type: "string",
    width: 200,
  },
  {
    field: "status",
    headerName: "สถานะ",
    width: 200,
    type: "string",
  },
];

const Repair = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="products">
        <div className="info">
          <h1>เเจ้งซ่อม</h1>
        </div>
        <DataTable slug="products" columns={columns} rows={rooms} />
        {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
      </div>
    );
  };
  
  export default Repair;
