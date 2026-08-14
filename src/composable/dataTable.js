import DataTable from 'datatables.net-bs5';

const setupDataTable = () => {   
        new DataTable('.table-default', {
            searching: false,//搜尋欄
            ordering: false,//header 的排序功能
            paging: false,
            scrollCollapse: true,//開啟凍結
            scrollY: '200px',//卷軸高度
            info: false, // 總比數
           
           
        });
};

export default setupDataTable;
