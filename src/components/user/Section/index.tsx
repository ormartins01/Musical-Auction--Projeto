import { useContext } from "react";
import { UserContext } from "../../../contexts/ApiContext";
import { StSect } from "./style";
import { UlBids } from "./userBidsUl";
import { UlProducts } from "./userProductsUl";
export const UserSection = () => {
  const { userFilt, setUserFilt } = useContext(UserContext);


  return (
    <StSect>
      <div className="filter">
        <button onClick={() => setUserFilt("products")}>Meus lances</button>
        <button onClick={() => setUserFilt("bids")}>Meus produtos</button>
      </div>
      {userFilt === "products" ? <UlProducts /> : <UlBids />}
    </StSect>
  );
};