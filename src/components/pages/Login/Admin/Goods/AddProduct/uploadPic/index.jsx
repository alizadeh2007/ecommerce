import * as React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import "./upload.Module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  upDemeoPic,
  upUploadPic,
} from "../../../../../../../redux/slice/slice";
import { useSelector } from "react-redux";

export default function UploadButtons() {
  const disPatch = useDispatch();
  const { UploadPic } = useSelector((state) => state.UploadPic);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    disPatch(upDemeoPic(UploadPic));
    if (selectedImage) {
      disPatch(upUploadPic(URL.createObjectURL(selectedImage)));
    }
  }, [selectedImage]);
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <img width="200rem" src={UploadPic} />
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
          hidden
          accept="image/*"
          type="file"
        />
        <PhotoCamera className="camera" />
      </IconButton>
    </Stack>
  );
}
