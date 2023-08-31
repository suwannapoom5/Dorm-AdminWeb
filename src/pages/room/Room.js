import React, { useState } from "react";
import "./room.css";
import DataTableAC from "../../components/dataTableAC/DataTableAC";
import Add from "../../components/add/Add";
import { electricity  } from "../../data.ts";

const columns = [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "roomNumber",
    type: "string",
    headerName: "เลขห้อง",
    width: 400,
  },
  {
    field: "status",
    type: "string",
    headerName: "สถานะ",
    width: 400,
  },
];

const Room = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="products">
        <div className="info">
          <h1>ผังห้องพัก</h1>
        </div>
        <DataTableAC slug="products" columns={columns} rows={electricity} />
        {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
      </div>
    );
  };
  
  export default Room;
