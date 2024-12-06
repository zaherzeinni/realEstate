'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { message, Button } from 'antd'
import useSWR from 'swr'
 import { PageLayout } from "@/layouts";
 import AdminMainLayout from "@/components/Site/dashboardLayout";
 import { CircularLoading as Loading } from "@/components/loading";
import useBuyguides from '@/hooks/useBuyguides';

interface Buyguide {
  _id: string
  title: string
  titlefr: string
}

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function BuyguideList() {
  const router = useRouter()
  const { data: buyguides, error, isLoading, mutate } = useSWR('/api/buyguide', fetcher)
  const [isDeleting, setIsDeleting] = useState(false)

  if (error) return <div>Failed to load buyguides</div>
  if (isLoading) return <Loading />

  const handleDelete = async (id: string) => {
    try {
      setIsDeleting(true)
      await axios.delete(`/api/buyguide/${id}`)
      message.success('Buyguide deleted successfully')
      mutate()
    } catch (error) {
      console.error('Error deleting buyguide:', error)
      message.error('Error deleting buyguide')
    } finally {
      setIsDeleting(false)
    }
  }

  console.log(buyguides)
  return (
    <AdminMainLayout>
      <PageLayout title="Buyguides">
        <div className="flex justify-end mb-4">
          <Link href="/admin/buyguide/create" passHref>
            <Button type="primary" className='text-white bg-blue-200 hover:bg-blue-400'>Add New Buyguide</Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {buyguides && buyguides.length > 0 ? (
            buyguides.map((guide: Buyguide) => (
              <div key={guide._id} className="p-4 border rounded shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{guide.title}</h3>
                    <p className="text-gray-600">{guide.titlefr}</p>
                  </div>
                  <div className="space-x-2">
                    <Link href={`/admin/buyguide/${guide._id}`} passHref>
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      danger
                      onClick={() => handleDelete(guide._id)}
                      disabled={isDeleting}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4">
              No buyguides found
            </div>
          )}
        </div>
      </PageLayout>
    </AdminMainLayout>
  )
}

// import Head from "next/head";
// import useAuth from "@/hooks/useAuth";
// import NotFound from "@/pages/404";
// import { PageLayout } from "@/layouts";
// import AdminMainLayout from "@/components/Site/dashboardLayout";
// import { Button } from "@material-ui/core";
// import Link from "next/link";
// import useBuyguides from "@/hooks/useBuyguides";
// import { message } from "antd";
// import axios from "axios";

// export default function BuyguideListPage() {
//   const { user } = useAuth({
//     redirectTo: "/auth/login",
//     redirectIfFound: false,
//   });

//   const { data: buyguides, mutate } = useBuyguides();

//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete(`/api/buyguide/${id}`);
//       message.success("Buyguide deleted successfully");
//       mutate();
//     } catch (error) {
//       message.error("Error deleting buyguide");
//     }
//   };

//   if (!user || user.role !== "admin") return <NotFound />;

//   return (
//     <div dir="ltr" className="cart-area !bg-white">
//       <Head>
//         <title>Buyguides List</title>
//       </Head>
//       <AdminMainLayout>
//         <PageLayout title="Buyguides">
//           <div className="flex justify-end mb-4">
//             <Link href="/admin/buyguide/create">
//               <Button variant="contained" color="primary">
//                 Add New Buyguide
//               </Button>
//             </Link>
//           </div>

//           <div className="grid gap-4">
//             {buyguides?.map((guide) => (
//               <div key={guide._id} className="p-4 border rounded shadow-sm">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h3 className="text-xl font-semibold">{guide.title}</h3>
//                     <p className="text-gray-600">{guide.titlefr}</p>
//                   </div>
//                   <div className="space-x-2">
//                     <Link href={`/admin/buyguide/${guide._id}`}>
//                       <Button variant="outlined" color="primary">
//                         Edit
//                       </Button>
//                     </Link>
//                     <Button 
//                       variant="outlined" 
//                       color="secondary"
//                       onClick={() => handleDelete(guide._id)}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </PageLayout>
//       </AdminMainLayout>
//     </div>
//   );
// } 