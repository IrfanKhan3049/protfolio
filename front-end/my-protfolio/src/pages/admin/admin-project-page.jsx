import React from 'react';
import AdminLayout from '../../components/admincomponents/adminlayout/admin-layout';
import AdminProjectTable from '../../components/admincomponents/admin-project-components/adminprojecttable';

const AdminProjectPage = () => {
  return (
    <AdminLayout>
      <AdminProjectTable/>
    </AdminLayout>
  );
};

export default AdminProjectPage;