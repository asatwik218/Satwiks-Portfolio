import { Timestamp } from "firebase/firestore";

export interface ProjectData {
  id:string
  title: string;
  description: string;
  dateAdded:Timestamp;
  tags: string[];
  noOfLikes: number;
  noOfComments?: number;
  videoURL?: string;
  imageURL?:string
  githubURL: string;
  deploymentURL?: string;
}

