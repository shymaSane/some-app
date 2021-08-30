import MainHeader from './MainHeader';
import SecondaryHeader from './SecondaryHeader';

import React, {Fragment, Component} from 'react';



export default function Header({navigation}) {
  return (
    <Fragment>
        <MainHeader />
        <SecondaryHeader />
      </Fragment>
  )
}



