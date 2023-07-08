import { ApiCaller } from "@/Config/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send login request to the server
    console.log("Email:", email);
    console.log("Password:", password);
    ApiCaller({
      url: "/users",
      method: "GET",
    })
      .then((res) => {
        // lay data tu db ve de so sanh
        const data = res.data;
        if (data.length > 0) {
          // tim xem email co trong db khong
          const index = data.findIndex((i) => i.email === email.trim());
          if (index !== -1) {
            // neu co thi so sanh password
            const DBDatauser = data[index];
            const isCorrectPass = password === DBDatauser.password;
            if (isCorrectPass) {
              navigate("/dashboard/home");
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sai mật khẩu !",
                footer: '<a href="">Bạn quên mật khẩu ?</a>',
              });
            }
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Sai tài khoản!",
              footer: '<a href="">Bạn đã đăng ký tài khoản với email này?</a>',
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Sai toàn khoản hoặc mật khẩu",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // insert account sample

  // ApiCaller({
  //   url: "/users",
  //   method: "POST",
  //   data: {
  //     "id": 96969696969,
  //     "name": "tessst",
  //     "password": "wwwwww",
  //     "email": "test@gmail.com"
  //   }
  // }).then(res => {
  //   console.log(res);

  // }).catch(err => {

  // })

  // return (
  //   <div className="flex justify-center items-center h-screen">
  //     <Card className="w-96">
  //       <CardHeader
  //         variant="gradient"
  //         color="blue"
  //         className="mb-4 grid h-28 place-items-center"
  //       >
  //         <Typography variant="h3" color="white">
  //           Sign In
  //         </Typography>
  //       </CardHeader>
  //       <CardBody className="flex flex-col gap-4">
  //         <Input label="Email" size="lg" onChange={handleEmailChange} />
  //         <Input label="Password" size="lg" type="password" onChange={handlePasswordChange} />
  //         <div className="-ml-2.5">
  //           <Checkbox label="Remember Me" />
  //         </div>
  //       </CardBody>
  //       <CardFooter className="pt-0">
  //         <Button variant="gradient" fullWidth onClick={handleSubmit}>
  //           Sign In
  //         </Button>
  //         <Typography variant="small" className="mt-6 flex justify-center">
  //           Don't have an account?
  //           <Typography
  //             as="a"
  //             href="#signup"
  //             variant="small"
  //             color="blue"
  //             className="ml-1 font-bold"
  //             onClick = {(e)=> handleSignUp(e)}
  //           >
  //             Sign up
  //           </Typography>
  //         </Typography>
  //       </CardFooter>
  //     </Card>
  //   </div>

  // );

  return (
    <div
      className="grid grid-cols-2 gap-4 h-screen"
      style={{
        backgroundImage: `url(${"../img/background.jpg"})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <img
          src="../img/TaskMasterLogo.png"
          style={{
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            msTransform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div>
        <Card
          className="w-96"
          style={{
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            msTransform: "translate(-50%, -50%)",
          }}
        >
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Đăng nhập
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Tài khoản" size="lg" onChange={handleEmailChange} />
            <Input
              label="Mật khẩu"
              size="lg"
              type="password"
              onChange={handlePasswordChange}
            />
            <div className="-ml-2.5">
              <Checkbox label="Duy trì phiên đăng nhập" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleSubmit}>
              Đăng nhập
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Chưa có tài khoản?
              <Typography
                as="a"
                href="/credendials/signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={(e) => handleSignUp(e)}
              >
                Đăng ký
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
