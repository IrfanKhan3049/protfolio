import React from 'react';
import AdminLayout from '../../components/admincomponents/adminlayout/admin-layout';
import AdminContactTable from '../../components/admincomponents/admin-contact-components/admincontacttable';

const AdminContactPage = () => {
  return (
    <AdminLayout>
      <AdminContactTable/>
    </AdminLayout>
  );
};

export default AdminContactPage;