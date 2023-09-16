import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Del, Get, apiHandle } from "./apihandle";

export default function Projects() {
  const [listData, setListData] = useState<any>([]);

  const deletePost = (id: any) => {
    Del(`comments/${id}`)
      .then(() => {
        console.log("Post Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getData = () => {
    Get("comments")
      .then((res) => {
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div>
        <Box className="text-center">
          <h1>Add Comment</h1>
          <Button
            className=""
            onClick={() => {
              navigate("/add");
            }}
            variant="outlined"
          >
            Add Comment
          </Button>
        </Box>
        {listData &&
          Array.isArray(listData) &&
          listData.length > 0 &&
          listData.map((x: any, i: any) => (
            <div className="p-2 m-2" key={i}>
              <div className="bg-info rounded p-2">
                <p>{x.userId}</p>
                <span className="fs-2 fw-semibold text-white">Comment {i}</span>
                <h2>{x.title}</h2>
                <p>{x.body}</p>

                <IconButton
                  onClick={() => deletePost(x.id)}
                  color="error"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    navigate(`/add/${x.id}`);
                  }}
                  color="primary"
                  aria-label="delete"
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
