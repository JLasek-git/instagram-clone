import { IPhoto } from "../interfaces/IPhoto";

export class PhotoModel implements IPhoto {
  id = "";
  username = "";
  photoName = "";
  likes = 0;
  comments = 0;
}
