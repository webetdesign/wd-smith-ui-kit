import { MediaLibraryApp } from 'wd-smith-ui';
// import { MediaPickerApp } from 'wd-smith-ui';
import 'wd-smith-ui/style.css';

function App() {

  return (
    <div style={{'height': '100vh'}}>
      <TestLibrary/>
      {/*<TestPicker/>*/}
    </div>
  )
}

export default App

function TestLibrary() {
  return (
    <MediaLibraryApp serverUrl="https://local.smith.fr" />
  )
}

// function TestPicker() {
//   const test = (value: number|null) => {
//     console.log('ici', value);
//   };
//
//   return (
//     <div className="w-[200px]">
//       <MediaPickerApp onPickedMedia={test} serverUrl="https://local.smith.fr"/>
//     </div>
//   )
// }
