import { MediaLibrary } from 'wd-smith-ui';
import 'wd-smith-ui/style.css';

function App() {

  return (
    <div style={{'height': '100vh'}}>
      <MediaLibrary serverUrl="https://local.smith.fr" />
    </div>
  )
}

export default App
