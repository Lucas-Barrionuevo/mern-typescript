import { RequestHandler } from "express";
import Video from "./Video";
import { Types } from "mongoose";

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The URL already exist" });
  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(204).json();
  }
  const videoFound = await Video.findById(id);
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};
export const deleteVideo: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(204).json();
  }
  const videoFound = await Video.findByIdAndDelete(id);
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};

export const updateVideo: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(204).json();
  }
  const videoUpdated = await Video.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!videoUpdated) return res.status(204).json();
  return res.json(videoUpdated);
};
