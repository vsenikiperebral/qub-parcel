import { Wrapper } from 'components/Wrapper/Wrapper';
import css from './Location.module.css';


export const Location = ({ type, title, n, e, gradient }) => {
    return (
      <Wrapper>
        <div className={css.location}>
          <span className={css.type}>{type.toLowerCase()}</span>
          <h2 className={css.title}>{title.toUpperCase()}</h2>
          <span className={css.n}>{n}</span>
          <span className={css.e}>{e}</span>
          <div
            className={css.gradient}
            style={{ backgroundImage: gradient }}
          ></div>
        </div>
      </Wrapper>
    );
  };

  export const Locations = () => {
    return (
      <div>
        {locations.map(location => (
          <Location key={location.id} {...location} />
        ))}
      </div>
    );
  };

// export const Location = () => {
//   return (
//     <Wrapper>
//       <div className={css.location}>
//         <span className={css.type}>{location.type.toLowerCase()}</span>
//         <h2 className={css.title}>
//           {brTitle[0]} <br /> {brTitle.slice(1).join(' ')}
//         </h2>
//         <span className={css.n}>{location.n}</span>
//         <span className={css.e}>{location.e}</span>
//         <div
//           className={css.gradient}
//           style={{ backgroundImage: location.gradient }}
//         ></div>
//       </div>
//     </Wrapper>
//   );
// };

// export const location = {
//   id: 'id-1',
//   title: 'Святой Влас',
//   type: 'Город',
//   n: "42° 42' 59.99 N",
//   e: "27° 45' 59.99 E",
//   gradient: 'linear-gradient(0deg, #fd6f7b, transparent)',
// };

export const locations = [
  {
    id: 'id-1',
    title: 'Святой Влас',
    type: 'Город',
    n: "42° 42' 59.99 N",
    e: "27° 45' 59.99 E",
    gradient: 'linear-gradient(0deg, #fd6f7b, transparent)',
  },

  {
    id: 'id-2',
    title: 'Несебыр',
    type: 'Город',
    n: "42° 39' 33.16 N",
    e: "27° 44' 10.67 E",
    gradient: 'linear-gradient(0deg, #DAA520, transparent)',
  },

  {
    id: 'id-3',
    title: 'Солнечный Берег',
    type: 'Курортный комплекс',
    n: "42° 41' 20.99 N",
    e: "27° 42' 17.99 E",
    gradient: 'linear-gradient(0deg, #009ece, transparent)',
  },
];

// const title = location.title.toUpperCase();
// const brTitle = title.split(' ');

// {brTitle[0]} <br /> {brTitle.slice(1).join(' ')}