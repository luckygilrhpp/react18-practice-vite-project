import "./index.scss";
import { Card, Button, Input, Form, message } from "antd";
import loginLogo from "../../assets/img/loginLogo.png";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/modules/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);
    //触发异步action fetchLogin
    await dispatch(fetchLogin(values));
    //跳转到首页
    navigate("/");
    //提示用户登陆成功
    message.success("登陆成功");
  };

  return (
    <div className="login">
      <Card className="login_container">
        <img className="login_logo" src={loginLogo} alt="登录" />
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="mobile"
            //多条校验逻辑 先校验第一条 顺序校验
            rules={[
              {
                required: true,
                message: "请输入手机号",
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号格式不正确",
                validateTrigger: "onBlur",
              },
            ]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
            ]}
          >
            <Input placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login_btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
