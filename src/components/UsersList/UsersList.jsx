import { UsersCard } from "../UsersCard/UsersCard";

export const UsersList = ({ assets }) => {

  return (
    <section className="section">
      {assets.map((asset) => (
        <UsersCard key={asset.Cedula} asset={{ ...asset }} />
      ))}
    </section>
  );
};
