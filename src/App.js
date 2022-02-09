import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './style.css';

import { FetchExample } from './fetchExample/index';
import { WithCSSFlex } from './fetchExample/withCssFlex';
import ForwardRef from './forwardRefExample/index';
import { Example } from './example/index';
import { CustomAutoComplete } from './custom-autocomplete/index';
import ApiSearch  from './APISearchCalls/index';

const Home = () => <div>HOme</div>;

export default function App() {
  return (
    <div>
      <FetchExample />
      <WithCSSFlex />
      <ForwardRef />
      <Example />
      <ApiSearch />
    </div>
  );
}
