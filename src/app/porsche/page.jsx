import { PorschePage } from "../../components/porsche/PorschePage";
import "../../components/porsche/styles.css";

const Porsche = () => {
  return (
    <>
      <PorschePage />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
    </>
  )
}

export default Porsche;