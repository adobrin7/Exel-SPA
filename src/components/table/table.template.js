const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `<div class="exel__table-cell" contenteditable></div>`;
}

function toColumn(col) {
  return `
    <div class="exel__table-column column">${col}</div>
  `;
}

function createRow(content, idx = '') {
  return `
    <div class="exel__table-row row">
      <div class="row__info">${idx}</div>
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

  for (let i = 0; i < rowsCount; i++) {
    const cells = createCell().repeat(colsCount);
    const cellIdx = (i + 1).toString();
    rows.push(createRow(cells, cellIdx));
  }
  return rows.join('');
}
