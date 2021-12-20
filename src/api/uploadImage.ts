import "../firebaseConfig";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import {
  setUploadStatus,
  setUploadProgress,
  setSuccessStatus,
} from "../redux/actions/uploadProgressActions";

interface Arguments {
  img: File;
  setUploadStatus: typeof setUploadStatus;
  setUploadProgress: typeof setUploadProgress;
  setSuccessStatus: typeof setSuccessStatus;
}

const storage = getStorage();
const uploadImage = ({
  img,
  setUploadStatus,
  setUploadProgress,
  setSuccessStatus,
}: Arguments) => {
  const storageRef = ref(storage, `images/${img.name}`);
  const uploadTask = uploadBytesResumable(storageRef, img);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setSuccessStatus(false);
      setUploadStatus(true);
      setUploadProgress(progress);
    },
    (err) => {
      if (err) {
        throw new Error("Something went wrong");
      }
    },
    () => {
      setSuccessStatus(true);
      setUploadStatus(false);
      setUploadProgress(null);
    }
  );
};

export default uploadImage;
