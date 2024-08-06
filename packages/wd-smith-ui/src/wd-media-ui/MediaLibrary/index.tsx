import {HTMLAttributes} from "react";
import {Provider} from 'react-redux';
import store from '@/wd-media-ui/stores';
import Layout from "@/wd-media-ui/components/Layout.tsx";


function MediaLibrary({ ...rest }: HTMLAttributes<HTMLElement>) {

  return (
    <div {...rest}>
      <Provider store={store}>
        <Layout/>
      </Provider>
    </div>
  )
}

export default MediaLibrary;
