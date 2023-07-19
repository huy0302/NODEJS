
const connection = require('../../connectDB');

function ThongKeTrongNgay(callback) {
    const sql = 'SELECT IDSanPham, sanpham.TenSanPham, SUM(cthoadon.SoLuong) as SoLuong FROM cthoadon ' +
    ' INNER JOIN hoadon ON cthoadon.ID_HoaDon = hoadon.ID ' +
    ' INNER JOIN sanpham ON sanpham.ID = cthoadon.IDSanPham' +
    ' GROUP BY IDSanPham '
    // const sql = 'SELECT IDSanPham, sanpham.TenSanPham, SUM(cthoadon.SoLuong) as SoLuong FROM cthoadon ' +
    // ' INNER JOIN hoadon ON cthoadon.ID_HoaDon = hoadon.ID ' +
    // ' INNER JOIN sanpham ON sanpham.ID = cthoadon.IDSanPham' +
    // ' WHERE day(NgayMua) = day(now()) AND month(NgayMua) = month(now()) AND year(NgayMua) = year(now()) '+
    // ' GROUP BY IDSanPham '
    connection.query(
        sql,
        function(err, results) {
            if(err) throw err;
            return callback(results);
        }
    );
}

module.exports = {ThongKeTrongNgay};