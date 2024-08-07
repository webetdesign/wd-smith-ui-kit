import { MediaLibrary } from 'wd-smith-ui';
import 'wd-smith-ui/style.css';

function App() {

  return (
    <div style={{'backgroundColor': 'red'}}>
      <MediaLibrary serverUrl="https://local.smith.fr" />
    </div>
  )
}

export default App
