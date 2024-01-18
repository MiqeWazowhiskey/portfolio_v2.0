import { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";

const useWindowLocation = () => {
  const [pathName, setPathname] = useState(window.location.pathname);
  const location = useLocation();
  useEffect(() => {
      setPathname(window.location.pathname);

  }, [location]);

  return pathName;
};

export default useWindowLocation;
