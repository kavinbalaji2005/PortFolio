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
        // Fallback to local state if Firebase fails
        setLikes(0);
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
        // Fallback: increment local state even if Firebase fails
        setLikes(prevLikes => prevLikes + 1);
      });
  };

  const getLikeMessage = (count) => {
    if (count === 0) return "Be the first to like this portfolio!";
    if (count === 1) return "1 person likes this portfolio!";
    return `${count} people like this portfolio!`;
  };

  return (
    <div className="footer">
      <hr />

      <div className="like-container" onClick={handleLikes}>
        <p className="like-message">
          {getLikeMessage(likes)}{" "}
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </p>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; {new Date().getFullYear()} Kavin Balaji. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;