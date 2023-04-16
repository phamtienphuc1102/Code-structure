import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {}

const HomePage = (props: Props) => {

  const handleSuccess = () => {
    toast.success('Đăng nhập thành công!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  React.useEffect(() => {
    handleSuccess();
  })
  return (
    <div>
      HomePage
      <ToastContainer/>
    </div>
  )
};

export default HomePage;
