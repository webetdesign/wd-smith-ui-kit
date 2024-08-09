// import {MediaLibraryApp} from 'wd-smith-ui';
import {MediaPickerApp} from 'wd-smith-ui';
import 'wd-smith-ui/style.css';

function App() {

  return (
    <div className="" style={{ 'height': '100vh' }}>
      {/*<TestLibrary/>*/}
      <TestPicker/>
    </div>
  )
}

export default App

// function TestLibrary() {
//   return (
//     <MediaLibraryApp className="media-app-root" serverUrl="https://local.smith.fr"/>
//   )
// }

function TestPicker() {
  const test = (value: number | null) => {
    console.log('ici', value);
  };

  const container = document.getElementById('dialog-root');
  if (container === undefined || container === null) {
    throw new Error('dialog-root element is undefined');
  }

  return (
    <div className="w-[200px]">
      <MediaPickerApp value={35} dialogContainer={container} onPickedMedia={test} serverUrl="https://local.smith.fr"/>
    </div>
  )
}
