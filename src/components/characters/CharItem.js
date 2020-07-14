import React from "react";

const CharItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              {item.better_call_saul_appearance.length ? (
                <div>
                  <strong>Appearance in Better Call Saul series :</strong>
                  Appears
                </div>
              ) : (
                <div>
                  <strong>Appearance in Better Call Saul series :</strong> No
                  Appearance
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharItem;
