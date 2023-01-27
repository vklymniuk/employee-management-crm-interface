import { ACTION_LOGS } from 'consts';

function getChanges(field, oldData, newData) {
  const { COLLECTIONS } = ACTION_LOGS;

  const baseChanges = {
    previous: oldData[field],
    current: newData[field]
  }
  const key = Object.keys(COLLECTIONS)
    .find((p) => field.toLowerCase().endsWith(p.toLowerCase()));
  if (key) {
    const collection = COLLECTIONS[key];

    const oldRecord = collection[oldData[field]]
    const newRecord = collection[newData[field]]
    return {
      previous: oldRecord,
      current: newRecord,
    }
  }
  return baseChanges
}

export default getChanges