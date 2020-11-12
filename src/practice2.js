const inject = (items, sections) => {
  let itemsList = []

  for (let section of sections) {
    const {
      content,
      index
    } = section
    let tempItem = [...items]
    tempItem.splice(index, 0, content)
    itemsList.push(tempItem)
  }

  let res = []
  for (let i = 0; i < itemsList.length; i++) {
    res = sort(res, itemsList[i]);
  }
  return res
}

const sort = (arr1, arr2) => {
  let index1 = 0,
    index2 = 0;
  let arr = [];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] === arr2[index2]) {
      arr.push(arr1[index1]);
      index1++;
      index2++;
    } else {
      if (arr1[index1 + 1] === arr2[index2]) {
        arr.push(arr1[index1]);
        index1++;
      } else if (arr1[index1] === arr2[index2 + 1]) {
        arr.push(arr2[index2]);
        index2++;
      } else {
        arr.push(arr1[index1]);
        arr.push(arr2[index2]);
        index1++;
        index2++;
      }
    }
  }

  while (index1 < arr1.length) {
    arr.push(arr1.slice(index1, index1 + 1)[0]);
    index1++;
  }
  while (index2 < arr2.length) { //当arr1的元素已全部存入arr中,则直接将arr2剩余的所有元素依次存入arr
    arr.push(arr2.slice(index2, index2 + 1)[0]);
    index2++;
  }
  return arr;
}

export {
  inject
}