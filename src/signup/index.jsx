import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ApiCaller } from '@/Config/axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true); // State mới để kiểm tra tính hợp lệ của mật khẩu
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(newPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/login")
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here, e.g., send registration request to the server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    ApiCaller({
      url: "/users",
      method: "GET"
    }).then(res => {
      const data = res.data;
      //Lất id
      const id = data.reduce((max, item) => {
        if (item.id > max) {
          return item.id;
        } else {
          return max + 1;
        }
      }, 0);
      if (data.length > 0) {
        const checkEmail = data.findIndex(i => i.email === email.trim());
        if (checkEmail !== -1) {
          if (password.length >= 8) {
            ApiCaller({
              url: "/users",
              method: "POST",
              data: {
                "id": id,
                "name": name,
                "password": password,
                "email": email,
              }
            }).then(res => {
              console.log(res);

            }).catch(err => {

            })
          } else {
            Swal.fire('Vui lòng đặt mật khẩu tối thiểu 8 ký tự')
          }
        } else {
          Swal.fire('Email đã được đăng ký tài khoản. Vui lòng đăng nhập !')
        }

      } else {
        ApiCaller({
          url: "/users",
          method: "POST",
          data: {
            "id": id,
            "name": name,
            "password": password,
            "email": email,
          }
        }).then(res => {
          console.log(res);

        }).catch(err => {

        })
      }

    })


    navigate('/login'); // Redirect to login page after successful registration
  };

  // return (
  //   <div className="flex justify-center items-center h-screen">
  //     <Card color="transparent" shadow={false}>
  //       <Typography variant="h4" color="blue-gray">
  //         Sign Up
  //       </Typography>
  //       <Typography color="gray" className="mt-1 font-normal">
  //         Enter your details to register.
  //       </Typography>
  //       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
  //         <div className="mb-4 flex flex-col gap-6">
  //           <Input size="lg" label="Name" />
  //           <Input size="lg" label="Email" />
  //           <Input type="password" size="lg" onChange={handlePasswordChange} label="Password" value={password} />
            // {!isPasswordValid && (
            //   <Typography color="red" className="mt-1 font-normal">
            //     Mật khẩu phải có ít nhất 8 ký tự!
            //   </Typography>
            // )}
  //         </div>
  //         <Checkbox
  //           label={
  //             (
  //               <Typography
  //                 variant="small"
  //                 color="gray"
  //                 className="flex items-center font-normal"
  //               >
  //                 I agree the
  //                 <a
  //                   href="#"
  //                   className="font-medium transition-colors hover:text-blue-500"
  //                 >
  //                   &nbsp;Terms and Conditions
  //                 </a>
  //               </Typography>
  //             )
  //           }
  //           containerProps={{ className: "-ml-2.5" }}
  //         />
  //         <Button className="mt-6" fullWidth onClick={handleSubmit}>
  //           Register
  //         </Button>
  //         <Typography color="gray" className="mt-4 text-center font-normal">
  //           Already have an account?{" "}
  //           <a
  //             href="#"
  //             className="font-medium text-blue-500 transition-colors hover:text-blue-700"
  //           >
  //             Sign In
  //           </a>
  //         </Typography>
  //       </form>
  //     </Card>
  //   </div>
  // );

  
  return (
    <div className="grid grid-cols-2 gap-4 h-screen" style={{
      backgroundImage: `url(${'/public/img/background.jpg'})`,
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
    }}>
      <div>
        <img src="/public/img/TaskMasterLogo.png" style={{
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          msTransform: 'translate(-50%, -50%)'
        }} />
      </div>
      <div>
        <Card className="w-96" style={{
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          msTransform: 'translate(-50%, -50%)'
        }}>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Đăng ký
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Họ tên" size="lg" />
            <Input label="Tài khoản" size="lg" />
            <Input label="Mật khẩu" size="lg" onChange={handlePasswordChange} value={password} />
            {!isPasswordValid && (
              <Typography color="red" className="mt-1 font-normal">
                Mật khẩu phải có ít nhất 8 ký tự!
              </Typography>
            )}
            <Input label="Nhập lại mật khẩu" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Duy trì phiên đăng nhập" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleSubmit}>
              Đăng ký
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Đã có tài khoản?
              <Typography
                as="a"
                href="/credendials/login"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick = {(e)=> handleSignIn(e)}
              >
                Đăng nhập
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
