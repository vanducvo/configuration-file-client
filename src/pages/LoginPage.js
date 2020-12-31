import { Layout } from 'antd';
import CustomHeader from '../components/header/CustomHeader';
import LoginForm from '../components/login-form/LoginForm';
import './LoginPage.css';

const { Content } = Layout;
function LoginPage() {
  return (
    <Content className='login-container'>
      <div className='login-content'>
        <LoginForm />
      </div>
    </Content>
  );
}

export default LoginPage;
