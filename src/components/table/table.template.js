const CODES = {
  A: 65,
  Z: 90,
};

function toCell(row) {
  return function(_, col) {
    return `
    <div class="exel__table-cell"
      contenteditable 
      data-col="${col}"
      data-id="${row}:${col}"
    ></div>`;
  };
}

function toColumn(col, idx) {
  return `
    <div class="exel__table-column column" 
      data-type="resizable" 
      data-col="${idx}">
      ${col}
      <div class="column_resize" data-resize="col"></div>
    </div>
  `;
}

function createRow(content, idx = '') {
  const resizer = idx ? `<div class="row_resize" data-resize="row"></div>` : '';
  return `
    <div class="exel__table-row row" data-type="resizable">
      <div class="row__info">
        ${idx}
        ${resizer}
      </div>
      <div class="row__data">${content}</div>  
    </div>
  `;
}

function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');
  rows.push(createRow(cols));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('');
    const cellIdx = (row + 1).toString();
    rows.push(createRow(cells, cellIdx));
  }
  return rows.join('');
}
