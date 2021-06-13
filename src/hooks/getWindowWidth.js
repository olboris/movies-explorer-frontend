import {useState, useEffect} from 'react';

function GetWindowWidth() {
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
      function changeWindowWidth (){
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", changeWindowWidth);
      changeWindowWidth();
      return () => window.removeEventListener("resize", changeWindowWidth);
    }, []);
    return windowWidth;
  }

  export default GetWindowWidth;