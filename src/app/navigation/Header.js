import MainHeader from './MainHeader';
import SecondaryHeader from './SecondaryHeader';

import React, {Fragment} from 'react';

export default function Header() {
  return (
    <Fragment>
      <MainHeader />
      <SecondaryHeader />
    </Fragment>
  );
}
