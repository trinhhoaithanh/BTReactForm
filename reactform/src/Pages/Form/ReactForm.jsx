import React, { Component } from 'react'
import TableSV from './TableSV'

export default class ReactForm extends Component {
    state={
        arrSV:[
            {id:"1",name:"Nguyễn Văn A",soDienThoai:"09381111111",email:"nguyenvana@gmail.com"},
            {id:"2",name:"Nguyễn Văn B",soDienThoai:"093822232232",email:"nguyenvanb@gmail.com"}
        ],
        formValue:{
            id:'',
            name:'',
            soDienThoai:'',
            email:''
        },
           
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let arrSV = this.state.arrSV;
        arrSV.push({...this.state.formValue});
        this.setState({
            arrSV:arrSV
        })
    }
    handleChangeInput=(e)=>{
        let {name,value} =e.target;
        let newFormValue = this.state.formValue;
        newFormValue[name] =value;
        this.setState({
            formValue:newFormValue
        })
    }
    handelDelSV = (svClick)=>{
        let arrSV = this.state.arrSV.filter(sv=>sv.id!==svClick);
        this.setState({
            arrSV:arrSV
        })
    }
    handleEditSV=(svClick)=>{
        this.setState({
            formValue:svClick
        })
    }
    handleUpdateSV = ()=>{
        let {arrSV,formValue} = this.state;
        let svUpdate = arrSV.find(sv=>sv.id===formValue.id);
        if(svUpdate){
            for (let key in svUpdate){
                if(key!=='id'){
                    svUpdate[key] = formValue[key];
                }
            }
        }
        this.setState({
            arrSV:arrSV
        })
    }
  render() {
    let {formValue} = this.state;
    return (
      <>
       <form className='container' onSubmit={this.handleSubmit}>
        <h1 className='text-white bg-dark p-3'>Thông Tin Sinh Viên</h1>
        <div className='card p-2'>
            <div className='card-body'>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Mã SV</p>
                        <input onInput={this.handleChangeInput} value={formValue.id} name='id' className='form-control' />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Họ tên</p>
                        <input onInput={this.handleChangeInput} value={formValue.name} name='name' className='form-control' />
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Số Điện Thoại</p>
                        <input onInput={this.handleChangeInput} value={formValue.soDienThoai} name='soDienThoai' className='form-control' />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <p>Email</p>
                        <input onInput={this.handleChangeInput} value={formValue.email} name='email' className='form-control' />
                    </div>
                </div>
            </div>
            </div>
            <div className='card-footer'>
                <button className='btn btn-success' type='submit'>
                    Thêm Sinh Viên
                </button>
                <button type='button' className='btn btn-warning ms-2 text-white' onClick={()=>{
                    this.handleUpdateSV();
                    //để type là button mới không tạo ra cái mới type là submit thì tạo ra cái mới
                }}>
                   Cập Nhật
                </button>
            </div>
            
        </div>
    
        
       </form>
        <div className='container mt-2'>
            <TableSV handleEditSV={this.handleEditSV} handleDelSV={this.handelDelSV} arrSV={this.state.arrSV}/>
        </div>
      </>
    )
  }
}
