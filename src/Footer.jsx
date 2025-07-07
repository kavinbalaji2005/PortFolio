import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { database, ref, get, runTransaction } from "./firebase";

const Footer = () => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const likesRef = ref(database, "likes/count");

    get(likesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setLikes(snapshot.val());
        } else {
          // First-time setup
          setLikes(0);
        }
      })
      .catch((error) => {
        console.error("Error fetching like count:", error);
      });
  }, []);

  const handleLikes = () => {
    const likesRef = ref(database, "likes/count");

    runTransaction(likesRef, (currentLikes) => {
      return (currentLikes || 0) + 1;
    })
      .then((result) => {
        if (result.committed) {
          setLikes(result.snapshot.val());
        }
      })
      .catch((error) => {
        console.error("Transaction failed:", error);
      });
  };

  return (
    <div className="footer">
      <hr />

      <div className="like-container" onClick={handleLikes}>
        <p className="like-message">
          Did you like my portfolio?{" "}
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          <span className="like-count">{likes}</span>
        </p>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; {new Date().getFullYear()} Vishal Songara. All rights reserved
        </p>
        <div className="footer-botton-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
