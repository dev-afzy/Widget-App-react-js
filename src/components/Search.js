import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    //Method 1
    // const search = async () => {
    //   await axios.get('url')
    // }
    // search();
    // Method 2
    const timeOutId = setTimeout(() => {
      if (term) {
        (async () => {
          const { data } = await await axios.get(
            'https://en.wikipedia.org/w/api.php',
            {
              params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term,
              },
            }
          );
          setResults(data.query.search);
        })();
      }
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
    //Method 3
    // axios.get('url')
    // .then((response) => {
    //   console.log(response)
    // })
  }, [term]);
  const renderList = results.map((result) => {
    return (
      <div className="ui item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="ui content">
          <div className="ui header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="ui field">
        <label htmlFor="term">Enter Search Term</label>
        <input
          type="text"
          name="term"
          className="field"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      {renderList}
    </div>
  );
};
export default Search;
