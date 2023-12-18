
import SunEditor from 'suneditor-react';
import { useCallback, useState } from 'react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { useEffect } from 'react';
import { getActicles } from '../../api/requests';
import {
    align,
    fontColor,
    hiliteColor,
    list,
    table,
    formatBlock,
    textStyle,
    image
  } from "suneditor/src/plugins";
const Index = () => {
    const [data, setData] = useState('');
    const [art, setArt] = useState({});
    const getActi = useCallback(async () => {
        const d = await getActicles(1);
        setArt(d.data.data);
    }, []);

    useEffect(() => {
        getActi();
    }, [getActi]);

    const click = async () => {
        console.log(data);
    }
    console.log(art?.text);
    return <>
        <SunEditor 
            onChange={setData}
            setOptions={other => ({...other, plugins: [
                align,
                formatBlock,
                fontColor,
                hiliteColor,
                list,
                table,
                textStyle,
                image,
                imageGallery
              ],})}
            defaultValue={art.text}
        />
        <button onClick={click}>کلیک</button>
    </>;
}

export default Index;