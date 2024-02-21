
interface AuthErrorMessageProps {
    msg : string;
}

const AuthErrorMessage: React.FC<AuthErrorMessageProps> = ({ msg }) => {
    return (
        <span className={`bg-red-600 p-4 text-white rounded-2xl text-center`} >
            {msg}
        </span>
    );
};
export default AuthErrorMessage;