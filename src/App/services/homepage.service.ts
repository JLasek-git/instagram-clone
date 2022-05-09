import { UserShortModel } from "../models/UserShortModel";

export async function getUserShorts(): Promise<UserShortModel[]> {
  const usersShorts: UserShortModel[] = [
    {
      username: "Username",
      photoName: "userPhoto.jpg",
    },
    {
      username: "Username",
      photoName: "userPhoto.jpg",
    },
    {
      username: "Username",
      photoName: "userPhoto.jpg",
    },
    {
      username: "Username",
      photoName: "userPhoto.jpg",
    },
    {
      username: "Username",
      photoName: "userPhoto.jpg",
    },
    {
      username: "Username",
      photoName: "userPhoto.jpg",
    },
    {
      username: "Username",
      photoName: "userPhoto.jpg",
    },
  ];

  return new Promise((resolve, reject) => {
    resolve(usersShorts);
  });
}
