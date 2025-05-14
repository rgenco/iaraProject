import { Prisma } from "../generated/prisma/client";
import { EntryUpload } from "../types/generalTypes";
import prisma from "../utils/prisma.server";

const createEntries = async (
  entries: EntryUpload[],
): Promise<Prisma.BatchPayload> => {
  const entryArray = entries.map((entry, idx) => {
    const {
      device,
      type,
      dateString,
      mbg,
      sgv,
      delta,
      direction,
      filtered,
      unfiltered,
      rssi,
      noise,
    } = entry;

    return {
      device: device,
      type: type,
      date: new Date(dateString),
      mbg: mbg,
      sgv: sgv,
      delta: delta,
      direction: direction,
      filtered: filtered,
      unfiltered: unfiltered,
      rssi: rssi,
      noise: noise,
    };
  });
  return prisma.entry.createMany({
    data: entryArray,
    skipDuplicates: true,
  });
};

export default {
  createEntries,
};
