import { Layout } from 'antd';
import RegisterForm from '../components/register-form/RegisterForm';
import './RegisterPage.css';

const { Content } = Layout;
function RegisterPage() {
  return (
    <Content className="register-container">
      <div className="register-content">
        <RegisterForm />
      </div>
    </Content>
  );
}

export default RegisterPage;
