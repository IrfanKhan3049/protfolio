import React from 'react';
import Layout from '../components/layout/layout';
import prjctimg1 from "../assets/img/prjctimg1.jpg"

const BlogDetailsPage = (props) => {
  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto bg-secondery rounded-3xl py-10  mt-10 ">
        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] mx-auto  bg-white flex flex-col items-center gap-5 rounded-3xl ">
          <img className="w-full rounded-3xl " src={prjctimg1} alt="" />
          <p className=" text-base font-semibold p-5">jfhdsjkfhdkjh</p>
          <p className="px-5 pb-5 mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tempora provident magnam fuga commodi et, officiis sunt, repellendus aspernatur qui neque rem corrupti omnis odit. Velit ad totam, molestiae animi omnis enim optio, ipsa aliquid autem perferendis alias, voluptates illo. Possimus ipsa unde quod, quo deserunt optio perferendis dicta illum, enim sint distinctio! Cupiditate enim ipsum incidunt impedit omnis molestiae harum esse asperiores praesentium veniam suscipit mollitia, veritatis ab labore, placeat tempora deleniti at quaerat animi facere modi fugit tenetur ea! Quidem totam iure modi! Corporis repudiandae veniam temporibus fugiat eaque assumenda iure aliquid tenetur. Beatae repellendus quam alias. Nisi.</p>

        </div>
        

      </div>
      
    </Layout>
  );
};

export default BlogDetailsPage;