import { useParams } from "react-router-dom";
import '../assets/styles/AssetDetail.css';
export const AssetDetail = () => {
  const { id } = useParams();

  return (
    <div className="asset__container">
      <h1>Asset with id: {id}</h1>
    </div>
  )
}
