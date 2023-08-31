import React, { useState } from "react";
import "./electricity.css";
import DataTableAC from "../../components/dataTableAC/DataTableAC";
import Add from "../../components/add/Add";
import { electricity  } from "../../data.ts";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "roomNumber",
    type: "string",
    headerName: "เลขห้อง",
    width: 150,
  },
  {
    field: "status",
    type: "string",
    headerName: "สถานะ",
    width: 200,
  },
  {
    field: "previousMeter",
    headerName: "เลขมิเตอร์ก่อนหน้า",
    type: "string",
    width: 200,
  },
  {
    field: "currentMeter",
    headerName: "เลขมิเตอร์ปัจจุบัน",
    type: "string",
    width: 200,
  },
  {
    field: "consumptionDifference",
    headerName: "ส่วนต่าง",
    type: "string",
    width: 200,
  },
];

const Detail = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="products">
        <div className="info">
          <h1>ค่าไฟฟ้า  เดือน สิงหาคม 2566</h1>
        </div>
        <DataTableAC slug="products" columns={columns} rows={electricity} />
        {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
      </div>
    );
  };
  
  export default Detail;
