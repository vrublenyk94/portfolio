import Button from './components/button/button'
import Link from './components/link/link'
import Input from './components/input/input'
import Checkbox from './components/checkbox/checkbox'
import Modal from './components/modal/modal'
import Textarea from './components/textarea/textarea'
import Select from './components/select/select'
import Dropdown from './components/dropdown/dropdown'
import Colorpicker from './components/colorpicker/colorpicker'
import Datepicker from './components/datepicker/datepicker'
import Toast from './components/toast/toast'
import './App.css'


function App() {
  const onClick = () => console.log('clicked')
  const today = new Date();
  return (
    <div className='app'>
      <Button type={'primary'} onClick={onClick} children={'Button'} disabled={false}/>
      <Link type={'primary'} children={'Link'} disabled={false} href={'#'}/>
      <div className=" wrapper input__wrapper">
        <Input type={'name'} label={'username'} placeholder = {'enter username'} disabled={false} errorMessage={'Please enter your name'} />
        <Input type={'password'} label={'Password*'} placeholder = {'enter username'} disabled={false} errorMessage={'Please enter your name'} />
      </div>
      <div className="wrapper">
        <Checkbox label={'text'} />
      </div>
      <div className="wrapper">
        <Modal/>
      </div>

      <div className="wrapper">
        <Textarea/>
      </div>

      <div className="select-wrapper">
        <Select label={'time'} options ={['12:00', '12:15', '12:30', '12:45', '13:00','13:15','13:30','13:45','14:00']}/>
      </div>

      <div className="select-wrapper">
        <Dropdown options ={['Week', 'Day', 'Hour']} defaultOption={'Year'}/>
      </div>

      <div className="select-wrapper">
        <Colorpicker title={'Colors'} colors={['rgb(159, 41, 87)', 'rgb(217, 0, 86)', 'rgb(226, 93, 51)', 'rgb(223, 196, 90)', 'rgb(184, 196, 47)', 'rgb(22, 175, 110)', 'rgb(66, 148, 136)', 'rgb(57, 126, 73)', 'rgb(67, 155, 223)', 'rgb(66, 84, 175)', 'rgb(108, 122, 196)', 'rgb(131, 50, 164)']}/>
      </div>

      <div className="select-wrapper">
        <Datepicker date ={ today} />
      </div>

      <div className="select-wrapper">
        <Toast  title={'Event deleted'} onClick={onClick}/>
      </div>

      <Input type={'textarea'} label={'textarea'} placeholder = {'enter ypur text'} cols = {53} rows={15} disabled={false} errorMessage={'Please enter your name'} />

    </div>
  )
}

export default App
