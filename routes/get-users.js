import { Router } from "express";
import getUsersData from "../lib/getUsersdata.js";
const getUsers = Router();
getUsers.get("/get-users", async (req, res) => {
  const fetchUsersData = await getUsersData();
  if (fetchUsersData) {
    res.send(fetchUsersData);
  } else {
    res.send(null);
  }
});
export default getUsers;
