import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Table from "../../components/Table";
import PageTitle from "../../components/PageTitle";
import FormInput from '../../components/FormInput';

export default function Employee() {
  const [columns] = useState([
    {
      Header: "Tên nhân viên",
      Filter: <FormInput name="fullname" type="text" placeholder="Nhập tên nhân viên" />,
      accessor: "fullname",
    },
    {
      Header: "Vị trí",
      accessor: "type",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Số điện thoại",
      accessor: "phone",
    },
    {
      Header: "Trạng thái",
      accessor: "status",
      Filter: (
        <Form.Select>
          <option value="">Chọn trạng thái</option>
          <option value="1">Hoạt động</option>
          <option value="0">Ngừng hoạt động</option>
        </Form.Select>
      ),
      Cell: ({ row }: any) => {
        return (
          <div>
            {row.values.status === 1 ? "Đang hoạt động" : "Ngừng hoạt động"}
          </div>
        );
      },
    },
  ]);
  return (
    <div>
      <PageTitle
        breadCrumbItems={[
          { label: "Danh sách nhân viên", path: "/employee", active: true },
        ]}
        title={"Danh sách nhân viên"}
      />
      <Card>
        <Card.Body>
          <Table
            isSearchable
            pagination
            columns={columns}
            data={[
              {
                fullname: "Nguyễn Văn A",
                type: "Nhân viên",
                email: "",
                phone: "",
                status: 1,
              },
            ]}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

// quản lí tài khoản nội bộ

