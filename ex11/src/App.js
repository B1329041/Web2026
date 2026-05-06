import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
function App() {
 return (
<div style={{ textAlign: 'center', marginTop: '100px' }}>
     {/* 根據作業 Page 49 的呈現要求 */}
<h1 style={{ color: 'red', fontSize: '60px' }}>hello CGU!!</h1>
<p style={{ fontSize: '24px' }}>Material Kit 效果 可愛的按鈕</p>
     {/* 根據作業 Page 48 的按鈕邏輯 */}
<div>
<IconButton color="primary">
<AddShoppingCartIcon />
</IconButton>
<IconButton color="primary">
<DeleteIcon />
</IconButton>
<IconButton color="primary">
<AlarmIcon />
</IconButton>
</div>
</div>
 );
}
export default App;
