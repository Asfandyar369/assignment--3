'use strict';

var gridOptionsForDownload = {
    defaultColDef: {
        editTable: true,
        resizeAble: true,
        minWidth: 100,
        flex: 1,
    },

    suppressExcelExport: true,
    popUpParent: document.body,

    columnDefs: [
        {
            headerName: "Make", field: "make",
            sortable: true,
            filter: true,
        },

        {
            headerName: "Model", field: "model",
            sortable: true,
            filter: true
        },

        {
            headerName: "Price", field: "price",
            sortable: true,
            filter: true,
            aggFunc: 'sum',
        }
    ],

    rowData: [
        {
            make: "Toyota", model: "Celica", price: "35000"
        },

        {
            make: "Ford", model: "Mondeo", price: "32000"
        },

        {
            make: "Porsche", model: "Boxter", price: "72000"
        }
    ]

}

//Changes
var gridOptions = {
    columnDefs: gridOptionsForDownload.columnDefs,
    rowData: gridOptionsForDownload.rowData,
};


function onBtnExport() {
    gridOptions.api.exportDataAsCsv();
}
function onBtnUpdate() {
    document.querySelector('#csvResult').value = gridOptions.api.getDataAsCsv();
}


document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});
const hideBtn = document.querySelector('.hide__btn');
const showBtn = document.querySelector('.show__btn');
hideBtn.addEventListener('click', function () {
    gridOptions.columnApi.setColumnVisible('make', false);
})


showBtn.addEventListener('click', function () {
    gridOptions.columnApi.setColumnVisible('make', true);
})