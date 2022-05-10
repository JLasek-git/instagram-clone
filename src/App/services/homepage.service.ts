import { PhotoModel } from "@/Global/models/PhotoModel";

export async function getHomepagePhotos(): Promise<PhotoModel[]> {
  const photos: PhotoModel[] = [
    {
      id: "0",
      username: "_music_theory",
      photoName: "userPhoto.jpg",
      likes: 0,
      comments: 0,
    },
    {
      id: "1",
      username: "_music",
      photoName: "userPhoto.jpg",
      likes: 0,
      comments: 0,
    },
    {
      id: "2",
      username: "rpg_games",
      photoName: "userPhoto.jpg",
      likes: 0,
      comments: 0,
    },
    {
      id: "3",
      username: "test",
      photoName: "userPhoto.jpg",
      likes: 0,
      comments: 0,
    },
    {
      id: "4",
      username: "some_nickname",
      photoName: "userPhoto.jpg",
      likes: 0,
      comments: 0,
    },
  ];
  return new Promise((resolve, reject) => {
    resolve(photos);
  });
}

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
