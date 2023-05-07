import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRides } from "../store/actions/actionCreator";
import TableRide from "../components/TableRide";


export default function RidesList() {
  const { rides, ridesLoading } = useSelector((state) => {
    return state.ridesReducers
  });

  const ridesItem = rides
  const loading = ridesLoading;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRides())
  }, []);


  return (
    <div className="container p-8 align-middle">
      {<TableRide items={ridesItem} />}
    </div>
  );
}
