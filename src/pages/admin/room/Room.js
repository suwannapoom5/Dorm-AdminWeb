import React, { useState, useEffect } from "react";
import "./room.css";
import DataTableAC from "../../../components/dataTableAC/DataTableAC"; 
import { firestore } from "../../../firebase";

const columns = [
  { field: "id", headerName: "ID", width: 100 }, 
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
  //const [open, setOpen] = useState(false);
  const [roomData, setRoomData] = useState([]); 

  useEffect(() => {
    fetchDataRoom();
  }, []); 

  const fetchDataRoom = async () => {
    try {
      const collRef = firestore
        .collection("rooms")
      const querySnapshot = await collRef.get();
      const data = querySnapshot.docs.map((doc, index) => ({
        id: index + 1, 
        roomNumber: doc.id,
        status: doc.data().status,
      }));
      setRoomData(data);
    } catch (error) {
      console.log("เกิดข้อผิดพลาดในการดึงข้อมูล : ", error);
    }
  };

  return (
    <div>
      <div className="info">
        <h1>ผังห้องพัก</h1>
      </div>
      <DataTableAC slug="room" columns={columns} rows={roomData} fetchDataRoom={fetchDataRoom} />
    </div>

    
  );
};

export default Room;