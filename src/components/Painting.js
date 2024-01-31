import React from 'react';
import styles from "@/styles/Painting.module.css";

const Painting = ({ imgPath, onShow, showOverlay }) => {
  const [vote, setVote] = React.useState(0);

  const poll = (int) => {
    fetch("/api/poll", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "name": imgPath, "int": int })
    })
    onShow(undefined);
  }

  const showMeta = () => {
    fetch(`/api/painting?name=${imgPath}`)
      .then(response => response.json())
      .then(data => {
        if (data?.painting) {
          setVote(data?.painting?.vote)
        }
      })
    onShow(imgPath);
  }

  return (
    <>
      {showOverlay ? <div className={`${styles.container}`}>
        <h3>Current Vote: {vote}</h3>
        <span onClick={_e => poll(1)} className={`${styles.emoji}`}>👍</span>
        <span onClick={_e => poll(-1)} className={`${styles.emoji}`}>👎</span>
      </div> :
        <img src={imgPath} width="150" alt="" onClick={_e => showMeta()} />}
    </>
  )
}

export default Painting;