
interface AuthInputProps  {
    newState : (state : string) => void,
    label : string,
    isPassword : boolean
    isEmail : boolean

};
export default function AuthInput(props : AuthInputProps){
    return (
        <div className="flex flex-col justify-between items-start">
            <label >{props.label} </label>
            <input  onChange={(e) => props.newState(e.currentTarget.value)}  
            type={props.isEmail ? 'email' : (props.isPassword ? 'password' : 'text')}
            
            className="border-gray-600 outline-none p-3 border-b w-full focus-visible:border-gray-700" />
        </div>
    )
}