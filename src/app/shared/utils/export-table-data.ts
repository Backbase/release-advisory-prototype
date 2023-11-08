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

    let wb = null;

    if (exportOnlyVisibleRows) {
      let targetTableElm = document.getElementById(tableId);

      wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
        sheet: sheetName,
      });
    } else {
      // convert json to sheet and export
      const ws = XLSX.utils.json_to_sheet(
        jsonData.map((item) => ({
          Calver: item.calVer,
          Product: item.product,
          Discipline: item.discipline,
          'Change Type': item.changeType.name,
          Version: item.version,
          Title: item.title,
          Description: item.description,
        }))
      );
      wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws);
    }

    if (!wb) {
      console.error('No workbook created for table export.');
      return;
    }
    XLSX.writeFile(wb, `${fileName}.${format}`, {
      bookType: format,
    });
  }
}
