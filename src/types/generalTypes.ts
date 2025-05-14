export type Author = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  books?: Book[];
};

export type Book = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  isFiction: boolean;
  datePublished: Date;
  authorId: number;
};

export type EntryUpload = {
  device: string;
  type: string;
  date: number;
  dateString: string;
  mbg: number;
  sgv: number;
  delta: number;
  direction: string;
  filtered: number;
  unfiltered: number;
  rssi: number;
  noise: number;
  sysTime: string;
};

export type Entry = {
  id: number;
  device: string;
  type: string;
  date: Date;
  mbg: number;
  sgv: number;
  delta: number;
  direction: string;
  filtered: number;
  unfiltered: number;
  rssi: number;
  noise: number;
  updatedAt: Date;
};
