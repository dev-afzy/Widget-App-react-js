import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [translate, setTranslate] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [text]);

  useEffect(() => {
    const googleTranslate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            q: debouncedText,
            target: language.value,
          },
        }
      );
      console.log(data);
      setTranslate(data.data.translations[0].translatedText);
    };
    googleTranslate();
  }, [debouncedText, language]);

  return (
    <div>
      <h1 style={{ margin: 10 }} className="ui header">
        OUTPUT
      </h1>
      <h2 style={{ margin: 10 }}>{translate}</h2>
    </div>
  );
};

export default Convert;
