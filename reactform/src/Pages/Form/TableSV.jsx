import React, { Component } from "react";

export default class TableSV extends Component {
  render() {
    const { arrSV, handleDelSV, handleEditSV } = this.props;
    return (
      <div>
        <table className="table mt-3">
          <thead>
            <tr className="table-dark">
              <th scope="row">Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrSV.map(({id,name,soDienThoai,email},index)=>{
                return <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{soDienThoai}</td>
                    <td>{email}</td>
                    <td>
                        <button className="btn btn-danger mx-2" onClick={()=>{
                          handleDelSV(id);
                        }}>Xóa</button>
                        <button className="btn btn-primary" onClick={()=>{
                          let svClick = {
                            id,
                            name,
                            soDienThoai,
                            email

                          };
                          handleEditSV(svClick);
                        }}>Sửa</button>
                    </td>

                </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
