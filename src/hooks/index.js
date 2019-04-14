//index.js

import { useState, useEffect, useRef } from 'react';

export const useComponentVisible=(initialIsVisible)=>
{
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
};

export const useOuterClickNotifier=(onOuterClick, innerRef)=>
{
  useEffect(
    () => {
      if (innerRef.current) {
        document.addEventListener("click", handleClick);
      }

      // unmount previous first in case input have changed
      return () => document.removeEventListener("click", handleClick);

      function handleClick(e) {
        !innerRef.current.contains(e.target) && onOuterClick(e);
      }
    },
    [onOuterClick, innerRef] // invoke again, if inputs have changed
  );
};
