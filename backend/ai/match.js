function matchItems(lostItem, foundItems) {
  return foundItems.filter(item =>
    item.description.toLowerCase().includes(lostItem.description.toLowerCase())
  );
}

module.exports = matchItems;