import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {/* render out the beanie babies as a list */}
      {beanieBabies.map((beanie, i) => <BeanieBaby key={`${beanie}-${i}`} beanieBaby={beanie} />)}
    </div>);
}
