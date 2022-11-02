import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Card from "../common/card";
import Carousel from "./carousel";
import "../../css/dashboard.css";

import {
  checkItem,
  deleteList,
  getLists,
  sendList,
} from "../../services/listService";
import auth from "../../services/authService";

const DashBoard = () => {
  const [lists, setLists] = useState([]);

  const handleSendList = async (title, itemsList) => {
    const user = auth.getCurrentUser();
    if (!user) {
      toast("Please Login");
      return;
    }
    if (itemsList.length === 0) {
      toast("Add some items");
      return;
    }
    if (title === "") {
      toast("Add title");
      return;
    }
    try {
      await sendList(title, itemsList);
      toast("Sent 😃");
      handleLists();
    } catch (ex) {
      // axios interceptor will auto cath the error as declared in my httpServices
    }
  };

  const handleItemCheck = async (listId, itemId) => {
    try {
      await checkItem(listId, itemId);
      toast("Congo for task completion");
      handleLists();
    } catch (ex) {
      // auto catch by axios interceptor
    }
  };

  const handleListRemove = async (listId) => {
    try {
      await deleteList(listId);
      toast("List Deleted");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (ex) {
      // auto catch by axios interceptor
    }
  };

  const handleLists = useCallback(async () => {
    const { data } = await getLists();
    setLists(data);
  }, []);

  useEffect(() => {
    handleLists();
  }, [handleLists]);

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <div className="dashboard">
        <Card onSend={handleSendList} />
        <Carousel
          lists={lists}
          onCheck={handleItemCheck}
          onRemove={handleListRemove}
        />
      </div>
    </div>
  );
};

export default DashBoard;
