export default function Friend({ id, name, image, balance, handleSelect }) {
  return (
    <li>
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p className={balance === 0 ? "" : balance > 0 ? "green" : "red"}>
        {balance === 0
          ? `You and ${name} are even `
          : balance > 0
          ? `${name} owns you `
          : `You own ${name} `}
        {balance !== 0 && Math.abs(balance)}
      </p>
      <button className="button" onClick={() => handleSelect(id)}>
        select
      </button>
    </li>
  );
}
