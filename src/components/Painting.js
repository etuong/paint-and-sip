import React from 'react';
import styles from "@/styles/Painting.module.css";

const Painting = ({ imgPath }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [vote, setVote] = React.useState(0);

  const poll = () => {
    fetch("/api/poll", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "name": imgPath })
    })
    setShowOverlay(false);
  }

  const showMeta = () => {
    fetch(`/api/painting?name=${imgPath}`)
      .then(response => response.json())
      .then(data => setVote(data?.painting?.vote || 0))
    setShowOverlay(true);
  }

  return (
    <>
      {showOverlay ? <div className={`${styles.container}`}>
        <h3>Current Vote: {vote}</h3>
        <span onClick={_e => poll()} className={`${styles.emoji}`}>👍</span>
        <span onClick={_e => poll()} className={`${styles.emoji}`}>👎</span>
      </div> :
        <img src={imgPath} width="200" alt="" onClick={_e => showMeta()} />}
    </>
  )
}

export default Painting;