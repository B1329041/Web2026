import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
function App() {
 // 紀錄目前要抓取的 API 標題，預設為 'users'
 const [title, setTitle] = useState('users');
 // 紀錄 API 回傳的資料列表
 const [lists, setLists] = useState([]);
 // 紀錄 DataGrid 需要的欄位設定
 const [columns, setColumns] = useState([]);
 // 當 title 改變時，就會觸發這個 useEffect 去呼叫 API
 useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/${title}`)
     .then((res) => res.json())
     .then((json) => {
       setLists(json); // 更新資料列表
       // --- 以下為動態產生 DataGrid 欄位的邏輯 ---
       // 如果抓回來的資料有內容，我們取第一筆資料的 key 來當作表格欄位
       if (json.length > 0) {
         const firstItem = json[0];
         const dynamicColumns = Object.keys(firstItem).map((key) => ({
           field: key,                   // 欄位對應的資料屬性
           headerName: key.toUpperCase(), // 欄位標題 (轉大寫)
           width: 150,                   // 預設欄位寬度
         }));
         setColumns(dynamicColumns);
       }
     });
 }, [title]); // 這裡的 [title] 就是簡報特別強調的 dependency，title 改變才執行
 return (
<div style={{ padding: '20px' }}>
<h1>HW#5: React DataGrid 實作</h1>
     {/* 建立三個按鈕，點擊時會改變 title state */}
<div style={{ marginBottom: '20px' }}>
<button onClick={() => setTitle('posts')} style={{ marginRight: '10px' }}>Posts</button>
<button onClick={() => setTitle('users')} style={{ marginRight: '10px' }}>Users</button>
<button onClick={() => setTitle('comments')}>Comments</button>
</div>
<h2>目前顯示：{title}</h2>
     {/* 使用 MUI 的 DataGrid 顯示資料 */}
<div style={{ height: 500, width: '100%' }}>
<DataGrid
         rows={lists}
         columns={columns}
         pageSizeOptions={[5, 10, 20]}
         initialState={{
           pagination: { paginationModel: { pageSize: 10 } },
         }}
       />
</div>
</div>
 );
}
export default App;