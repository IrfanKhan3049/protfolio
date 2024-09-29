import React from 'react';
import AdminLayout from '../../components/admincomponents/adminlayout/admin-layout';
import AdmiBlogTable from '../../components/admincomponents/admin-blog-components/admiblogtable';

const AdminBlogPage = () => {
  return (
    <AdminLayout>
     <AdmiBlogTable/>
    </AdminLayout>
  );
};

export default AdminBlogPage;