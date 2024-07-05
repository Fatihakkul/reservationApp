import Components from '../../components';

const Register: React.FC = () => {
  return (
    <Components.Container full>
      <Components.Header title="Kayıt Ol" goBack/>
      <Components.RegisterForm />
    </Components.Container>
  );
};
export default Register;
