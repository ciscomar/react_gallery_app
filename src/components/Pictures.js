import React from 'react';
import Picture from './Picture';
import NotFound from './NotFound';

const Pictures = props => {

  const results = props.data;
  let searched;

  //Receiving information via props, If the result its ok then fill the url if not then show NotFound
  if (results.length > 0) {
    searched = results.map(picture =>
      <Picture url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_m.jpg`} key={picture.id} alt={props.title} />);
  } else {
    searched = <NotFound />
  }
  return (
    <div>
      <ul>
        {searched}
      </ul>
    </div>
  );
}

export default Pictures;
