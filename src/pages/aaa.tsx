import { login} from '@/services/index'

function Caaa() {
  const sadsasd =async ()=>{
    const res = await login({
      username: 'admin',
      password: 'admin'
    })
    console.log(res);
  }


  return (
    <div className="text-red-500">
      <div onClick={sadsasd}>接口</div>
    </div>
  )
}

export default Caaa
