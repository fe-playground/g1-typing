export function sortRank(rank) {
  return rank.sort((a, b) => a.time - b.time);
}