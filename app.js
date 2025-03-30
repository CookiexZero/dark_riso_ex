const style = document.createElement("style");
style.innerHTML = `
  div.trselect, td.trselect, tr.trselect td {
    background-color: #545454 !important;
  }
  body div.trselect, body td.trselect, body tr.trselect td {
    background-color: #545454 !important;
  }
  html body div.trselect, html body td.trselect, html body tr.trselect td {
    background-color: #545454 !important;
  }
    .cells .cell.trselect {
    background-color: #545454 !important;
  }
  body .cells .cell.trselect {
    background-color: #545454 !important;
  }
  html body .cells .cell.trselect {
    background-color: #545454 !important;
  }
    .ej-accordion--expanded {
    background-color: #3c3c3c !important;
  }
  body .ej-accordion--expanded {
    background-color: #3c3c3c !important;
  }
  html body .ej-accordion--expanded {
    background-color: #3c3c3c !important;
  }
    .green {
    color: #3fa149 !important;
  }
  body .green {
    color: #3fa149 !important;
  }
  html body .green {
    color: #3fa149 !important;
  }
    .red {
    color: #ad2b22 !important;
  }
  body .red {
   color: #ad2b22 !important;
  }
  html body .red {
    color: #ad2b22 !important;
  }
    .lgray {
    color: #ffffff !important;
    background-color: #242424 !important;
  }
  body .lgray {
    color: #ffffff !important;
    background-color: #242424 !important;
  }
  html body .lgray {
    color: #ffffff !important;
    background-color: #242424 !important;
  }
      .dnevnik-day__header--sub {
    color: #ffffff !important;
    background-color: #242424 !important;
  }
  body .dnevnik-day__header--sub {
    color: #ffffff !important;
    background-color: #242424 !important;
  }
  html body .dnevnik-day__header--sub {
    color: #ffffff !important;
    background-color: #242424 !important;
  }
    .ej-table>.table__section>tr, .ej-table>.table__section>tr:hover, .ej-table>tbody>tr.table__section, .ej-table>tbody>tr.table__section:hover {
    background-color: #242424 !important;
  }
  body .ej-table>.table__section>tr, .ej-table>.table__section>tr:hover, .ej-table>tbody>tr.table__section, .ej-table>tbody>tr.table__section:hover {
    background-color: #242424 !important;
  }
  html body .ej-table>.table__section>tr, .ej-table>.table__section>tr:hover, .ej-table>tbody>tr.table__section, .ej-table>tbody>tr.table__section:hover {
    background-color: #242424 !important;
  }
    .homework .lessons-row:hover, .homework .trLes:hover {
    background: #f0e5ff00 !important;
  }
    body .homework .lessons-row:hover, .homework .trLes:hover {
    background: #f0e5ff00 !important;
  }
    html body .homework .lessons-row:hover, .homework .trLes:hover {
    background: #f0e5ff00 !important;
  }
      .field.disabled, .field.disabled:focus, .field.disabled:hover, .field[disabled], .field[disabled]:focus, .field[disabled]:hover {
    background: #3c3c3c !important;
  }
    body .field.disabled, .field.disabled:focus, .field.disabled:hover, .field[disabled], .field[disabled]:focus, .field[disabled]:hover {
    background: #3c3c3c !important;
  }
    html body .field.disabled, .field.disabled:focus, .field.disabled:hover, .field[disabled], .field[disabled]:focus, .field[disabled]:hover {
    background: #3c3c3c !important;
  }
`;
document.head.appendChild(style);

// Находим элемент с классом .grid__scrollbar
const scrollbarElement = document.querySelector('.grid__scrollbar');

// Если элемент найден, удаляем его
if (scrollbarElement) {
    scrollbarElement.remove();
}