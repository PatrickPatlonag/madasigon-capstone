import React, { useEffect, useState } from "react";
import {
  database,
  onSnapshot,
  collection,
  query,
  addDoc,
} from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";
import { StarIcon } from "@heroicons/react/outline";
import {
  StarIcon as StarIconSolid,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Header from "../../components/Header";

function Review() {
  const [issues, setIssues] = useState([]);
  const [star, setStar] = useState(0);
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(collection(database, "issues"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIssues(querySnapshot.docs.map((doc) => collectIdsAndDocs(doc)));
    });
    return () => unsubscribe;
  }, []);
  useEffect(() => {
    const q = query(collection(database, "reviews"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setReviews(querySnapshot.docs.map((doc) => collectIdsAndDocs(doc)));
    });
    return () => unsubscribe;
  }, []);

  const getRating = () => {
    return (
      reviews.reduce((sum, item) => sum + item.star, 0) / reviews.length
    ).toFixed(1);
  };

  const getIssueTotal = (id) => {
    return reviews.filter((item) => item.issue === id).length;
  };

  console.log("rating: ", getRating());

  const handleStar = (value) => {
    console.log("value is: ", value);
    setStar(value + 1);
  };

  const handleSubmit = () => {
    addDoc(collection(database, "reviews"), {
      star,
      email,
      issue,
      comment,
    }).then((res) => {
      console.log("success");
      setEmail("");
      setIssue("");
      setComment("");
      setStar(0);
    });
  };

  return (
    <>
      <Header />
      <div className="h-screen max-w-screen-lg mx-auto pt-60">
        <div className="flex justify-evenly space-x-6">
          {/* LEFT */}
          <div className="border border-primary rounded-md flex-1 flex flex-col items-center py-4">
            <h1 className="text-3xl text-center font-bold mb-10">
              User Reviews
            </h1>
            <div className="flex space-x-6 items-center justify-evenly mb-10">
              <div className="text-center">
                <h1 className="text-primary font-semibold text-2xl">
                  {reviews.length}
                </h1>
                <p>Users</p>
              </div>
              <div className="text-center">
                <h1 className="text-primary font-semibold text-2xl">
                  {getRating()}
                </h1>
                <p>Ratings</p>
              </div>
            </div>

            <div className="space-y-2 w-full px-16">
              <div className="flex justify-around capitalize">
                <div className="flex-1">
                  <h1>{""}</h1>
                </div>
                <div className="flex-1 self-center flex justify-center">
                  <p className="px-4 text-primary font-semibold flex-1 flex items-center gap-2">
                    <UserCircleIcon className="h-4 w-4" /> No. of Users
                  </p>
                </div>
              </div>
              {issues.map((item) => (
                <div className="flex justify-between capitalize">
                  <div className="flex-1">
                    <h1>{item.issue}</h1>
                  </div>
                  <div className="flex-1 self-center flex justify-center">
                    <p className="px-4 text-primary font-semibold ">
                      {getIssueTotal(item.id)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-primary rounded-md flex-1 py-4">
            <h1 className="text-3xl text-center font-bold mb-10">
              Magbilin ug feedback
            </h1>
            <div className="flex flex-col items-center space-y-6">
              <div>
                <div className="flex space-x-2">
                  {[...new Array(5)].map((_, index) =>
                    index < star ? (
                      <StarIconSolid
                        className="h-8 w-8 text-primary cursor-pointer"
                        onClick={() => handleStar(index)}
                      />
                    ) : (
                      <StarIcon
                        className="h-8 w-8 text-primary cursor-pointer"
                        onClick={() => handleStar(index)}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  className="border border-gray-200 rounded-md px-4 py-2"
                  type="text"
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <p>Unsa nga issue ang imong gisulayan pagsulbad?</p>
                <select
                  name=""
                  id=""
                  defaultValue=""
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                >
                  <option value="">Select issue..</option>
                  {issues.map((item) => (
                    <option value={item.id}>{item.issue}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <label htmlFor="comment">Comments and Suggestions</label>
                <input
                  className="border border-gray-200 rounded-md px-4 py-2"
                  type="text"
                  name="comment"
                  placeholder="Comments and suggestions.. "
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <button
                className="bg-primary px-10 py-3 rounded-md shadow-md text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
