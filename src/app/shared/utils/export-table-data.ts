import * as XLSX from 'xlsx';

const getFileName = () => {
  let timeSpan = new Date().toISOString();
  let sheetName = 'ExportResult';
  let fileName = `${sheetName}-${timeSpan}`;
  return {
    sheetName,
    fileName,
  };
};
export class TableUtil {
  static exportTableToExcel(
    tableId?: string,
    format: XLSX.BookType = 'xlsx',
    jsonData?: any[],
    exportOnlyVisibleRows = true
  ) {
    let { sheetName, fileName } = getFileName();

    if (exportOnlyVisibleRows) {
      let targetTableElm = document.getElementById(tableId);

      let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
        sheet: sheetName,
      });

      XLSX.writeFile(wb, `${fileName}.${format}`, {
        bookType: format,
      });

      return;
    }

    // convert json to sheet and export
    const ws = XLSX.utils.json_to_sheet(jsonData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws);

    XLSX.writeFile(wb, `${fileName}.${format}`, {
      bookType: format,
    });
  }
}
