const parseData = (data) => {
  const column = [];
  const obj = [];
  for (let i = 0; i < data.column.length; i++ ) {
    const { name } = data.column[i];
    column.push(name);
  }

  for (let i = 0; i < data.data.length; i++) {
    const myObj = {};
    for (let j = 0; j < column.length; j++) {
      myObj[column[j]] = data.data[i][j];
    }
    obj.push(myObj)
  }
  return obj;
}
export { parseData };
