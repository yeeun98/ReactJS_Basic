import { useEffect, useState } from 'react';
import styles from './CoinTracker.module.css';

function CoinTrackerMain({coins, unitIdx, onChange}) {
  const [usd, setUsd] = useState(0);
  const [changeAmount, setChangeAmount] = useState(0);

  const onInputChange = (e) => setUsd(e.target.value);
  const changeAmountByUnit = () => {
    const price = coins.filter((v, idx) => idx == unitIdx)[0].quotes.USD.price;
    setChangeAmount(Math.round(usd / price * 100) / 100);
  }
  const changeSelect = (e) => {
    setChangeAmount(0);
    onChange(e);
  }

  return (
    <div>
      <section className={styles.input_section}>
        <div className={styles.input_wrap}>
          <input type="text" className={styles.input_wrap_child} value={usd} onChange={(e) => onInputChange(e)} placeholder='write dollar' />
          <div className={`${styles.unit} ${styles.usd_unit}`}>
            <img src="https://wise.com/web-art/assets/flags/usd.svg" alt="" width="24" height="24" />
            <span>USD</span>
          </div>
        </div>

        <button type='button' onClick={changeAmountByUnit}>→</button>

        <div className={styles.input_wrap}>
          <span className={styles.input_wrap_child}>{changeAmount}</span>
          <select className={`${styles.unit} ${styles.select_unit}`} value={unitIdx} onChange={(e) => changeSelect(e)}>
            {
              coins.map((v, idx) => <option key={`${v.symbol}_${idx}`} value={idx}>{v.symbol}</option>)
            }
          </select>
        </div>
      </section>
    </div>
  );
}

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [unitIdx, setUnitIdx] = useState(0);

  const onChange = (event) => { setUnitIdx(event.target.value) };

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(response => response.json())
    .then(json => {
      setCoins([...json])
      setLoading((current) => !current);
    });
  },[])

  return (
    <div>
      <h1>{ loading ?  'The Coins !' : `USD → ${coins.filter((v, idx) => idx == unitIdx)[0].symbol} 변환`}</h1>
      { loading ? 
        <strong>Loading...</strong> : <CoinTrackerMain coins={coins} unitIdx={unitIdx} onChange={onChange} />
      }
    </div>
  );
}

export default CoinTracker;
